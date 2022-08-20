import * as React from 'react';
import { ClientPosition } from './util';
export interface ResizerProps {
    split: 'horizontal' | 'vertical';
    className: string;
    index: number;
    style?: React.CSSProperties;
    onDragStarted: (index: number, pos: ClientPosition) => void;
}
export declare const Resizer: React.MemoExoticComponent<({ split, className, index, style, onDragStarted }: ResizerProps) => JSX.Element>;
