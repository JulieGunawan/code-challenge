/**
   _____                           _            
  / ____|                         (_)           
 | |  __   ___  _ __    ___  _ __  _   ___  ___ 
 | | |_ | / _ \| '_ \  / _ \| '__|| | / __|/ __|
 | |__| ||  __/| | | ||  __/| |   | || (__ \__ \
  \_____| \___||_| |_| \___||_|   |_| \___||___/
 * @challenge 3
 * @description
 * In this challenge you are to implement generic types and functions.
 *  Below we have 3 functions that concat 2 arrays. One for strings, numbers, and booleans.
 *   Create a function genericConcat that can properly handle and type the give 3 concat functions.
 *   Additionally use created genericConcat to then recreate the stringConcat.
 * @requirements
 * - Make a function genericConcat that concats two input arrays of the same type
 * - Create a generic type `valueType` {value:T}
 * - Use your created `valueType` to make the following type constraint {value:{firstName:string,lastName:string}}
 * - Make a function `keyValueMap` that given a key (extending string) and a value returns a Map typed against the input Key Value
 * - Make a function `valueGetter` that parses our a specific value of an object given the object and the attribute name you wish to fetch
 * - Make a function `compose` that performs function composition generically.
 */
/**************
   _____                    _                 _        
  / ____|                  | |               | |       
 | |      ___   _ __   ___ | |_  __ _  _ __  | |_  ___ 
 | |     / _ \ | '_ \ / __|| __|/ _` || '_ \ | __|/ __|
 | |____| (_) || | | |\__ \| |_| (_| || | | || |_ \__ \
  \_____|\___/ |_| |_||___/ \__|\__,_||_| |_| \__||___/
**************/

import { IMPLEMENT } from "../helpers/helpers";

function stringConcat(array1: string[], array2: string[]) {
  return [...array1, ...array2];
}
function numberConcat(array1: number[], array2: number[]) {
  return [...array1, ...array2];
}
function booleanConcat(array1: boolean[], array2: boolean[]) {
  return [...array1, ...array2];
}

/**************
   _____  _             _  _                                
  / ____|| |           | || |                               
 | |     | |__    __ _ | || |  ___  _ __    __ _   ___  ___ 
 | |     | '_ \  / _` || || | / _ \| '_ \  / _` | / _ \/ __|
 | |____ | | | || (_| || || ||  __/| | | || (_| ||  __/\__ \
  \_____||_| |_| \__,_||_||_| \___||_| |_| \__, | \___||___/
                                            __/ |           
                                           |___/            
**************/

/**
 * @challenge 3.1
 * @name genericConcat
 * @description Implement the function `genericConcat`, this function will handle the merging of two arrays of the same type into one new array.
 * @returns A new array of the same type of the two input arrays
 * @tips
 * - you should be able to call genericConcat the same way you would call `stringConcat`, `numberConcat`, or `booleanConcat`.
 */
function genericConcat<T extends any[]>(array1: T, array2: T):T[] {
  var concatenatedArray = array1.concat(array2);
  return concatenatedArray;
}

/**
 * @challenge 3.2
 * @name valueType
 * @description Create a type valueType that types against an object with {value:T}
 */
type valueType<T>= {
  value:T;
};

/**
 * @challenge 3.3
 * @name nameValueType
 * @description Create a type `nameValueType` which uses `valueType` to generate the type inference `{value:{firstName:string,lastName:string}}`
 */
type nameValueType = valueType<{
  firstName: string;
  lastName: string;
}>;

/**
 * @challenge 3.4
 * @name keyValueMap
 * @description Implement and type annotate the function `keyValueMap`, this function takes a key (extends string) and a value and created a
 *      Map typed against these inputs.
 * @input key extends string
 * @input value 
 * @returns a Map typed against our key and value
 * @tips
 * - key extends string
 */
export function keyValueMap <K extends string, V>(
  key: K,
  value: V
): Map<K, V> {
  const map = new Map<K, V> ();
  map.set(key, value)
  return map;
}

/**
 * @challenge 3.5
 * @name valueGetter
 * @description Implement and type annotate the function `valueGetter`, this function takes an object and an attribute name of said object
 *      and returns the value of the objects specified attribute
 * @input attribute keyof T
 * @input object object
 * @returns The value within the objects attribute specified
 */
export function valueGetter <T extends Record<string, object>>(
  attribute: keyof T,
  object: T
): T[keyof T] {
  return object[attribute];
}

/**
 * @challenge 3.6
 * @name compose
 * @description Implement and type annotate the function `compose`, this function is going to perform function composition. That is, given function
 *      f(x) => y and function g(y) => w create the composed function h(x) => w where h(x) = g(f(x))
 * @input f function of keyValueMap
 * @input g ????
 * @returns h ????
 */
export function compose<T, U, V>(
  f: (x:T) => U, 
  g: (y:U) => V
): (x:T) => V {
  return (x:T) => g(f(x));
}

function main() {
  /**
   * Main function gets executed on `yarn generics` or `npm run generics`
   */
  let evenNumbers: Array<number> = [2, 4, 6];
  let oddNumbers: Array<number> = [1, 3, 5, 7];
  let allNumbers = genericConcat(evenNumbers,oddNumbers);
  allNumbers.forEach((each) => console.log(each));

  

}

main();
