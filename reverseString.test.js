const reverseString = require("./reverseString")

test("test case 10", ()=>{
    expect(reverseString("hello")).toBe("olleh")
})

test("test case 11", ()=>{
    expect(reverseString("hello")).toBe("llohe")
})

