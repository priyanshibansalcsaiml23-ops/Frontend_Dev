const user = {
  name: "Priyanshi",
  showName: () => {
    console.log(this.name); // 'this' doesn't refer to user object
  }
};

user.showName(); // undefined

// Fix using normal function
const fixedUser = {
  name: "sara",
  showName() {
    console.log(this.name); // Correctly logs "sara"
  }
};

fixedUser.showName();
