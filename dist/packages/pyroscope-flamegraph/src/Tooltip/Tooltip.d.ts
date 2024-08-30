import { RefObject, Dispatch, SetStateAction } from 'react';
import { Units } from '@pyroscope/models/src';
export declare type TooltipData = {
    units: Units;
    percent?: string | number;
    samples?: string;
    formattedValue?: string;
    self?: string;
    total?: string;
    tooltipType: 'table' | 'flamegraph';
};
export interface TooltipProps {
    dataSourceRef: RefObject<HTMLCanvasElement | HTMLTableSectionElement>;
    shouldShowFooter?: boolean;
    shouldShowTitle?: boolean;
    clickInfoSide?: 'left' | 'right';
    setTooltipContent: (setContent: Dispatch<SetStateAction<{
        title: {
            text: string;
            diff: {
                text: string;
                color: string;
            };
        };
        tooltipData: TooltipData[];
    }>>, onMouseOut: () => void, e: MouseEvent) => void;
}
export declare function Tooltip({ shouldShowFooter, shouldShowTitle, dataSourceRef, clickInfoSide, setTooltipContent, }: TooltipProps): JSX.Element;
