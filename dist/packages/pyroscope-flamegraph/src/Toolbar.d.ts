import React, { ReactNode } from 'react';
import { Maybe } from 'true-myth';
import { FitModes } from './fitMode/fitMode';
import { ViewTypes } from './FlameGraph/FlameGraphComponent/viewTypes';
import { FlamegraphRendererProps } from './FlameGraph/FlameGraphRenderer';
export interface ProfileHeaderProps {
    view: ViewTypes;
    enableChangingDisplay?: boolean;
    flamegraphType: 'single' | 'double';
    handleSearchChange: (s: string) => void;
    highlightQuery: string;
    ExportData?: ReactNode;
    isFlamegraphDirty: boolean;
    reset: () => void;
    updateFitMode: (f: FitModes) => void;
    fitMode: FitModes;
    updateView: (s: ViewTypes) => void;
    selectedNode: Maybe<{
        i: number;
        j: number;
    }>;
    onFocusOnSubtree: (i: number, j: number) => void;
    sharedQuery?: FlamegraphRendererProps['sharedQuery'];
}
declare const Toolbar: React.MemoExoticComponent<({ view, handleSearchChange, highlightQuery, isFlamegraphDirty, reset, updateFitMode, fitMode, updateView, selectedNode, onFocusOnSubtree, flamegraphType, enableChangingDisplay, sharedQuery, ExportData, }: ProfileHeaderProps) => JSX.Element>;
export default Toolbar;
