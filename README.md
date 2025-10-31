# BTC Address Generator  
**Bitcoin HD Wallet Generator (BIP44) com Interface Web**  
[https://btc-address-generator-v2.vercel.app](https://btc-address-generator-v2.vercel.app)

---

## Live Demo  
[https://btc-address-generator-v2.vercel.app](https://btc-address-generator-v2.vercel.app)

---

## O que este projeto faz?

Este é um **gerador de carteiras Bitcoin HD (Hierarchical Deterministic)** que:

- Gera uma **mnemonic (12 palavras)**  
- Deriva um **endereço Bitcoin (P2PKH)**  
- Mostra a **chave privada (WIF)**  
- Suporta **Mainnet** e **Testnet**  
- Tudo 100% **no navegador**, sem backend

---

## Conceitos de Bitcoin & Crypto Explicados

### 1. **Mnemonic (Frase de Recuperação) – BIP39**
- Uma sequência de **12 ou 24 palavras** que representa uma **seed (semente)**.
- Baseado no padrão **BIP39**.
- Exemplo:  
  ```
  abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
  ```
- **Por quê?** Facilita backup humano. Você perde o dispositivo? Só precisa das palavras.

> **Dica de segurança**: Nunca compartilhe sua mnemonic!

---

### 2. **Seed → Master Private Key – BIP32**
- A mnemonic é convertida em uma **seed de 512 bits** via PBKDF2.
- Essa seed gera uma **chave privada mestra** usando **BIP32**.
- A partir daí, você deriva **infinitas chaves filhas** de forma determinística.

> **HD = Hierarchical Deterministic** → mesma seed, mesma carteira.

---

### 3. **Derivação de Endereço – BIP44**
- Padrão: `m/44'/0'/0'/0/0`
  - `m/` → master
  - `44'` → propósito (BIP44)
  - `0'` → moeda (0 = Bitcoin)
  - `0'` → conta
  - `0` → change (0 = recebimento)
  - `0` → índice do endereço

> **Testnet**: `m/44'/1'/0'/0/0` (coin type = 1)

---

### 4. **Chave Privada → Chave Pública → Endereço**
1. **Private Key** (32 bytes)
2. **Public Key** (ECDSA com curva secp256k1)
3. **Hash160** (RIPEMD160(SHA256(pubkey)))
4. **Base58Check** → Endereço Bitcoin (começa com `1` ou `m/n` no Testnet)

---

### 5. **WIF (Wallet Import Format)**
- Formato codificado da chave privada para importação em carteiras.
- Inclui prefixo + checksum.
- Exemplo (Testnet):  
  ```
  cQ1n2n3... (55 caracteres)
  ```

---

## Tecnologias Usadas (Stack Completa)

| Camada | Tecnologia | Por quê? |
|-------|------------|--------|
| **Linguagem** | TypeScript | Tipagem forte, evita bugs em crypto |
| **Framework** | React + Vite | Rápido, moderno, ótimo DX |
| **Crypto** | `bitcoinjs-lib` | Biblioteca oficial para Bitcoin |
| **BIP32** | `bip32` + `tiny-secp256k1` | Derivação HD |
| **BIP39** | `bip39` | Geração de mnemonic |
| **WASM** | `vite-plugin-wasm` | Suporte a WebAssembly no Vite |
| **Deploy** | Vercel | Deploy com 1 clique, gratuito |

---

## Estrutura do Projeto

```
btc-address-generator/
├── index.html              ← Entry point
├── vite.config.ts          ← Config Vite + plugins
├── tsconfig.json           ← TypeScript
├── package.json
├── src/
│   ├── main.tsx            ← ReactDOM render
│   ├── App.tsx             ← UI principal
│   ├── generator.ts        ← Lógica de geração
│   └── index.css           ← Estilos
└── dist/                   ← Build final (gerado)
```

---

## Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/francisnardi/btc-address-generator.git
cd btc-address-generator

# 2. Instale dependências
npm install

# 3. Rode em desenvolvimento
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## Comandos Úteis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build para produção
npm run preview    # Testar build local
```

---

## Segurança (IMPORTANTE!)

> **Este app roda 100% no navegador**  
> **NUNCA envie mnemonic/chave privada para servidores**  
> **Use apenas em ambiente seguro**

**Este é um gerador OFFLINE** — ideal para air-gapped wallets.

---

## Próximos Passos (Curso Futuro)

| Dia | Projeto |
|-----|--------|
| 2 | **ETH Balance Checker** (Ethers.js + Alchemy) |
| 3 | **Sign & Verify Message** |
| 4 | **Send BTC (Testnet)** |
| 5 | **Multi-chain Wallet** |

---

## Licença

[MIT © francisnardi](LICENSE)

---

## Autor

**Francis Nardi**  
[github.com/francisnardi](https://github.com/francisnardi)  
[linkedin.com/in/francisnardi](https://linkedin.com/in/francisnardi)

> **Este projeto faz parte do curso "Crypto Frontend Master"**  
> **Aprenda Bitcoin do zero ao deploy!**

---

**COPIE E COLE ESSE README NO SEU PROJETO!**

```bash
code README.md
```

Cole todo o conteúdo acima → salve → commit → push

```bash
git add README.md
git commit -m "docs: add complete educational README"
git push
```