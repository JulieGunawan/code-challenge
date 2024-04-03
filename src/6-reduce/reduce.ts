/**
  _____            _                   
 |  __ \          | |                  
 | |__) | ___   __| | _   _   ___  ___ 
 |  _  / / _ \ / _` || | | | / __|/ _ \
 | | \ \|  __/| (_| || |_| || (__|  __/
 |_|  \_\\___| \__,_| \__,_| \___|\___|
 * @challenge 6
 * @description 
 * In this challenge you are to work with and create built in array methods such as reduce, map, filter.
 * 
 */

import { IMPLEMENT } from "../helpers/helpers";

/**************
   _____                    _                 _        
  / ____|                  | |               | |       
 | |      ___   _ __   ___ | |_  __ _  _ __  | |_  ___ 
 | |     / _ \ | '_ \ / __|| __|/ _` || '_ \ | __|/ __|
 | |____| (_) || | | |\__ \| |_| (_| || | | || |_ \__ \
  \_____|\___/ |_| |_||___/ \__|\__,_||_| |_| \__||___/
**************/

const names = [
  "Albert",
  "Sarina",
  "Olive",
  "Tomos",
  "Bruce",
  "Nate",
  "Diana",
  "Grady",
  "Olly",
];

type nameAndLength = {
  name: string;
  nameLength: number;
};

/**************
     _____  _             _  _                                
    / ____|| |           | || |                               
   | |     | |__    __ _ | || |  ___  _ __    __ _   ___  ___ 
   | |     | '_ \  / _` || || | / _ \| '_ \  / _` | / _ \/ __|
   | |____ | | | || (_| || || ||  __/| | | q|| (_| ||  __/\__ \
    \_____||_| |_| \__,_||_||_| \___||_| |_| \__, | \___||___/
                                              __/ |           
                                             |___/            
  **************/

/**
 * @challenge 6.1
 * @name mapNames
 * @description Create the function `mapNames`, this function will take an array of names and using
 *      the `.map` array method convert the names to the type `nameAndLength`. Where nameLength is the length is the length of the name.
 */
function mapNames(names: string[]): nameAndLength[] {
  
  const nameLengthArray:nameAndLength[]= names.map((name) => ({
    name, 
    nameLength: name.length
  }));
  return nameLengthArray;

}

/**
 * @challenge 6.2
 * @name filterNames
 * @description Create the function `filterNames`, this function will take an array of `nameAndLength` and using
 *      the `.filter` array method filter out the names that have an odd `nameLength`.
 */
function filterNames(names: nameAndLength[]): nameAndLength[] {
  return names.filter(({nameLength}) => {
    nameLength%2===0
  })
}

/**
 * @challenge 6.3
 * @name reduceNames
 * @description Create the function `reduceNames`, this function will take an array of `nameAndLength` and using
 *      the `.reduce` array method calculate the total number of characters in all names combined.
 */
function reduceNames(names: nameAndLength[]): number {
  return names.reduce((total, {nameLength})=> total + nameLength, 0);
}

/**
 * @challenge 6.4
 * @name mapFilterReduceNames
 * @description Create the function `mapFilterReduceNames`, this function will take an array of names and must
 *      map the string[] to nameAndLength[], filter the nameAndLength with odd nameLength, and reduce the array to get the
 *      total number of characters in all names combined.
 */
function mapFilterReduceNames(names: string[]): number {
  return reduceNames(filterNames(mapNames(names)));

}

/**
 * @challenge 6.5
 * @name map
 * @description Create and type annotate the function `map`, this function will take a generic array of type T and someFunction which must be type annotated.
 *      This function will then perform the .map functionality using this array and function.
 */
function map<T, U>(array: T[], someFunction: (arg:T)=>U): U[] {
  let arrayResult: U[] = [];
  array.forEach((item:T) => {
    const transformedItem:U = someFunction(item);
    arrayResult.push(transformedItem);
  })
  return arrayResult;
}

/**
 * @challenge 6.6
 * @name filter
 * @description Create and type annotate the function `filter`, this function will take a generic array of type T and someFunction which must be type annotated.
 *      This function will then perform the .filter functionality using this array and function.
 */
function filter<T, U>(array: T[], someFunction: (arg:T)=>U): T[] {
  let result:T[] = [];
  array.forEach((item:T)=>{
    const condition:U = someFunction(item)
    if(condition)
      result.push(item);
    }
  )
  return result;
}

/**
 * @challenge 6.7
 * @name reduce
 * @description Create and type annotate the function `reduce`, this function will take a generic array of type T and someReducer which must be type annotated, and an initialValue.
 *      This function will then perform the .reduce functionality using this array, reducer, and initial value.
 */
function reduce<T>(
  array: T[],
  someReducer: (accumulator:T, current:T)=>T,
  initialValue: T
): T {
  let accumulator:T=initialValue;
  array.forEach((item)=>{
    accumulator = someReducer(item,accumulator);
  });
  return accumulator;
}

function main() {
  /**
   * Main function gets executed on `yarn reduce` or `npm run reduce`
   */
}

main();
