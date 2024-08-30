import { Profile } from '@pyroscope/models/src';
export interface TreeNode {
    name: string;
    key: string;
    self: number[];
    total: number[];
    offset?: number;
    children: TreeNode[];
}
export declare function flamebearersToTree(f1: Profile['flamebearer'], f2?: Profile['flamebearer']): TreeNode;
