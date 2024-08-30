import { ReactNode, CSSProperties, RefObject } from 'react';
interface CustomProp {
    [k: string]: string | CSSProperties | ReactNode | number | undefined;
}
export interface Cell extends CustomProp {
    value: ReactNode | string;
    style?: CSSProperties;
}
interface HeadCell extends CustomProp {
    name: string;
    label: string;
    sortable?: number;
    default?: boolean;
}
export interface BodyRow {
    'data-row'?: string;
    isRowSelected?: boolean;
    isRowDisabled?: boolean;
    cells: Cell[];
    onClick?: () => void;
    className?: string;
}
export declare type TableBodyType = {
    type: 'not-filled';
    value: string | ReactNode;
    bodyClassName?: string;
} | {
    type: 'filled';
    bodyRows: BodyRow[];
};
declare type Table = TableBodyType & {
    headRow: HeadCell[];
};
interface TableSortProps {
    sortBy: string;
    updateSortParams: (v: string) => void;
    sortByDirection: 'desc' | 'asc';
}
export declare const useTableSort: (headRow: HeadCell[]) => TableSortProps;
interface TableProps {
    sortByDirection?: string;
    sortBy?: string;
    updateSortParams?: (newSortBy: string) => void;
    table: Table;
    tableBodyRef?: RefObject<HTMLTableSectionElement>;
    className?: string;
    isLoading?: boolean;
    itemsPerPage?: number;
}
declare function Table({ sortByDirection, sortBy, updateSortParams, table, tableBodyRef, className, isLoading, itemsPerPage, }: TableProps): JSX.Element;
export default Table;
