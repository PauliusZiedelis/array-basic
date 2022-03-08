//task src https://docs.google.com/document/d/1_2C-SA2fhKduqCZ0YsZyZHXpFEb4lmjyIi8a875yc04/edit
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//task1 Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
const array = [];
for(let i = 0; i < 30; i++){
    array.push(rand(5, 25));
}
console.log(array);
//task2 Naudodamiesi 1 uždavinio masyvu:
//a Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let elementsBiggerThan10 = 0;
array.forEach(element => {
    if(element > 10){
        elementsBiggerThan10++;
    }
});
console.log(elementsBiggerThan10);

//b Raskite didžiausią masyvo reikšmę ir jos indeksą;
let biggestValue = 0;
let biggestValueIndex = -1;
array.forEach((value, index) => {
    if(value > biggestValue){
        biggestValue = value;
        biggestValueIndex =index;
    }
})
console.log('Didžiausia reikšmė: ', biggestValue, ' jos indeksas: ', biggestValueIndex);
//jei gali buti neviena didžiausia
let biggestValue2 = 0;
array.forEach(value => {
    if(value > biggestValue){
        biggestValue = value;
    }
});
const biggestValueIndex2 = []
let biggestValueIndex2String = '';
array.forEach((value, index) => {
    if(value === biggestValue){
        biggestValueIndex2.push(index);
        biggestValueIndex2String += ` ${index}`
    }
})
console.log('Didžiausia reikšmė: ', biggestValue, ' šią reikšmę turi indeksai: ', biggestValueIndex2String);

//c Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let evenIndexValueSum = 0;
array.forEach((number, index)=> {
    if(index % 2 === 0){
        evenIndexValueSum += number;
    }
});
console.log('Lyginių indeksų suma: ', evenIndexValueSum);

//d Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmės minus tos reikšmės indeksas;
const arrayNew = [];
array.forEach((value, index) => arrayNew.push(value - index));
console.log(arrayNew);

//e Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
//darau prielaidą, kad naujai sukurtą masyvą reikia papildyti, o ne pirmą
const needAddElements = 39 - (arrayNew.length -1);
for(let i = 0; i < needAddElements; i++){
    arrayNew.push(rand(5, 25));
}
console.log(arrayNew);

//f Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
const arrayEven = [];
const arrayOdd =[];
arrayNew.forEach((value, index) => {
    (index % 2 === 0) ? arrayEven.push(value) : arrayOdd.push(value);
});
console.log('Porinių indeksų masyvas: ', arrayEven);
console.log('Neporinių indeksų masyvas: ', arrayOdd);

//g Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
array.forEach((value, index) => {
    if(index % 2 === 0 && value > 15){
        array[index] = 0;
    }
});
console.log('Pirmynis modifikuotas masyvas: ', array);

//h Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
//darau prielaidą, kad iškoti reikšmės reikia modifikuotame pirmame masyve
let indexOfFirstValueBiggerThan10 = -1;
for(let i = 0; i < array.length; i++){
    if(array[i] > 10){
        indexOfFirstValueBiggerThan10 = i;
        break;
    }
}
console.log('Pirmas array masyvo elemneto indeksas, kurio elemento reikšmė didesnė už 10: ', indexOfFirstValueBiggerThan10, ', elemento reikšmė: ', array[indexOfFirstValueBiggerThan10]);

//task3 Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

