import * as bitcoin from 'bitcoinjs-lib';
import { BIP32Factory } from 'bip32';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import * as ecc from 'tiny-secp256k1';

// Inicializa o BIP32 com tiny-secp256k1
const bip32 = BIP32Factory(ecc);

export function generateWallet(networkType: 'mainnet' | 'testnet' = 'mainnet') {
  const network = networkType === 'testnet' 
    ? bitcoin.networks.testnet 
    : bitcoin.networks.bitcoin;

  const mnemonic = generateMnemonic(); // <-- bip39 direto
  const seed = mnemonicToSeedSync(mnemonic);
  const root = bip32.fromSeed(seed, network);

  const path = networkType === 'testnet' ? "m/44'/1'/0'/0/0" : "m/44'/0'/0'/0/0";
  const child = root.derivePath(path);

  const { address } = bitcoin.payments.p2pkh({
    pubkey: child.publicKey,
    network,
  });

  const privateKey = child.toWIF();

  return {
    mnemonic,
    address: address!,
    privateKey,
    path,
    network: networkType
  };
}