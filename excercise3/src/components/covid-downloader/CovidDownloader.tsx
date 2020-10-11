import React, { useState } from 'react';
import { CovidList } from './CovidList';
import { fetchPatients } from '../../api/patients-api';

export function CovidDownloader() {
    const [patients, setPatients] = useState<string[]>([]);
    const handleFetchPatients = async () => {
        const patients = await fetchPatients();
        setPatients(patients);
    }
    return (
        <>
            <button onClick={handleFetchPatients} className='button'>Fetch data</button>
            <CovidList patients={patients} />
        </>
    );
}
