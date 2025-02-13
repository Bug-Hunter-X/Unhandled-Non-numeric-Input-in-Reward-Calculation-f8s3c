function calculateReward(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) {
    throw new Error('Invalid amount. Amount must be a number.');
  }
  if (amount < 0) {
    throw new Error('Amount cannot be negative');
  }
  // ... rest of the reward calculation logic
}