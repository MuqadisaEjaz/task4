const Cal = require("./calculator")

test("test case1", ()=>{
    expect(Cal.Sum(1,2)).toBe(3);
})

test("test case2", ()=>{
    expect(Cal.Subtract(1,2)).toBe(9);
})

test("test case 3a", ()=>{
    expect(Cal.Divide(8,0)).toBe("error");
})

test("test case 3b", ()=>{
    expect(Cal.Divide(8,1)).toBe("8");
})

test("test case4", ()=>{
    expect(Cal.Multiply(1,2)).toBe(2);
})

test("test case5", ()=>{
    expect(Cal.Ceil(1.2)).toBe(2);
})
test("test case6", ()=>{
    expect(Cal.Round(1.2)).toBe(1);
})
test("test case7", ()=>{
    expect(Cal.power(2,2)).toBe(4);
})
