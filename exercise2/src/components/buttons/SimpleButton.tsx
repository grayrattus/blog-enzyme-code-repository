import React from 'react';

export interface SimpleButtonProps {
    countryName: string;
}

export function SimpleButton(props: SimpleButtonProps) {
    return (
        <>
            <button className='button'>{props.countryName}! Welcome, first time huh?</button>
        </>
    );
}
