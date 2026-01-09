export type ASTNode = {
  type: string;
  body?: ASTNode | ASTNode[];
  expressions?: ASTNode[];
  expression?: ASTNode;
  operator?: string;
  name?: string;
  left?: ASTNode;
  right?: ASTNode;
  value?: string | number | boolean | null | ASTNode; // Merged for Literal, Class Method value
  id?: ASTNode;
  init?: ASTNode | null;
  declarations?: ASTNode[];
  test?: ASTNode | null; // Merged for If, SwitchCase
  consequent?: ASTNode | ASTNode[]; // Merged for If, SwitchCase (array)
  alternates?: ASTNode[];
  duration?: ASTNode;
  tryBlock?: ASTNode[];
  catchBlock?: ASTNode[];
  kind?: string;
  elements?: ASTNode[];
  object?: ASTNode;
  property?: ASTNode;
  computed?: boolean;
  callee?: ASTNode;
  arguments?: ASTNode[];
  superClass?: ASTNode;
  key?: ASTNode; // For Class Method key
  discriminant?: ASTNode;
  cases?: ASTNode[];
  params?: ASTNode[];
};
