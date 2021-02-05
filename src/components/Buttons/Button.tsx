import * as React from 'react';
import { IButton } from './button.interface';

const Button:React.FC<IButton>=({children,variant="primary",...rest})=>{
    console.log({...rest});
    
    return (
        <button >
        {children}
        </button>
    )
}

export default Button;
