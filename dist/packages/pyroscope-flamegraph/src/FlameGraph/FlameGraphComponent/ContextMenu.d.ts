import React from 'react';
declare type xyToMenuItems = (x: number, y: number) => JSX.Element[];
export interface ContextMenuProps {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    xyToMenuItems: xyToMenuItems;
    onClose: () => void;
    onOpen: (x: number, y: number) => void;
}
export default function ContextMenu(props: ContextMenuProps): JSX.Element;
export {};
