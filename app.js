//task src https://docs.google.com/document/d/1_2C-SA2fhKduqCZ0YsZyZHXpFEb4lmjyIi8a875yc04/edit
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//task1 Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai
//nuo 5 iki 25.
const array = [];
for (let i = 0; i < 30; i++) {
  array.push(rand(5, 25));
}
console.log(array);
//task2 Naudodamiesi 1 uždavinio masyvu:
//a Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let elementsBiggerThan10 = 0;
array.forEach((element) => {
  if (element > 10) {
    elementsBiggerThan10++;
  }
});
console.log(elementsBiggerThan10);

//b Raskite didžiausią masyvo reikšmę ir jos indeksą;
let biggestValue = 0;
let biggestValueIndex = -1;
array.forEach((value, index) => {
  if (value > biggestValue) {
    biggestValue = value;
    biggestValueIndex = index;
  }
});
console.log(
  "Didžiausia reikšmė: ",
  biggestValue,
  " jos indeksas: ",
  biggestValueIndex
);
//jei gali buti neviena didžiausia
let biggestValue2 = 0;
array.forEach((value) => {
  if (value > biggestValue) {
    biggestValue = value;
  }
});
const biggestValueIndex2 = [];
let biggestValueIndex2String = "";
array.forEach((value, index) => {
  if (value === biggestValue) {
    biggestValueIndex2.push(index);
    biggestValueIndex2String += ` ${index}`;
  }
});
console.log(
  "Didžiausia reikšmė: ",
  biggestValue,
  " šią reikšmę turi indeksai: ",
  biggestValueIndex2String
);

//c Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let evenIndexValueSum = 0;
array.forEach((number, index) => {
  if (index % 2 === 0) {
    evenIndexValueSum += number;
  }
});
console.log("Lyginių indeksų suma: ", evenIndexValueSum);

//d Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmės minus tos reikšmės indeksas;
const arrayNew = [];
array.forEach((value, index) => arrayNew.push(value - index));
console.log(arrayNew);

//e Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
//darau prielaidą, kad naujai sukurtą masyvą reikia papildyti, o ne pirmą
const needAddElements = 39 - (arrayNew.length - 1);
for (let i = 0; i < needAddElements; i++) {
  arrayNew.push(rand(5, 25));
}
console.log(arrayNew);

//f Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių,
//o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
const arrayEven = [];
const arrayOdd = [];
arrayNew.forEach((value, index) => {
  index % 2 === 0 ? arrayEven.push(value) : arrayOdd.push(value);
});
console.log("Porinių indeksų masyvas: ", arrayEven);
console.log("Neporinių indeksų masyvas: ", arrayOdd);

//g Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
array.forEach((value, index) => {
  if (index % 2 === 0 && value > 15) {
    array[index] = 0;
  }
});
console.log("Pirmynis modifikuotas masyvas: ", array);

//h Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
//darau prielaidą, kad iškoti reikšmės reikia modifikuotame pirmame masyve
let indexOfFirstValueBiggerThan10 = -1;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    indexOfFirstValueBiggerThan10 = i;
    break;
  }
}
console.log(
  "Pirmas array masyvo elemneto indeksas, kurio elemento reikšmė didesnė už 10: ",
  indexOfFirstValueBiggerThan10,
  ", elemento reikšmė: ",
  array[indexOfFirstValueBiggerThan10]
);

//task3 Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200.
//Suskaičiuokite kiek yra kiekvienos raidės.
const arrayOfABCD = [];
let counterA = 0;
let counterB = 0;
let counterC = 0;
let counterD = 0;
for (let i = 0; i < 200; i++) {
  const random = rand(0, 3);
  switch (random) {
    case 0:
      arrayOfABCD.push("A");
      counterA++;
      break;
    case 1:
      arrayOfABCD.push("B");
      counterB++;
      break;
    case 2:
      arrayOfABCD.push("C");
      counterC++;
      break;
    case 3:
      arrayOfABCD.push("D");
      counterD++;
      break;
    default:
      console.error(`Error 418`);
  }
}
console.log(
  "Masyve: ",
  arrayOfABCD,
  ` yra A - ${counterA}, yra B - ${counterB}, yra C - ${counterC}, yra D - ${counterD},`
);

