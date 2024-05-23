import {ReactNode} from 'react';

export type ButtonTwProps = {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onclick: () => void;
}

export const ButtonTw = ({ children = undefined, onclick = ()=> {}, label="Button" }: ButtonTwProps) => {
    
    return <div className=' bg-primary-100'><button className="bg-bluey inset-10 p-3 rounded-full  text-pinky" onClick={onclick}>
        <span>{`${label}`}</span>
        {children}</button></div>;
    };
