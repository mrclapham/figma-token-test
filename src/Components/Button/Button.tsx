import {ReactNode} from 'react';

export type ButtonProps = {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode | string | undefined;
    onclick: () => void;
}

export const Button = ({ children = undefined, onclick = ()=> {}, label = 'none',  size = 'medium' }: ButtonProps) => {
    
    return <button onClick={onclick}>
        <span>{`${label} ${String(size)}`}</span>
        {children}</button>;
    };
