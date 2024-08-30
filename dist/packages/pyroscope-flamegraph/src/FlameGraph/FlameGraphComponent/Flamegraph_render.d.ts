import { Flamebearer } from '@pyroscope/models/src';
import { FlamegraphPalette } from './colorPalette';
import Flamegraph from './Flamegraph';
declare type CanvasRendererConfig = Flamebearer & {
    canvas: HTMLCanvasElement;
    focusedNode: ConstructorParameters<typeof Flamegraph>[2];
    fitMode: ConstructorParameters<typeof Flamegraph>[3];
    highlightQuery: ConstructorParameters<typeof Flamegraph>[4];
    zoom: ConstructorParameters<typeof Flamegraph>[5];
    readonly rangeMin: number;
    readonly rangeMax: number;
    tickToX: (i: number) => number;
    pxPerTick: number;
    palette: FlamegraphPalette;
    maxSelf?: number;
};
export default function RenderCanvas(props: CanvasRendererConfig): void;
export {};
