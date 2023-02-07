import lib from  '@waves/ts-lib-crypto'

// Create a private key from a seed  
const privateKey = lib.privateKey('seed phrase');

// Generate a random seed phrase
const seed = lib.randomSeed();
// Create a private key from a seed   
const privateKey = lib.privateKey(seed);