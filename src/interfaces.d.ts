interface ITodo {
    description: string;
}

export interface ITodoItemState {}

export interface ITodoItemProps {
    item: ITodo;
    onRemove?: (todo: ITodo) => any;
    key?: number; // I think this prop is unnecessary, but unless it an error occurs in tsc.
}