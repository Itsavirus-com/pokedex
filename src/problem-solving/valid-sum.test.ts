import { isValidSum } from "./valid-sum"

describe("isValidSum", () => {
  it("test “2,2,3,4” and 6", () => {
    expect(isValidSum("2,2,3,4", 6)).toEqual(true)
  })

  it("test “3,4,5,9” and 10", () => {
    expect(isValidSum("3,4,5,9", 10)).toEqual(false)
  })

  it("test “1,2,3,4,5,10” and 7", () => {
    expect(isValidSum("1,2,3,4,5,10", 7)).toEqual(true)
  })
})
