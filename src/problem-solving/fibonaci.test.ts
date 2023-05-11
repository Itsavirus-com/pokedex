import { fibonaci } from "./fibonaci"

describe("fibonaci", () => {
  it("test n = 0", () => {
    expect(fibonaci(0)).toEqual([])
  })

  it("test n = 2", () => {
    expect(fibonaci(2)).toEqual([0, 1])
  })

  it("test n = 3", () => {
    expect(fibonaci(3)).toEqual([0, 1, 1])
  })

  it("test n = 5", () => {
    expect(fibonaci(5)).toEqual([0, 1, 1, 2, 3])
  })

  it("test n = 8", () => {
    expect(fibonaci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
  })

  it("test n = 10", () => {
    expect(fibonaci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})
