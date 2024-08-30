import { Maybe } from 'true-myth';
import React from 'react';
import { DeepReadonly } from 'ts-essentials';
export interface HighlightProps {
    barHeight: number;
    zoom: Maybe<DeepReadonly<{
        i: number;
        j: number;
    }>>;
    xyToHighlightData: (x: number, y: number) => Maybe<{
        left: number;
        top: number;
        width: number;
    }>;
    canvasRef: React.RefObject<HTMLCanvasElement>;
}
export default function Highlight(props: HighlightProps): JSX.Element;
