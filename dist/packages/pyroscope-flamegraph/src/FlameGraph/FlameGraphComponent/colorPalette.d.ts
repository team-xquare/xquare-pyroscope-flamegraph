import Color from 'color';
export interface FlamegraphPalette {
    name: string;
    goodColor: Color;
    neutralColor: Color;
    badColor: Color;
    colors: Color[];
}
export declare const DefaultPalette: FlamegraphPalette;
export declare const ColorBlindPalette: FlamegraphPalette;
