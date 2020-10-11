import React from 'react';

export interface CovidListProps {
    patients: string[];
}

export function CovidList(props: CovidListProps) {
    return (
        <ul>
            {props.patients.map((patient) => <li key={patient}>{patient}</li>)}
        </ul>
    );
}
