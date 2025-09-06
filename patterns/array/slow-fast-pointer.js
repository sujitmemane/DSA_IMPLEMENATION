const remove_dublicates = (nums) => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const remove_dublicate_2 = (nums) => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    let count = 1;
    if (nums[i] === nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
};

console.log(remove_dublicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// Expected - [0,1,2,3,4,_,_,_,_,_] return 5
