## Question 2: Simple Voting System

### Problem:

You need to create a simple voting system contract called `SimpleVotingContract`. In this contract, people can vote either **for** or **against** a proposal.

### Follow these steps:

1. **Vote Tally**: Create two variables to track:
   - The total votes in favor.
   - The total votes against.
2. **Cast Vote**: Create a public function called `castVote` that:
   - Takes one input: a `Bool` (`true` for voting in favor, `false` for voting against).
   - Increases the correct vote count based on the input.
3. **Get Results**: Create a public function called `getVoteTally` that:
   - Returns the total votes in favor and against as a tuple.

### Hints:

- Use two variables, `mut votesInFavor: U256` and `mut votesAgainst: U256`, to track the votes.
- In the `castVote` function, check if the input is `true` or `false`. If it’s `true`, increase `votesInFavor`, otherwise increase `votesAgainst`.
- The `getVoteTally` function should return `(votesInFavor, votesAgainst)`.


----------------------------------------------------------------------------------------

