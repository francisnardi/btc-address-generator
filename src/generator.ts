import * as bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';

export function generateWallet(networkType: 'mainnet' | 'testnet' = 'mainnet') {
  const network = networkType === 'testnet' 
    ? bitcoin.networks.testnet 
    : bitcoin.networks.bitcoin;

  const mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const root = bitcoin.bip32.fromSeed(seed, network);

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