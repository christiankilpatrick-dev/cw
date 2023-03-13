// This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

// Task
// The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

function realNumbers(m, n = BigInt(m)) {
  return Number(
    n - n / 2n - n / 3n - n / 5n + n / 6n + n / 10n + n / 15n - n / 30n
  );
}
