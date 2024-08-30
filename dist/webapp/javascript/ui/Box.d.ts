import React from 'react';
export interface BoxProps {
    children: React.ReactNode;
    noPadding?: boolean;
    className?: string;
}
export default function Box(props: BoxProps): JSX.Element;
export interface CollapseBoxProps {
    title: string;
    children: React.ReactNode;
}
export declare function CollapseBox({ title, children }: CollapseBoxProps): JSX.Element;
