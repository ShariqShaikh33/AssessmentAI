import React from 'react'
import { InputTypes} from './utils/InputTypes';
import { Hand } from 'lucide-react';
import HandleInputRender from './HandleInputRender';

function CustomInput(props) {
    const {id, label, showLabel=true, check} = props;
    return (
        <div className={check ? check : 'w-full'}>
            {showLabel && label && <label className='text-sm font-bold text-gray-700 flex' id={id}>
            {label}
            </label>}
            <HandleInputRender {...props}/>
        </div>
    )
}

export default CustomInput;
