import { Units } from '@pyroscope/models/src/units';
export declare function numberWithCommas(x: number): string;
export declare function formatPercent(ratio: number): string;
export declare function ratioToPercent(ratio: number): number;
export declare function diffPercent(leftPercent: number, rightPercent: number): number;
export declare function getFormatter(max: number, sampleRate: number, unit: Units): DurationFormatter | ObjectsFormatter | BytesFormatter | NanosecondsFormatter;
export declare class DurationFormatter {
    divider: number;
    enableSubsecondPrecision: boolean;
    suffix: string;
    durations: [
        number,
        string
    ][];
    units: string;
    constructor(maxDur: number, units?: string, enableSubsecondPrecision?: boolean);
    format(samples: number, sampleRate: number, withUnits?: boolean): string;
    formatPrecise(samples: number, sampleRate: number): string;
}
export declare class NanosecondsFormatter {
    divider: number;
    multiplier: number;
    suffix: string;
    durations: [
        number,
        string
    ][];
    constructor(maxDur: number);
    format(samples: number): string;
    formatPrecise(samples: number): string;
}
export declare class ObjectsFormatter {
    divider: number;
    suffix: string;
    objects: [
        number,
        string
    ][];
    constructor(maxObjects: number);
    format(samples: number): string;
    formatPrecise(samples: number): string;
}
export declare class BytesFormatter {
    divider: number;
    suffix: string;
    bytes: [
        number,
        string
    ][];
    constructor(maxBytes: number);
    format(samples: number): string;
    formatPrecise(samples: number): string;
}
