import { TreeNode } from './flamebearersToTree';
export declare const tree: TreeNode;
export declare const singleAppearanceTrees: {
    zero: {
        name: string;
        children: never[];
        self: number[];
        total: number[];
        key: string;
    };
    one: {
        name: string;
        key: string;
        self: number[];
        total: number[];
        children: {
            name: string;
            key: string;
            self: number[];
            total: number[];
            children: never[];
        }[];
    };
    multiple: {
        name: string;
        key: string;
        total: number[];
        self: number[];
        children: {
            name: string;
            key: string;
            self: number[];
            total: number[];
            children: {
                name: string;
                key: string;
                self: number[];
                total: number[];
                children: {
                    name: string;
                    key: string;
                    self: number[];
                    total: number[];
                    children: never[];
                }[];
            }[];
        }[];
    };
};
