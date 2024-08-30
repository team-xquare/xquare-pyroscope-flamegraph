/// <reference types="react" />
import { FlamegraphPalette } from './colorPalette';
export declare type sizeMode = 'small' | 'large';
interface DiffLegendProps {
    palette: FlamegraphPalette;
    showMode: sizeMode;
}
export default function DiffLegend(props: DiffLegendProps): JSX.Element;
export {};
