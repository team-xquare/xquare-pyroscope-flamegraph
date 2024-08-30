import React, { RefObject } from 'react';
import Color from 'color';
import { Maybe } from 'true-myth';
import { Flamebearer } from '@pyroscope/models/src';
import { FitModes } from './fitMode/fitMode';
import { FlamegraphPalette } from './FlameGraph/FlameGraphComponent/colorPalette';
export declare function backgroundImageDiffStyle(palette: FlamegraphPalette, a: number, b: number, total: number, color: Color, side?: 'L' | 'R'): React.CSSProperties;
export interface ProfilerTableProps {
    flamebearer: Flamebearer;
    fitMode: FitModes;
    handleTableItemClick: (tableItem: {
        name: string;
    }) => void;
    highlightQuery: string;
    palette: FlamegraphPalette;
    selectedItem: Maybe<string>;
    tableBodyRef: RefObject<HTMLTableSectionElement>;
}
declare const ProfilerTable: React.NamedExoticComponent<Pick<ProfilerTableProps, Exclude<keyof ProfilerTableProps, "tableBodyRef">>>;
export default ProfilerTable;
