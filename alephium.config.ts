import { Configuration } from '@alephium/cli'
import { Number256 } from '@alephium/web3'
import dotenv from 'dotenv'

dotenv.config()
// Settings are usually for configuring
export type Settings = {
  issueTokenAmount: Number256
  openaiAPIKey?: string
  ipfs?: {
    infura?: {
      projectId: string,
      projectSecret: string
    }
  }
}

const defaultSettings: Settings = {
  issueTokenAmount: 1000n,
  openaiAPIKey: process.env.OPENAI_API_KEY || '',
  ipfs: {
    infura: {
      projectId: process.env.IPFS_INFURA_PROJECT_ID || '',
      projectSecret: process.env.IPFS_INFURA_PROJECT_SECRET || ''
    }
  }
}

const configuration: Configuration<Settings> = {
  networks: {
    devnet: {
      nodeUrl: 'http://127.0.0.1:22973',
      // here we could configure which address groups to deploy the contract
      privateKeys: [`${process.env.TESTNET_PRIVATE_KEY}`],
      settings: defaultSettings
    },

    testnet: {
      nodeUrl: process.env.TESTNET_NODE_URL as string,
      privateKeys: [`${process.env.TESTNET_PRIVATE_KEY}`],
      settings: defaultSettings
    },

    mainnet: {
      nodeUrl: process.env.NODE_URL as string,
      privateKeys: process.env.PRIVATE_KEYS === undefined ? [] : process.env.PRIVATE_KEYS.split(','),
      settings: defaultSettings
    }
  }
}

export default configuration
