import { isValidSubsequence } from "./subsequence"

describe("isValidSubsequence", () => {
  it("test 1", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])).toEqual(true)
  })

  it("test 2", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])).toEqual(true)
  })

  it("test 3", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10])).toEqual(true)
  })

  it("test 4", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6])).toEqual(true)
  })

  it("test 5", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10])).toEqual(true)
  })

  it("test 6", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10])).toEqual(true)
  })

  it("test 7", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, -1, 8, 10])).toEqual(true)
  })

  it("test 8", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25])).toEqual(true)
  })

  it("test 9", () => {
    expect(isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1])).toEqual(true)
  })

  it("test 10", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12])).toEqual(false)
  })

  it("test 11", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [4, 5, 1, 22, 25, 6, -1, 8, 10])).toEqual(false)
  })

  it("test 12", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10])).toEqual(false)
  })

  it("test 13", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10])).toEqual(false)
  })

  it("test 14", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10])).toEqual(false)
  })

  it("test 15", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1])).toEqual(false)
  })

  it("test 16", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1, 10])).toEqual(false)
  })

  it("test 17", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -2])).toEqual(false)
  })

  it("test 18", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [26])).toEqual(false)
  })

  it("test 19", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10])).toEqual(false)
  })

  it("test 20", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 26, 22, 8])).toEqual(false)
  })

  it("test 21", () => {
    expect(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6])).toEqual(false)
  })

  it("test 22", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10, 11, 11, 11, 11])).toEqual(false)
  })

  it("test 23", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 10])).toEqual(false)
  })

  it("test 24", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 5])).toEqual(false)
  })
})
