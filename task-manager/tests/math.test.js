const { calculateTip } = require("../src/math");
const { fehToCel } = require("../src/math");
const { celTofeh } = require("../src/math");
const { add } = require("../src/math");

test("Shoud calculate total with tip", () => {
  const total = calculateTip(10, 0.3);

  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert 32F to 0C", () => {
  const temp = fehToCel(32);
  expect(temp).toBe(0);
});

test("Should convert 0c to 32F", () => {
  const temp = celTofeh(0);
  expect(temp).toBe(32);
});

/*
test("async test demo", (done) => {
  setTimeout(() => {
    expect(1).toBe(2);
    done();
  }, 2000);
});
*/

test("should add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two numbers async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
