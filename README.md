# BTC Address Generator  
**Gerador de Carteiras Bitcoin HD (BIP44) com Interface Web**  
[https://btc-address-generator.vercel.app](https://btc-address-generator.vercel.app)  

---

## Demo Ao Vivo  
[https://btc-address-generator.vercel.app](https://btc-address-generator.vercel.app)  

---

## O Que Este Projeto Faz?

Este é um **gerador de carteiras Bitcoin HD (Hierarchical Deterministic)** que:  

- Gera uma **mnemonic (12 palavras)**.  
- Deriva um **endereço Bitcoin (P2PKH)**.  
- Mostra a **chave privada (WIF)**.  
- Suporta **Mainnet** e **Testnet**.  
- Tudo 100% **no navegador**, sem backend ou servidor.  

**Aviso: Este é um projeto educacional. Use apenas para aprendizado. Para carteiras reais, use ferramentas oficiais como Electrum ou Hardware Wallets.**  

---

## Conceitos de Bitcoin & Crypto Explicados (Passo a Passo)

Este projeto é um **baby step** para quem está começando em crypto. Vamos explicar os conceitos como se fosse o início de um curso, de forma simples e didática.  

### 1. **Mnemonic (Frase de Recuperação) – BIP39**  
- Uma sequência de **12 ou 24 palavras** aleatórias do dicionário (em inglês).  
- Padrão: **BIP39** (Bitcoin Improvement Proposal 39).  
- **Como funciona?** As palavras representam uma **seed (semente)** de 128-256 bits. Elas são geradas com entropia (aleatoriedade) para segurança.  
- **Exemplo:**  
  ```
  abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
  ```  
- **Por quê importante?** É o **backup humano** da sua carteira. Se você perder o celular ou computador, basta digitar essas palavras em uma nova carteira para recuperar tudo.  
- **Dica de segurança:** Guarde em papel, cofre ou metal. Nunca digitalize ou compartilhe!  

> **Lição do curso:** Em crypto, "Not your keys, not your coins". A mnemonic é a raiz de tudo.  

---

### 2. **Seed → Chave Privada Mestra – BIP32**  
- A mnemonic é convertida em uma **seed** (512 bits) usando uma função hash (PBKDF2).  
- A seed gera a **chave privada mestra** com o padrão **BIP32** (Hierarchical Deterministic Wallets).  
- **Hierárquico:** Da chave mestra, você deriva **milhões de chaves filhas** sem perder o determinismo (mesma seed = mesmas chaves).  
- **Por quê?** Permite criar múltiplas contas/endereços de uma só seed, sem backup separado.  

> **Liçãotool do curso:** BIP32 resolve o problema de "backup infinito". Antes, cada chave precisava de backup separado.  

---

### 3. **Derivação de Endereço – BIP44**  
- Padrão: `m/44'/0'/0'/0/0`  
  - `m/` = master (mestra)  
  - `44'` = propósito (BIP44)  
  - `0'` = moeda (0 = Bitcoin)  
  - `0'` = conta (pode mudar para múltiplas contas)  
  - `0` = change (0 = endereços de recebimento)  
  - `0` = índice (incrementa para novos endereços)  
- **Testnet:** `m/44'/1'/0'/0/0` (coin type = 1).  
- **Como?** Usando funções matemáticas (CKD - Child Key Derivation).  

> **Lição do curso:** BIP44 padroniza para todas as carteiras. Assim, sua mnemonic funciona em MetaMask, Ledger, etc.  

---

### 4. **Chave Privada → Chave Pública → Endereço**  
1. **Chave Privada:** Número aleatório de 256 bits (32 bytes).  
2. **Chave Pública:** Gerada da privada usando **ECDSA** (curva secp256k1).  
3. **Hash do Pública:** SHA256 + RIPEMD160 = Hash160.  
4. **Endereço:** Hash160 + prefixo + checksum, codificado em **Base58Check**.  
   - Mainnet: Começa com **1**.  
   - Testnet: Começa com **m** ou **n**.  

> **Lição do curso:** Endereços são "hashs de hash" para segurança. Chave privada = controle total dos fundos.  

---

### 5. **WIF (Wallet Import Format)**  
- Formato codificado da chave privada (Base58Check + prefixo).  
- Exemplo Testnet: `cQ1n2n3...` (55 caracteres).  
- **Por quê?** Facilita importação em carteiras sem erros de digitação.  

> **Lição do curso:** WIF inclui checksum para detectar erros. Sempre teste em Testnet antes!  

---

### 6. **Mainnet vs Testnet**  
- **Mainnet:** Rede real, com BTC de valor.  
- **Testnet:** Rede de teste, com BTC gratuito (faucets).  
- **Por quê?** Para testar sem risco.  

> **Lição do curso:** Sempre desenvolva em Testnet. BTC real = dinheiro real.  

---

## Tecnologias Usadas (Stack Didático)

| Camada | Tecnologia | Por quê? | Lição do Curso |
|--------|------------|----------|---------------|
| **Linguagem** | TypeScript | Tipagem para evitar bugs em crypto | Aprenda TS para Web3: segurança > velocidade. |
| **Framework** | React + Vite | UI reativa + bundler rápido | Vite é 10x mais rápido que Create React App. |
| **Crypto** | `bitcoinjs-lib` | Biblioteca padrão para Bitcoin | Essencial para qualquer dApp BTC. |
| **BIP32** | `bip32` + `tiny-secp256k1` | Derivação HD + curva ECDSA | `tiny-secp256k1` usa WASM para performance. |
| **BIP39** | `bip39` | Geração de mnemonic | Simples, mas poderoso para seeds. |
| **WASM** | `vite-plugin-wasm` + `vite-plugin-top-level-await` | Suporte a WebAssembly no Vite | Necessário para libs como `tiny-secp256k1`. |
| **Deploy** | Vercel | 1 clique, gratuito | Ideal para protótipos Web3. |

---

## Estrutura do Projeto (Explicada)

```
btc-address-generator/
├── index.html              ← Entry point (HTML base com <div id="root"></div>)
├── vite.config.ts          ← Config Vite (plugins para React + WASM)
├── tsconfig.json           ← Config TS (tipagem, JSX)
├── package.json            ← Dependências + scripts (dev/build)
├── src/
│   ├── main.tsx            ← Renderiza App no DOM
│   ├── App.tsx             ← UI: botões, state, display wallet
│   ├── generator.ts        ← Lógica crypto: mnemonic, derivação, endereço
│   └── index.css           ← Estilos simples (CSS puro)
└── dist/                   ← Build final (gerado para production)
```

> **Lição do curso:** Estrutura padrão para apps React + Vite. `src/` para código, raiz para configs.

---

## Como Rodar Localmente (Passo a Passo para Iniciantes)

1. **Clone o repositório:**  
   ```
   git clone https://github.com/francisnardi/btc-address-generator.git
   cd btc-address-generator
   ```

2. **Instale dependências:**  
   ```
   npm install
   ```

3. **Rode em desenvolvimento:**  
   ```
   npm run dev
   ```
   Acesse: [http://localhost:5173](http://localhost:5173)

4. **Build para produção:**  
   ```
   npm run build
   ```

5. **Testar build local:**  
   ```
   npm run preview
   ```

---

## Segurança (Lições Essenciais para Crypto)

- **Rodado no navegador:** Sem servidores, mas use HTTPS em production.  
- **NUNCA compartilhe mnemonic ou chave privada.**  
- **Para produção real:** Use bibliotecas auditadas e hardware wallets.  
- **Teste em Testnet:** Evite perda de fundos reais.  

> **Lição do curso:** Crypto = responsabilidade. Um erro = perda irreversível. Sempre verifique twice.  

---

## Próximos Passos (Curso "Crypto Frontend Master")

Este é o **Dia 1** de uma série para aprender crypto do zero.  

| Dia | Projeto | Conceitos | Tech |
|-----|---------|-----------|------|
| 1 | BTC Address Generator | BIP39, BIP32, BIP44, WIF | BitcoinJS, React, Vite |
| 2 | ETH Balance Checker | EVM, RPC, Providers | Ethers.js, Alchemy |
| 3 | Sign & Verify Message | ECDSA, Hashing | BitcoinJS + Ethers |
| 4 | Send BTC (Testnet) | Transações, UTXO | BitcoinJS + Blockstream API |
| 5 | Multi-Chain Wallet | Cross-Chain | WalletConnect, RainbowKit |

> **Lição do curso:** Comece com BTC (Proof-of-Work), depois ETH (Proof-of-Stake). Entenda os básicos antes de DeFi/NFTs.  

---

## Licença  

MIT © Francis Nardi  

---

## Autor  

**Francis Nardi**  
- GitHub: [github.com/francisnardi](https://github.com/francisnardi)  
- LinkedIn: [linkedin.com/in/francisnardi](https://linkedin.com/in/francisnardi)  

> **Este projeto faz parte do curso "Crypto Frontend Master" – Aprenda crypto passo a passo, do zero ao dApp.**  
> **Contato:** Mande DM no GitHub para feedback ou ideias!  

---  

**Cole este README no seu projeto!**  

```bash
code README.md
```

Cole o conteúdo → salve →  

```bash
git add README.md
git commit -m "docs: add complete educational README in Portuguese"
git push
```