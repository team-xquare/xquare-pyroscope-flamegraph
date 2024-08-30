import { DeepReadonly } from 'ts-essentials';
import { Maybe } from 'true-myth';
import { Flamebearer } from '@pyroscope/models/src';
import { FlamegraphPalette } from './colorPalette';
export default class Flamegraph {
    private readonly flamebearer;
    private canvas;
    private focusedNode;
    private readonly fitMode;
    private readonly highlightQuery;
    private zoom;
    private palette;
    private ff;
    constructor(flamebearer: Flamebearer, canvas: HTMLCanvasElement, focusedNode: Maybe<DeepReadonly<{
        i: number;
        j: number;
    }>>, fitMode: 'HEAD' | 'TAIL', highlightQuery: string, zoom: Maybe<DeepReadonly<{
        i: number;
        j: number;
    }>>, palette: FlamegraphPalette);
    render(): void;
    private pxPerTick;
    private tickToX;
    private getRange;
    private getCanvasWidth;
    private isFocused;
    private binarySearchLevel;
    private xyToBarIndex;
    private parseXY;
    private xyToBarPosition;
    private xyToBarData;
    isWithinBounds: (x: number, y: number) => boolean;
    xyToBar(x: number, y: number): Maybe<{
        format: "single";
        name: string;
        self: number;
        offset: number;
        total: number;
        barTotal?: undefined;
        totalLeft?: undefined;
        totalRight?: undefined;
        totalDiff?: undefined;
        x: number;
        y: number;
        width: number;
        i: number;
        j: number;
    } | {
        format: "double";
        barTotal: number;
        totalLeft: number;
        totalRight: number;
        totalDiff: number;
        name: string;
        self?: undefined;
        offset?: undefined;
        total?: undefined;
        x: number;
        y: number;
        width: number;
        i: number;
        j: number;
    }>;
}
