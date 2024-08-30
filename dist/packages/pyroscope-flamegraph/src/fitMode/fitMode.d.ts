/// <reference types="react" />
export declare const TailMode = "TAIL";
export declare const HeadMode = "HEAD";
export declare type FitModes = typeof TailMode | typeof HeadMode;
interface fitToCanvasRectProps {
    mode: FitModes;
    charSize: number;
    rectWidth: number;
    fullText: string;
    shortText: string;
}
export declare function fitToCanvasRect({ mode, charSize, rectWidth, fullText, shortText, }: fitToCanvasRectProps): {
    mode: "TAIL";
    text: string;
    marginLeft: number;
} | {
    mode: "HEAD";
    text: string;
    marginLeft: number;
};
export declare function fitIntoTableCell(mode: FitModes): React.CSSProperties;
export {};
