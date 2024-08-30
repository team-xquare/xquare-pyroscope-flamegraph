import { RefObject } from 'react';
import { Units } from '@pyroscope/models/src/units';
import { FlamegraphPalette } from '../FlameGraph/FlameGraphComponent/colorPalette';
export interface TableTooltipProps {
    tableBodyRef: RefObject<HTMLTableSectionElement>;
    numTicks: number;
    sampleRate: number;
    units: Units;
    palette: FlamegraphPalette;
}
export default function TableTooltip({ numTicks, sampleRate, units, tableBodyRef, palette, }: TableTooltipProps): JSX.Element;
