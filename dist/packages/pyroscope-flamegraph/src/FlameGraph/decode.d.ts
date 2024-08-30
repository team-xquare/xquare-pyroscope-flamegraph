import { Profile } from '@pyroscope/models/src';
export declare function deltaDiffWrapperReverse(format: Profile['metadata']['format'], levels: Profile['flamebearer']['levels']): number[][];
export declare function deltaDiffWrapper(format: Profile['metadata']['format'], levels: Profile['flamebearer']['levels']): number[][];
export declare function decodeFlamebearer(fb: Profile): {
    leftTicks?: number | undefined;
    rightTicks?: number | undefined;
    version: number;
    flamebearer: {
        names: string[];
        levels: number[][];
        numTicks: number;
        maxSelf: number;
    };
    metadata: {
        appName?: string | undefined;
        name?: string | undefined;
        startTime?: number | undefined;
        endTime?: number | undefined;
        query?: string | undefined;
        maxNodes?: number | undefined;
        format: "single" | "double";
        sampleRate: number;
        spyName: "dotnetspy" | "ebpfspy" | "gospy" | "phpspy" | "pyspy" | "rbspy" | "nodespy" | "javaspy" | "pyroscope-rs" | "scrape" | "tracing" | "unknown";
        units: "unknown" | "samples" | "objects" | "goroutines" | "bytes" | "lock_samples" | "lock_nanoseconds" | "trace_samples" | "exceptions";
    };
};
