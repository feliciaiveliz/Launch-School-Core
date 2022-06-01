class SproutsMarketplace {
  logIn() {
    // user types in username
    // user types in password
    // user clicks login button
    return "User has logged in.";
  }

  authorizeLogIn() {
    let result = this.logIn();
  
    if (result) {
      return "Welcome back! Here's some plants you might like."
      // if logIn takes user to home page
    } else {
      return "Sorry, please try logging in again."
      // user is redirect back to login page with appopriate error message
    }
  }
}

module.exports = SproutsMarketplace;

