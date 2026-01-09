import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";
import RuntimeException from "../../exceptions/runtimeException";

export class DadInstance {
    klass: DadClass;
    fields: Map<string, any>;

    constructor(klass: DadClass) {
        this.klass = klass;
        this.fields = new Map();
    }

    get(name: string): any {
        if (this.fields.has(name)) {
            return this.fields.get(name);
        }

        const method = this.klass.findMethod(name);
        if (method) {
            // Bind method to this instance
            return (...args: any[]) => {
                return this.klass._callMethod(method, this, args);
            };
        }

        throw new RuntimeException(`Kya dhoond raha hai? Undefined property '${name}'.`);
    }

    set(name: string, value: any) {
        this.fields.set(name, value);
    }
}

export class DadClass {
    name: string;
    methods: Map<string, ASTNode>;
    superClass: DadClass | null;

    constructor(name: string, methods: Map<string, ASTNode>, superClass: DadClass | null) {
        this.name = name;
        this.methods = methods;
        this.superClass = superClass;
    }

    findMethod(name: string): ASTNode | undefined {
        if (this.methods.has(name)) {
            return this.methods.get(name);
        }
        if (this.superClass) {
            return this.superClass.findMethod(name);
        }
        return undefined;
    }

    instantiate(args: any[]): DadInstance {
        const instance = new DadInstance(this);
        const initializer = this.findMethod("constructor");
        if (initializer) {
            this._callMethod(initializer, instance, args);
        }
        return instance;
    }

    _callMethod(methodNode: ASTNode, instance: DadInstance, args: any[]) {
        const parentScope = InterpreterModule.getCurrentScope();
        const methodScope = parentScope.createChildScope();
        InterpreterModule.setCurrentScope(methodScope);

        methodScope.declare("khud", instance, true);

        // Explicitly cast ASTNode to access params
        const params = (methodNode.value as any).params || [];
        params.forEach((param: ASTNode, index: number) => {
            const argValue = args[index];
            if (param.name) {
                methodScope.declare(param.name, argValue);
            }
        });

        try {
            // Explicitly cast ASTNode to access body
            InterpreterModule.getVisitor((methodNode.value as any).body!.type).visitNode((methodNode.value as any).body!);
        } finally {
            InterpreterModule.setCurrentScope(parentScope);
        }
    }
}
