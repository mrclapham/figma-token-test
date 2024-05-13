import {ReactNode} from 'react';

export type ButtonTwProps = {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onclick: () => void;
}

export const ButtonTw = ({ children = undefined, onclick = ()=> {}, variant = 'primary',  size = 'medium', label="Button" }: ButtonTwProps) => {
    
    return <button className="bg-gryn inset-10 hover:bg-bloo p-3 rounded-full text-brown-300" onClick={onclick}>
        <span>{`${label}`}</span>
        {children}</button>;
    };
