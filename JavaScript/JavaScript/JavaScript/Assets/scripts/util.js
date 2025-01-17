export let apikey = "Swapnadip";

export default function (userName, message) {
  return userName + message;
}

export default  (userName, message) => {
  return userName + message;
}

const userName = "Swapnadip";
const userAge = 34;

const user = {
  Name = "Swapnadip",
  Age = 34,
  greet(userName) {
    console.log(this.Age);
    return userName;
  }
};

class User  {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("HI");
  }
};

const user1 = new User("Swapnadip", 35);
console.log(user1);

//--------------------------------------Array-----------------------------------------------------

const hobbies = ["Sports", "Music", "Reading"];
console.log(hobbies[1]);
//Output
//Music


hobbies.push("Cooking");

const index=hobbies.findIndex((item) => {
  return item === "Sports";
})
console.log(index);
//Output
//0

const index1 = hobbies.findIndex((item) => item === "Sports");
console.log(index1);
//Output
//0

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);
//Output
//['Sports!', 'Music!', 'Reading!', 'Cooking!']

const editedHobbies2 = hobbies.map((item) => ({ text:item}));
console.log(editedHobbies2);

//Output
//[
//  { text: 'Sports' },
//  { text: 'Music' },
//  { text: 'Reading' },
//  { text: 'Cooking' }
//]

<div id="tab-content">
  <ul>
    {content[activeContentIndex].map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
</div>

//--------------------------------------Destructuring-----------------------------------------------------

const userName = ["Swapnadip", "Saha"];
const firstName = userName[0];
const lastName = userName[1];
console.log(firstName, lastName);

const [firstName1, lastName1] = ["Swapnadip", "Saha"];
console.log(firstName1, lastName1);

const user = {
  Name: "Swapnadip",
  Age: 34,
  };

const name = user.Name;
const age = user.Age;
console.log(name, age);


const { Name,Age } = {
  Name: "Swapnadip",
  Age: 36,
};
console.log(Name, Age);

const { Name:userNameObj, Age :userAge} = {
  Name: "Swapnadip",
  Age: 39,
};
console.log(userNameObj, userAge);

//--------------------------------------Spread Operator-----------------------------------------------------

const hobbies = ["Sports", "Music", "Reading"];
const user = {
  Name: "Swapnadip",
  Age: 34,
};

const newHobbies = ["Cooking"];
const mergeHobbies = [hobbies, newHobbies];
console.log(mergeHobbies);

const mergeHobbies1 = [...hobbies, ...newHobbies];
console.log(mergeHobbies1);


const extendeduser = {
  ...user,
  isAdmin: true
};
console.log(extendeduser);

//--------------------------------------For-----------------------------------------------------
const hobbies = ["Sports", "Music", "Reading"];
for (const hobby of hobbies) {
  console.log(hobby);
}

//--------------------------------------Passing function as value-----------------------------------------------------
function manageTimeOut() {
  console.log("Timed out!");
}

const newManageTimeOut = () => {
  console.log("Timed out!....Again");
}


setTimeout(manageTimeOut);
setTimeout(newManageTimeOut, 2000);
setTimeout(() => {
  console.log("More Timed out!....Again");
},3000);

function greeter(greetfn) {
  greetfn();
}

greeter(() => console.log("Hi"));

//-------------------------------------Function inside function-----------------------------------------------------
function init() {
  function greet() {
    console.log("Hi");
  }

  greet();
}

init();
//-------------------------------------Reference vs premitive values-----------------------------------------------------
let userMessage = "Hello";
console.log(userMessage);
userMessage = "Hello overwritten";
console.log(userMessage);
userMessage = userMessage.concat(" Again");
console.log(userMessage);


const hobbies = ["Sports", "Music", "Reading"]; 
console.log(hobbies);
hobbies.push("Cooking");
console.log(hobbies);