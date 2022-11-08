
const present = require("./present")

test("test case 12", ()=>{
    expect(present(3)).toBe(true);
})
test("test case 13", ()=>{
    expect(present(29)).toBe(true);
})