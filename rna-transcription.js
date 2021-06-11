
const dnaToRna = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
}

export const toRna = (dnaString) => {
    dnaString = dnaString.replace(/[GCTA]/g, dna => dnaToRna[dna]);
    return dnaString;
}

toRna('ACGTGGTCTTAA');