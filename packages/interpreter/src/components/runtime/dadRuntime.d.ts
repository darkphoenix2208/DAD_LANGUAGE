import { ASTNode } from "dad-lang-parser";
export declare class DadInstance {
    klass: DadClass;
    fields: Map<string, any>;
    constructor(klass: DadClass);
    get(name: string): any;
    set(name: string, value: any): void;
}
export declare class DadClass {
    name: string;
    methods: Map<string, ASTNode>;
    superClass: DadClass | null;
    constructor(name: string, methods: Map<string, ASTNode>, superClass: DadClass | null);
    findMethod(name: string): ASTNode | undefined;
    instantiate(args: any[]): DadInstance;
    _callMethod(methodNode: ASTNode, instance: DadInstance, args: any[]): void;
}
//# sourceMappingURL=dadRuntime.d.ts.map