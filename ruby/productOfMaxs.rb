# Given an array/list [] of integers , Find the product of the k maximal numbers.

# Array/list size is at least 3 .

# Array/list's numbers Will be mixture of positives , negatives and zeros

# Repetition of numbers in the array/list could occur.


def max_product(numbers, size)
  numbers.max(size).reduce(:*)
end

