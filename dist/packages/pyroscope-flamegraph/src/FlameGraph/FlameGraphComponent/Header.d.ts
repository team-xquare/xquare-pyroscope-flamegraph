/// <reference types="react" />
import { Flamebearer } from '@pyroscope/models/src';
import { FlamegraphPalette } from './colorPalette';
interface HeaderProps {
    format: Flamebearer['format'];
    units: Flamebearer['units'];
    palette: FlamegraphPalette;
    setPalette: (p: FlamegraphPalette) => void;
    toolbarVisible?: boolean;
}
export default function Header(props: HeaderProps): JSX.Element;
export {};
