import {ReactNode} from 'react';
import './Button.scss';

export type ButtonProps = {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onclick: () => void;
}

export const Button = ({ children = undefined, onclick = ()=> {}, variant = 'primary',  size = 'medium', label="Button" }: ButtonProps) => {
    
    return <button className={`button-sass button-sass-${variant} button-sass-${size}`} onClick={onclick}>
        <span>{`${label}`}</span>
        {children}</button>;
    };
