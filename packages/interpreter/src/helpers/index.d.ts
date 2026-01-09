export declare function checkNumberOperands(operands: {
    left: unknown;
    right: unknown;
}): operands is {
    left: number;
    right: number;
};
export declare function checkStringOperands(operands: {
    left: unknown;
    right: unknown;
}): operands is {
    left: string;
    right: string;
};
export declare function checkNumberAndStringOperands(operands: {
    left: unknown;
    right: unknown;
}): operands is {
    left: string;
    right: string;
};
export declare function getOperationValue(operands: {
    left: unknown;
    right: unknown;
}, operator: string): unknown;
//# sourceMappingURL=index.d.ts.map