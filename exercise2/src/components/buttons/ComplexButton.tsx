import React from 'react';
import { SimpleButton } from './SimpleButton';

export interface SimpleButtonProps {
    countryName: string;
}

export function ComplexButton(props: SimpleButtonProps) {
    return (
        <>
            <p>Another COVID lockdown is happening in: {props.countryName}</p>
            <SimpleButton countryName={props.countryName} />
        </>
    );
}
