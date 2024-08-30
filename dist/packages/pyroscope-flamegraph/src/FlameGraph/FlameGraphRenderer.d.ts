import { Dispatch, SetStateAction, ReactNode, Component } from 'react';
import { Maybe } from 'true-myth';
import { Flamebearer, Profile } from '@pyroscope/models/src';
import { ProfileHeaderProps } from '../Toolbar';
import { DefaultPalette } from './FlameGraphComponent/colorPalette';
import { FitModes } from '../fitMode/fitMode';
import { ViewTypes } from './FlameGraphComponent/viewTypes';
interface Node {
    i: number;
    j: number;
}
export interface FlamegraphRendererProps {
    profile?: Profile;
    onlyDisplay?: ViewTypes;
    showToolbar?: boolean;
    panesOrientation?: 'horizontal' | 'vertical';
    showPyroscopeLogo?: boolean;
    showCredit?: boolean;
    ExportData?: ProfileHeaderProps['ExportData'];
    flamebearer?: Flamebearer;
    sharedQuery?: {
        searchQuery?: string;
        onQueryChange: Dispatch<SetStateAction<string | undefined>>;
        syncEnabled: string | boolean;
        toggleSync: Dispatch<SetStateAction<boolean | string>>;
        id: string;
    };
    children?: ReactNode;
}
interface FlamegraphRendererState {
    isFlamegraphDirty: boolean;
    view: NonNullable<FlamegraphRendererProps['onlyDisplay']>;
    panesOrientation: NonNullable<FlamegraphRendererProps['panesOrientation']>;
    fitMode: 'HEAD' | 'TAIL';
    flamebearer: NonNullable<FlamegraphRendererProps['flamebearer']>;
    searchQuery: string;
    selectedItem: Maybe<string>;
    flamegraphConfigs: {
        focusedNode: Maybe<Node>;
        zoom: Maybe<Node>;
    };
    palette: typeof DefaultPalette;
}
declare class FlameGraphRenderer extends Component<FlamegraphRendererProps, FlamegraphRendererState> {
    resetFlamegraphState: {
        focusedNode: import("true-myth/maybe").Nothing<Node>;
        zoom: import("true-myth/maybe").Nothing<Node>;
    };
    initialFlamegraphState: {
        focusedNode: import("true-myth/maybe").Nothing<Node>;
        zoom: import("true-myth/maybe").Nothing<Node>;
    };
    static defaultProps: {
        showCredit: boolean;
    };
    constructor(props: FlamegraphRendererProps);
    componentDidUpdate(prevProps: FlamegraphRendererProps, prevState: FlamegraphRendererState): void;
    calcNewConfigs: (prevFlame: Flamebearer, currFlame: Flamebearer) => {
        focusedNode: Maybe<Node>;
        zoom: Maybe<Node>;
    };
    onSearchChange: (e: string) => void;
    isSameFlamebearer: (prevFlame: Flamebearer, currFlame: Flamebearer) => boolean;
    onReset: () => void;
    onFlamegraphZoom: (bar: Maybe<Node>) => void;
    onFocusOnNode: (i: number, j: number) => void;
    setActiveItem: (item: {
        name: string;
    }) => void;
    getHighlightQuery: () => string;
    updateView: (newView: ViewTypes) => void;
    updateFlamegraphDirtiness: () => void;
    updateFitMode: (newFitMode: FitModes) => void;
    isDirty: () => boolean;
    shouldShowToolbar(): boolean;
    render: () => JSX.Element;
}
export default FlameGraphRenderer;
