🔹 Phase 1: Basics of Arrays

Goal: Understand arrays, basic operations, and memory access.

Topics / Skills:

Array declaration & initialization ([], Array(n))

Accessing & updating elements

Traversing arrays (for, for-of, forEach, while)

Push, pop, shift, unshift, splice, slice

Length property

Multidimensional arrays (matrix basics)

Memory layout (continuous memory, index access O(1))

Practice Problems:

Print all elements of an array.

Reverse an array (in-place and extra array).

Find maximum and minimum.

Compute sum and average.

Count occurrences of a number.

Remove duplicates.

Rotate array by k positions.

Move all zeros to end.

Merge two arrays without duplicates.

Check if array is palindrome.

Time Complexity:

Access: O(1)

Search (linear): O(n)

Insert/delete at end: O(1) amortized

Insert/delete at start: O(n)

🔹 Phase 2: Searching

Goal: Learn searching techniques for arrays.

Algorithms / Patterns:

Linear Search → O(n)

Binary Search → O(log n) (sorted array)

Binary Search Variants:

First occurrence / Last occurrence

Closest element

Search in 2D matrix:

Row-wise & column-wise sorted

Staircase search (O(n+m))

Search in rotated sorted array

Search in nearly sorted / k-sorted array

Practice Problems:

Find index of target value (linear search)

Count occurrences of value

Floor / ceiling in sorted array

Search element in 2D row & column sorted matrix

Search in rotated sorted array

Search in nearly sorted array

🔹 Phase 3: Sorting

Goal: Learn sorting algorithms and their performance.

Algorithms:

Basic Sorting: Bubble, Selection, Insertion (O(n²))

Intermediate: Merge Sort, Quick Sort, Heap Sort (O(n log n))

Special Sorting: Counting Sort, Radix Sort, Bucket Sort

JS built-in: arr.sort((a,b)=>a-b)

Practice Problems:

Sort an array

Sort 0s, 1s, 2s (Dutch National Flag)

Sort nearly sorted array

Find k largest / smallest elements

Sort strings / objects

Time & Space Analysis:

Bubble / Selection / Insertion: O(n²) / O(1) space

Merge: O(n log n) / O(n) space

Quick: O(n log n) / O(log n) recursion stack

🔹 Phase 4: Two Pointers / Sliding Window / Subarray

Goal: Efficient techniques for subarray problems.

Patterns & Algorithms:

Two pointers:

Sum pairs / triplets

Remove duplicates

Reverse array

Sliding Window:

Max sum subarray (fixed size)

Max / min length subarray with conditions

Subarray sum = k

Kadane’s Algorithm: Max sum subarray O(n)

Prefix sum arrays

Practice Problems:

Two sum / Three sum

Max consecutive 1s

Longest substring without repeating characters

Subarray sum divisible by k

Min size subarray sum ≥ target

Max product subarray

Analysis:

Two-pointer problems: O(n)

Sliding window: O(n)

🔹 Phase 5: Hashing with Arrays

Goal: Combine arrays with hashmaps for fast lookups.

Patterns & Algorithms:

Frequency map / Counting occurrences

Detect duplicates

Subarray sum = k (prefix sum + hashmap)

Pair with sum = k

Two sum using hashmap

Practice Problems:

Two sum

Subarray sum equals k

Count distinct elements in window

Longest consecutive sequence

Find duplicates / majority element

Time & Space Analysis:

Lookup: O(1) amortized

Hashmap usage: O(n) extra space

🔹 Phase 6: Advanced Array Problems

Goal: Prepare for interview-style, matrix, and combined problems.

Common Patterns:

Matrix / 2D Arrays:

Traverse all elements

Rotate 90°

Spiral order

Transpose

Diagonal traversal

Max sum rectangle

Prefix & Suffix arrays: Left/right max/min

Array manipulations:

Product of array except self

Binary search on answer (capacity problems, aggressive cows)

Trapping Rainwater

Next / previous permutation

Merge intervals / merge sorted arrays

Kadane variations / DP on array

Practice Problems:

Rotate matrix

Spiral matrix

Max sum subarray / submatrix

Trapping rainwater

Next permutation

Merge intervals

Product of array except self

🔹 Phase 7: Problem-Solving + Interview Prep

Problem Categories:

Easy: Reverse, sum, search, sort

Medium: Two pointers, sliding window, subarray sums

Hard: Matrix manipulations, DP on arrays, binary search on answer, greedy problems

Practice Platforms:
LeetCode, HackerRank, GeeksforGeeks, Codeforces, AtCoder

🔹 Phase 8: Performance Analysis

Goal: Evaluate time & space complexity.

Steps:

Count loops → O(n), nested → O(n²)

Consider recursion → stack space

Optimize with prefix sums / sliding window

Compare brute force vs optimized

Space trade-offs → O(n) extra arrays vs in-place

🔹 Phase 9: Matrix / 2D Arrays

Operations & Patterns:

Traverse all elements

Row-wise / column-wise traversal

Diagonal traversal

Spiral order

Rotate / flip

Search sorted 2D arrays

Submatrix sum

Practice Problems:

Spiral matrix

Rotate matrix

Max sum rectangle

Search element in sorted 2D