//task4 Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes.
// Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
function arrayOfABCDMaker(arrayLength) {
  const arrayOfABCD = [];
  for (let i = 0; i < arrayLength; i++) {
    const random = rand(0, 3);
    switch (random) {
      case 0:
        arrayOfABCD.push("A");
        break;
      case 1:
        arrayOfABCD.push("B");
        break;
      case 2:
        arrayOfABCD.push("C");
        break;
      case 3:
        arrayOfABCD.push("D");
        break;
      default:
        console.error(`Error 418`);
    }
  }
  return arrayOfABCD;
}
const arrayOfABCD1 = arrayOfABCDMaker(200);
const arrayOfABCD2 = arrayOfABCDMaker(200);
const arrayOfABCD3 = arrayOfABCDMaker(200);
const sumOfArrayABCD = [];
const uniqueCombination = {};
const uniqueValue = [];
arrayOfABCD1.forEach((value, index) => {
  const string =
    arrayOfABCD1[index] + arrayOfABCD2[index] + arrayOfABCD3[index];
  sumOfArrayABCD.push(string);
  uniqueCombination.hasOwnProperty(string)
    ? uniqueCombination[string]++
    : (uniqueCombination[string] = 1);
});
Object.keys(uniqueCombination).forEach((key) => {
  if (uniqueCombination[key] === 1) {
    uniqueValue.push(key);
  }
});
console.log(sumOfArrayABCD);
console.log(
  "Unikalių reikšmių yra: ",
  uniqueValue.length,
  " Unikalios reikšmės yra ",
  uniqueValue
);
console.log("Unikalių kombinacijų ", Object.keys(uniqueCombination).length);

//task5 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100.
//Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
/**
 *
 * @param {number} length length of array you want generate
 * @param {number} minNumber minimum array value
 * @param {number} maxNumber max array value
 * @returns {[]} array of radom not repeated numbers
 */
function arrayOfRandomNumbersThatNotReapeats(length, minNumber, maxNumber) {
  if (maxNumber - minNumber < length) {
    console.error("Array length is to big");
    return [];
  }
  const array = [];
  while (array.length < length) {
    const randomNumber = rand(minNumber, maxNumber);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
}
const arrayofRandomNumbers1 = arrayOfRandomNumbersThatNotReapeats(100, 100, 999);
const arrayofRandomNumbers2 = arrayOfRandomNumbersThatNotReapeats(100, 100, 999);
console.log(arrayofRandomNumbers1);
console.log(arrayofRandomNumbers2);

//task6 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve,
// bet nėra antrame 6 uždavinio masyve.
const differentValuesArray = [];
arrayofRandomNumbers1.forEach((value) => {
  if (!arrayofRandomNumbers2.includes(value)) {
    differentValuesArray.push(value);
  }
});
console.log(differentValuesArray);

//Task7 Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
const sameValuesArray = [];
arrayofRandomNumbers1.forEach((value) => {
  if (arrayofRandomNumbers2.includes(value)) {
    sameValuesArray.push(value);
  }
});
console.log(sameValuesArray);

//Task8 Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės,
//o jo reikšmės iš būtų antrojo masyvo.
const strangeArray = [];
arrayofRandomNumbers1.forEach((value, index) => {
  strangeArray[value] = arrayofRandomNumbers2[index];
});
console.log(strangeArray);

//Task9 Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias,
//pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
function kindaFibonacciArray(length) {
  const array = [];
  array.push(rand(5, 25));
  array.push(rand(5, 25));
  for (let i = 0; array.length < length; i++) {
    array.push(array[i] + array[i + 1]);
  }
  return array;
}
const task9Array = kindaFibonacciArray(10);
console.log(task9Array);
