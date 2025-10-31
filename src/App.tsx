import { useState } from 'react';
import { generateWallet } from './generator';
import './index.css';

function App() {
  const [wallet, setWallet] = useState<ReturnType<typeof generateWallet> | null>(null);
  const [network, setNetwork] = useState<'mainnet' | 'testnet'>('testnet');

  const generate = () => {
    setWallet(generateWallet(network));
  };

  return (
    <div className="container">
      <h1>Bitcoin HD Wallet Generator</h1>
      <p>BIP44 • bitcoinjs-lib • {network}</p>

      <div className="controls">
        <button onClick={() => setNetwork('mainnet')} disabled={network === 'mainnet'}>Mainnet</button>
        <button onClick={() => setNetwork('testnet')} disabled={network === 'testnet'}>Testnet</button>
        <button onClick={generate} className="generate">Generate New</button>
      </div>

      {wallet && (
        <div className="result">
          <div><strong>Mnemonic:</strong> <code>{wallet.mnemonic}</code></div>
          <div><strong>Address:</strong> <code>{wallet.address}</code></div>
          <div><strong>Private Key (WIF):</strong> <code>{wallet.privateKey}</code></div>
          <div><small>Path: {wallet.path}</small></div>
        </div>
      )}

      <footer>
        <a href="https://github.com/francisnardi/btc-address-generator" target="_blank">GitHub</a>
      </footer>
    </div>
  );
}

export default App;