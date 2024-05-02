import { ReactNode } from 'react';

export type ButtonProps = {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onclick: () => void;
}

export const ButtonSc = ({ children = undefined, onclick = ()=> {}, variant = 'primary',  size = 'medium', label="Button" }: ButtonProps) => {
    
    return <button className={`button-sc button-sc-${variant} button-sc-${size}`} onClick={onclick}>
        <span>{`${label}`}</span>
        {children}</button>;
    };
