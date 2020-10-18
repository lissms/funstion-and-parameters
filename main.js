"use strict";

fetch(
  "//beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json"
)
  .then((response) => response.json())
  .then((data) => {
    writeMyArray(data.results);
  });

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
