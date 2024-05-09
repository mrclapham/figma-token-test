import {ReactNode} from 'react';
import './ButtonX.scss';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    root: {
      width: '100%',
      maxWidth: 800,
        minHeight: 40,
      backgroundColor: '#ff00ff',
    },
});
  
console.log(styles.root);

export type ButtonXProps = {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onclick: () => void;
}

export const ButtonX = ({ children = undefined, onclick = ()=> {}, label = "StyleX" }: ButtonXProps) => {
    
    return <button   onClick={onclick}>
        <span>{`${label}`}</span>
        {children}</button>;
    };
