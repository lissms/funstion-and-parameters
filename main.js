"use strict";
const myWordList = [
  {
    text: "Pencil",
    total: 6,
  },
  {
    text: "Thermo",
    total: 2,
  },
  {
    text: "TV",
    total: 8,
  },
  {
    text: "Phone",
    total: 4,
  },
];

const writeMyArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    writeThis(array[i].text, array[i].total);
  }
};

const writeThis = (word, number) => {
  for (let i = 0; i < number; i++) {
    console.log("word", word, number);
  }
};
writeMyArray(myWordList);
