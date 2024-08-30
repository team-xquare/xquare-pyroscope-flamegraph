/// <reference types="react" />
import { Maybe } from 'true-myth';
export interface HighlightProps {
    barHeight: number;
    node: Maybe<{
        top: number;
        left: number;
        width: number;
    }>;
}
export default function ContextMenuHighlight(props: HighlightProps): JSX.Element;
