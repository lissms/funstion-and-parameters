"use strict";
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const writeThis = (word, number) => {
  for (let i = 0; i < number; i++) {
    console.log("version uno:", word, number);
  }
};
writeThis("patata", getRandomNumber(10));
writeThis("Aguacate", getRandomNumber(10));
writeThis("Pizza", getRandomNumber(10));

/* aqui tendo dudas si patata, aguacate y pizza 
deberian coger el mismo numero random. En este 
caso el segundo parametro deberia ser otro, porq 
 cada vez que llamo a la funcion, ella saca un 
 numero nuevo. Por eso no es la misma cantidad de
  patata, aguacate y pizza  */

/* version dos, si quiero que me salgan la misma cantidad de veces */

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let numberRandom = getRandomNumber(10);

const writeThisV2 = (word, number) => {
  for (let i = 0; i < number; i++) {
    console.log("version dos del ejercicio", word, number);
  }
};
writeThisV2("patata", numberRandom);
writeThisV2("Aguacate", numberRandom);
writeThisV2("Pizza", numberRandom);
