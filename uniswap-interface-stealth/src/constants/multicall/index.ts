import { ChainId } from 'stealthswap'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.MODESEPOLIA]: '0xd5718D11494553053968594875d0Aa6eB4E570D5',
  [ChainId.MODEMAIN]: '0xcA11bde05977b3631167028862bE2a173976CA11',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
