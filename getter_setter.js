const person = Object.create(
  {
    calculateAge() {
      console.log("Age ", new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: "Aibek",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1970,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        document.body.style.background = "red";
        console.log("Set age", value);
      },
    },
  }
);

person.name = "Kuba";

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("Key", key, person[key]);
  }
}
