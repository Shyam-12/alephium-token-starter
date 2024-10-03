# Ralph Programming Language Smart Contract Challenges

## Question 1: Basic Token Contract with Mint and Burn Functions

### Problem:

You need to create a simple token contract called `BasicTokenContract` like the one we built with 4 functions and make the following changes to that contract. This contract should allow:

- **mint** (create) new tokens - add tokens to the supply.
- **burn** (destroy) tokens they own - remove tokens from the supply.

### Follow these steps:

1. **Total Supply**: Track the total number of tokens in the contract.
2. **Mint Function**: Create a public function called `mint` that:
   - Takes one input: the amount of tokens to mint.
   - Adds the tokens to the total supply.
   - and returns the supply value.
3. **Burn Function**: Create a public function called `burn` that:
   - Takes one input: the amount of tokens to burn.
   - Subtracts the tokens from the total supply.
   - and returns the supply value.

### Hints:

- Use a variable `mut supply: U256` to track the total number of tokens.
- Return the total supply after minting or burning.

### Base Contract:

import "std/fungible_token_interface"

// Replace the name of the coin with any name You like 
Contract FungibleToken() implements IFungibleToken {
  // function to get total supply
  // Write a public fn named "getTotalSupply" which takes no arguments and returns a U256 value i.e. the total supply value.
  // Basically returning a number

  // function to get symbol of the token - This will represent the symbol of Your Token
  // Write a public fn named "getSymbol" which takes no arguments and returns a type of ByteVec string i.e. the symbol.
  // Example of returning -> return b`tmt`

  // function to get name of the token
  // Write a public fn named "getName" which takes no arguments and returns a type of ByteVec string i.e. the name.
  // Example of returning -> return b`TomatoCoin`

  // function to set decimal of the token
  // Write a public fn named "getDecimals" which takes no arguments and returns a type of U256 value i.e. the decimal.
  // Basically returning a number

  // Then add the two extra functions which you are told to add.
}


---------------------------------------------------------------------------------------------------------
