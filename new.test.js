import { sum, isPrime } from "./index";
import { describe, test, expect } from "@jest/globals";

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("adds 3 + 2 to equal 5", () => {
    expect(sum(3, 2)).toBe(5);
  });
});

describe("isPrime", () => {
  test("1 is not prime", () => {
    expect(isPrime(1)).toBe(false);
  });

  test("2 is prime", () => {
    expect(isPrime(2)).toBe(true);
  });

  test("3 is prime", () => {
    expect(isPrime(3)).toBe(true);
  });

  test("4 is not prime", () => {
    expect(isPrime(4)).toBe(false);
  });
});
