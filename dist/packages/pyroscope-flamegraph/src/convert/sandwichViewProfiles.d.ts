import { Flamebearer } from '@pyroscope/models/src';
import { TreeNode } from './flamebearersToTree';
interface FlamebearerData {
    maxSelf: number;
    levels: number[][];
    names: string[];
}
export declare const treeToFlamebearer: (tree: TreeNode) => FlamebearerData;
export declare function calleesFlamebearer(f: Flamebearer, nodeName: string): Flamebearer;
export declare function callersFlamebearer(f: Flamebearer, nodeName: string): Flamebearer;
export declare function calleesProfile(f: Flamebearer, nodeName: string): Flamebearer;
export declare function callersProfile(f: Flamebearer, nodeName: string): Flamebearer;
export {};
