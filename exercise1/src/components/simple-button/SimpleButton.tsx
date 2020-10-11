import React from 'react';

export interface SimpleButtonProps {
    name: string;
}

export function SimpleButton(props: SimpleButtonProps) {
    return (
        <>
            <button className='button' >{props.name}</button>
        </>
    );
}
