const addNum = require("../assets/js/add");

describe("addNumb function", () => {
  test("Additionne 2 nombres", () => {
    expect(addNum(1, 2)).toBe(3);
    expect(addNum(2, -4)).toBe(-2);
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(addNum(1, 2)).toBe(3);
  });

  test("adds 0.1 + 0.2 to equal 0.3", () => {
    expect(addNum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

//////////////////////////////////////////

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

describe("countVowels function", () => {
  test("countVowels returns the correct number of vowels", () => {
    expect(countVowels("JavaScript")).toBe(3);
  });
});

////////////////////////////////////
function reverseArray(arr) {
  return arr.reverse();
}

describe("reverseArray function", () => {
  test("reverses an array of numbers", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("reverses an array of strings", () => {
    expect(reverseArray(["apple", "banana", "orange"])).toEqual([
      "orange",
      "banana",
      "apple",
    ]);
  });

  test("returns an empty array if given an empty array", () => {
    expect(reverseArray([])).toEqual([]);
  });
});
