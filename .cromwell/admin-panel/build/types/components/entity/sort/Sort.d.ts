export declare type TSortOption<TEntity> = {
    key: keyof TEntity;
    label: string;
};
export default function Sort<TEntity>(props: {
    options: TSortOption<TEntity>[];
    onChange: (key: keyof TEntity, order: 'ASC' | 'DESC') => any;
}): JSX.Element;
//# sourceMappingURL=Sort.d.ts.map