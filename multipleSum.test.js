const multiSum = require("./multipleSum")

test("test case 8", ()=>{
    expect(multiSum(3,5,10)).toBe(29);
})

test("test case 9", ()=>{
    expect(multiSum(3,5,10)).toBe(23);
})