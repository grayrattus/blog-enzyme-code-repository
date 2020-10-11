import React from 'react';

export interface SimpleButtonProps {
    countryName: string;
}

export function ComplexButton(props: SimpleButtonProps) {
    return (
        <>
            <p>Another COVID lockdown is happening in: {props.countryName}</p>
            <button className='button'>{props.name}</button>
        </>
    );
}
