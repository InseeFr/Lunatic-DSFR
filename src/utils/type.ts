export type Split<S extends string, D extends string> = string extends S
    ? string[]
    : S extends ""
      ? []
      : S extends `${infer T}${D}${infer U}`
        ? [T, ...Split<U, D>]
        : [S];

export type ItemOf<ArrayType> = ArrayType extends (infer ElementType)[] ? ElementType : never;
