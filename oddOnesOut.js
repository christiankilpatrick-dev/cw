// The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

// Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

// oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]

function oddOnesOut(nums) {
  const results = {};
  nums.forEach((num) => {
    if (results[num]) {
      results[num]++;
    } else {
      results[num] = 1;
    }
  });

  return nums.filter((el) => results[el] % 2 === 0);
}
