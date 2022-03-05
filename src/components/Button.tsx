import React, { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
};

export function Button({ isOutlined = false, children, ...props }: ButtonProps) {
    return (
        <button
            title={children?.toString()}
            type="button"
            className={`button ${isOutlined ? 'outlined' : ''}`} 
            {...props}
        >
            {children}    
        </button>
    )
}
