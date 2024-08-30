declare const TestData: {
    empty: {
        names: never[];
        levels: never[];
        numTicks: number;
        sampleRate: number;
        units: "samples";
        spyName: "unknown";
        format: "single";
        version: number;
    };
    SimpleTree: {
        topLevel: number;
        rangeMin: number;
        format: "single";
        numTicks: number;
        maxSelf: number;
        sampleRate: number;
        names: string[];
        levels: number[][];
        rangeMax: number;
        units: "samples";
        fitMode: string;
        spyName: "gospy";
        version: number;
    };
    ComplexTree: {
        names: string[];
        levels: number[][];
        numTicks: number;
        maxSelf: number;
        spyName: "gospy";
        sampleRate: number;
        units: "samples";
        format: "single";
        version: number;
    };
    DiffTree: {
        names: string[];
        levels: number[][];
        numTicks: number;
        maxSelf: number;
        spyName: "gospy";
        sampleRate: number;
        units: "samples";
        format: "double";
        leftTicks: number;
        rightTicks: number;
        version: number;
    };
};
export default TestData;
