/// <reference types="react" />
import { ProfileHeaderProps } from './Toolbar';
interface SharedQueryProps {
    onHighlightChange: ProfileHeaderProps['handleSearchChange'];
    highlightQuery: ProfileHeaderProps['highlightQuery'];
    sharedQuery: ProfileHeaderProps['sharedQuery'];
    width: number;
}
declare const SharedQueryInput: ({ onHighlightChange, highlightQuery, sharedQuery, width, }: SharedQueryProps) => JSX.Element;
export default SharedQueryInput;
