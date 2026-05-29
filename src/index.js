export const ARC_CHAIN = {
  "id": 5042002,
  "name": "Arc Testnet",
  "rpc": "https://rpc.testnet.arc.network",
  "explorer": "https://testnet.arcscan.app",
  "nativeCurrency": {
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 6
  }
};

export function formatUsdc(units){const value=BigInt(units);const whole=value/1000000n;const frac=String(value%1000000n).padStart(6,'0').replace(/0+$/,'');return frac?`${whole}.${frac} USDC`:`${whole} USDC`;}
export function txUrl(hash){if(!/^0x[0-9a-fA-F]{64}$/.test(hash))throw new Error('invalid tx hash');return `${ARC_CHAIN.explorer}/tx/${hash}`;}
export function createPayLink({to,amount,memo=''}){if(!/^0x[0-9a-fA-F]{40}$/.test(to))throw new Error('invalid recipient');const units=BigInt(amount);if(units<=0n)throw new Error('amount must be positive');const qs=new URLSearchParams({chainId:String(ARC_CHAIN.id),to,amount:units.toString(),memo});return `arc-usdc://pay?${qs.toString()}`;}
export function parsePayLink(link){const u=new URL(link);if(u.protocol!=='arc-usdc:')throw new Error('invalid protocol');return Object.fromEntries(u.searchParams.entries());}
