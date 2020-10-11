export async function fetchPatients(): Promise<string[]> {
    const patients = await fetch('https://duckduckgo.com/?q=covid+patients&atb=v170-1&ia=web');
    const patientsJson = await patients.json();

    if (!Array.isArray(patientsJson) || Array.isArray(patientsJson) && patientsJson.some((element) => typeof element !== 'string')) {
        throw Error('Api responded with wrong data.');
    }
    return patientsJson;
}