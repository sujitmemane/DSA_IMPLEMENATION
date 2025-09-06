// Two Pointers
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// [2,7,11,15] target = 9

const brute_force_two_sum = (arr, target) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
};

const two_sum_target = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum > target) right--;
    else left++;
  }
};

const two_sum_hashmap = (arr, target) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];
    console.log(compliment);
    if (map.has(compliment)) return [map.get(compliment), i];
    map.set(arr[i], i);
  }
};

const two_sum_hashmap_one_indexed = (numbers, target) => {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const compliment = target - numbers[i];
    if (map.has(compliment)) return [map.get(compliment), i + 1];
    map.set(numbers[i], i + 1);
  }
};

console.log(two_sum_hashmap_one_indexed([2, 7, 11, 15], 9));
