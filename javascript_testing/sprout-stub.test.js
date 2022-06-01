const SproutsMarketplace = require("./sprout-stub.js");

// test("user successfully logs in to Sprouts Marketplace", () => {
//   let sprout = new SproutsMarketplace();
//   sprout.authorizeLogIn();
//   expect(sprout.authorizeLogIn()).toEqual("Welcome back! Here's some plants you might like.");
// });

test("user encountered an error while logging in", () => {  
  let sprout = new SproutsMarketplace();
  let originalLogIn = sprout.logIn;

  sprout.logIn = jest.fn(() => null); 
  sprout.authorizeLogIn();

  expect(sprout.authorizeLogIn()).toEqual("Sorry, please try logging in again.");
  sprout.logIn = originalLogIn;
});

// test("user encountered an error while logging in", () => {  
//   let sprout = new SproutsMarketplace();
//   let originalLogIn = sprout.logIn();

//   sprout.logIn = jest.fn(() => null); 
//   console.log(sprout.logIn);
//   console.log(sprout.logIn.mock);
//   sprout.authorizeLogIn();
//   console.log(sprout.logIn.mock.calls);

//   expect(sprout.authorizeLogIn()).toEqual("Welcome back! Here's some plants you might like.");
//   sprout.logIn = originalLogIn;
// });

