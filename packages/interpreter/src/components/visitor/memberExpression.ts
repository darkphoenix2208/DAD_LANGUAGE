import Visitor from ".";
import { ASTNode } from "dad-lang-parser";
import InterpreterModule from "../../module/interpreterModule";
import RuntimeException from "../../exceptions/runtimeException";

export default class MemberExpression implements Visitor {
    visitNode(node: ASTNode) {
        const object = InterpreterModule.getVisitor(node.object!.type).visitNode(node.object!);

        let property;
        if (node.computed) {
            property = InterpreterModule.getVisitor(node.property!.type).visitNode(node.property!);
        } else {
            property = node.property!.name;
        }

        // Handle Array properties/methods
        if (Array.isArray(object)) {
            if (property === "aukaat") return object.length;
            if (property === "thoos_de") return object.push.bind(object);
            if (property === "nikal_fek") return object.pop.bind(object);
        }

        // Handle DadInstance
        // We need to import DadInstance or check shape. 
        // Since recursive dependency might occur if we import DadInstance at top level?
        // Let's use 'get' method check or lazy import if strict.
        // Actually runtime imports are fine.
        if (object && typeof (object as any).get === 'function' && (object as any).fields instanceof Map) {
            return (object as any).get(property as string);
        }

        // Generic access
        if (object === undefined || object === null) {
            throw new RuntimeException(`Cannot read property '${property}' of ${object}`);
        }

        const val = (object as any)[property as any];
        if (typeof val === 'function') {
            return val.bind(object);
        }
        return val;
    }
}
