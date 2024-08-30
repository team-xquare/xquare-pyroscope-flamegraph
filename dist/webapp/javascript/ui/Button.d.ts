import React, { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
export interface ButtonProps {
    kind?: 'default' | 'primary' | 'secondary' | 'danger' | 'outline' | 'float';
    disabled?: boolean;
    icon?: IconDefinition;
    iconNode?: ReactNode;
    children?: React.ReactNode;
    grouped?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit';
    ['data-testid']?: string;
    ['aria-label']?: string;
    className?: string;
    id?: string;
    form?: React.ButtonHTMLAttributes<HTMLButtonElement>['form'];
    noBox?: boolean;
    autoFocus?: React.ButtonHTMLAttributes<HTMLButtonElement>['autoFocus'];
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
