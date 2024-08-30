/// <reference types="react" />
import { FlamegraphPalette } from './colorPalette';
interface DiffLegendPaletteDropdownProps {
    palette: FlamegraphPalette;
    onChange: (p: FlamegraphPalette) => void;
}
export declare const DiffLegendPaletteDropdown: (props: DiffLegendPaletteDropdownProps) => JSX.Element;
export default DiffLegendPaletteDropdown;
