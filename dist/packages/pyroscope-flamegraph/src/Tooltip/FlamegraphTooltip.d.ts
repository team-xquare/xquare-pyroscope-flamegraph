import { RefObject } from 'react';
import { Maybe } from 'true-myth';
import { Units } from '@pyroscope/models/src/units';
import { FlamegraphPalette } from '../FlameGraph/FlameGraphComponent/colorPalette';
import { TooltipData } from './Tooltip';
declare type xyToDataSingle = (x: number, y: number) => Maybe<{
    format: 'single';
    name: string;
    total: number;
}>;
declare type xyToDataDouble = (x: number, y: number) => Maybe<{
    format: 'double';
    name: string;
    totalLeft: number;
    totalRight: number;
    barTotal: number;
}>;
export declare type FlamegraphTooltipProps = {
    canvasRef: RefObject<HTMLCanvasElement>;
    units: Units;
    sampleRate: number;
    numTicks: number;
    leftTicks: number;
    rightTicks: number;
    palette: FlamegraphPalette;
} & ({
    format: 'single';
    xyToData: xyToDataSingle;
} | {
    format: 'double';
    leftTicks: number;
    rightTicks: number;
    xyToData: xyToDataDouble;
});
export default function FlamegraphTooltip(props: FlamegraphTooltipProps): JSX.Element;
interface Formatter {
    format(samples: number, sampleRate: number): string;
}
export declare function formatDouble({ formatter, sampleRate, totalLeft, leftTicks, totalRight, rightTicks, title, units, }: {
    formatter: Formatter;
    sampleRate: number;
    totalLeft: number;
    leftTicks: number;
    totalRight: number;
    rightTicks: number;
    title: string;
    units: Units;
}, palette?: FlamegraphPalette): {
    tooltipData: TooltipData[];
    title: {
        text: string;
        diff: {
            text: string;
            color: string;
        };
    };
};
export {};
