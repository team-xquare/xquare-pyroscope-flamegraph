/// <reference types="react" />
import { Maybe } from 'true-myth';
import { Flamebearer } from '@pyroscope/models/src';
import Flamegraph from './Flamegraph';
import { FlamegraphPalette } from './colorPalette';
import { ViewTypes } from './viewTypes';
import { FitModes } from '../../fitMode/fitMode';
interface FlamegraphProps {
    flamebearer: Flamebearer;
    focusedNode: ConstructorParameters<typeof Flamegraph>[2];
    fitMode: ConstructorParameters<typeof Flamegraph>[3];
    updateFitMode: (f: FitModes) => void;
    highlightQuery: ConstructorParameters<typeof Flamegraph>[4];
    zoom: ConstructorParameters<typeof Flamegraph>[5];
    showCredit: boolean;
    selectedItem: Maybe<string>;
    onZoom: (bar: Maybe<{
        i: number;
        j: number;
    }>) => void;
    onFocusOnNode: (i: number, j: number) => void;
    setActiveItem: (item: {
        name: string;
    }) => void;
    updateView?: (v: ViewTypes) => void;
    onReset: () => void;
    isDirty: () => boolean;
    ['data-testid']?: string;
    palette: FlamegraphPalette;
    setPalette: (p: FlamegraphPalette) => void;
    toolbarVisible?: boolean;
    headerVisible?: boolean;
    disableClick?: boolean;
    showSingleLevel?: boolean;
}
export default function FlameGraphComponent(props: FlamegraphProps): JSX.Element;
export {};
