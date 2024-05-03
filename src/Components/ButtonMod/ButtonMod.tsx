import { ReactNode } from 'react';
import styled from 'styled-components';
import { tokens } from '../../../build/ts/tokens';

export type ButtonProps = {
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary';
    children?: ReactNode | string | undefined;
    onClick: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

const { core: {size: tokenSize} } = tokens;

export const ButtonStyle = styled.button<ButtonProps>`
  padding: ${({size})=> {
    const pad: number =  size ? parseInt(tokenSize[size].value) : parseInt(tokenSize.md.value);
    return `${pad}px ${pad*2}px`;
  }};
  font-size: ${({size})=> size ? `${tokenSize[size].value}px` : `${tokenSize.md.value}px`};
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: ${({variant})=> variant ? tokens.core.color[variant].value : 'red'
  };
  color: white;
  &:hover {
    background-color: ${({variant})=> variant === 'primary' ? tokens.core.color.secondary.value : tokens.core.color.primary.value};
  }
`;



export const ButtonSc = ({ children = undefined, 
    onClick = () => {}, 
    variant = 'primary', 
    size = 'md', 
    label = "Button" }: ButtonProps) => {

    return <ButtonStyle onClick={onClick} variant={variant} size={size}>
        <span>{`${label}`}</span>
        {children}
    </ButtonStyle>;
};
