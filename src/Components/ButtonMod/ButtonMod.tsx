import { ReactNode } from 'react';
import { tokens } from '../../../build/ts/tokens';
import classes from './ButtonMod.module.scss';


export type ButtonModProps = {
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onClick: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

const { core: {size: tokenSize} } = tokens;
console.log(tokenSize);



export const ButtonMod = ({ children = undefined, 
    onClick = () => {}, 
    variant = 'primary', 
    size = 'md', 
    label = "Button" }: ButtonModProps) => {

    return <button className={`${classes[size]} ${classes[variant]}`} onClick={onClick}>
        <span>{`${label}`}</span>
        {children}
    </button>;
};
