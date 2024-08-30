import React from 'react';
import FlameGraphRenderer from './FlameGraph/FlameGraphRenderer';
import './sass/flamegraph.scss';
export declare type FlamegraphRendererProps = Pick<FlameGraphRenderer['props'], Exclude<keyof FlameGraphRenderer['props'], 'showPyroscopeLogo'>>;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'pyro-flamegraph': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export declare const FlamegraphRenderer: (props: FlamegraphRendererProps & {
    colorMode?: 'light' | 'dark';
}) => JSX.Element;
