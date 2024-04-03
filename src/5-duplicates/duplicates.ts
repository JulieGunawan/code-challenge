/**
██████╗ ██╗   ██╗██████╗ ██╗     ██╗ ██████╗ █████╗ ████████╗███████╗███████╗
██╔══██╗██║   ██║██╔══██╗██║     ██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝██╔════╝
██║  ██║██║   ██║██████╔╝██║     ██║██║     ███████║   ██║   █████╗  ███████╗
██║  ██║██║   ██║██╔═══╝ ██║     ██║██║     ██╔══██║   ██║   ██╔══╝  ╚════██║
██████╔╝╚██████╔╝██║     ███████╗██║╚██████╗██║  ██║   ██║   ███████╗███████║
╚═════╝  ╚═════╝ ╚═╝     ╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
                                                                                                                   
 * @challenge 5
 * @description 
 *  In this challenge you are to create functions that deal with duplication.
 */

import { IMPLEMENT } from "../helpers/helpers";

/**
 * @challenge 5.1
 * @name dedupe
 * @description - implement the function "dedupe", this function takes a string array
 * and returns a new array with all duplicate values removed
 *
 * ["a", "b", "b"] => ["a", "b"]
 */
function dedupe(array1: string[]): string[] {
  let dedupeArray: string[]=[];
  array1.forEach((item)=>{
    if (!dedupeArray.includes(item)){
      dedupeArray.push(item);
    }
  });
  return dedupeArray;
}


/**
 * @challenge 5.2
 * @name findDuplicates
 * @description - implement the function "findDuplicates" this function takes two string arrays
 * and returns a new array that contains the values that are both in array1 and array2
 * @tip - array1 and array2 are of unknown length and may not be the same length as one another
 */
function findDuplicates(array1: string[], array2: string[]): string[] {
  let newArray:string[] = [];

  array1.forEach((item)=>{
    if(array2.includes(item)){
      newArray.push(item);
    }
  })

  return newArray;
}

/**
 * @challenge 5.3
 * @name filterOutDuplicates
 * @description - implement the function "filterOutDuplicates" this function takes two string arrays
 * and returns a new array that contains the values that are in one of the arrays but not in the other
 * @tip - array1 and array2 are of unknown length and may not be the same length as one another
 */
function filterOutDuplicates(array1: string[], array2: string[]): string[] {
  let newArray:string[] = [];

  array1.forEach((item)=>{
    if(!array2.includes(item) && !newArray.includes(item)){
      newArray.push(item);
    }
  })

  array2.forEach((item)=>{
    if(!array1.includes(item) && !newArray.includes(item)){
      newArray.push(item);
    }
  })

  return newArray;
}


/**
 * @challenge 5.4
 * @name countDuplicates
 * @description - implement the function "countDuplicates" this function takes two string arrays
 * and returns a dictionary/map/object where each key is a unique value from either array, and the value is the total count of that number's occurrences across both arrays
 * @tip - array1 and array2 are of unknown length and may not be the same length as one another
 */
function countDuplicates(array1: string[], array2: string[]): Record<string, number> {
  const countDuplicateMap: Record<string, number> = {};

  //count duplicated value in array 1
  array1.forEach((item) => {
    if(array2.includes(item)){
      countDuplicateMap[item] = (countDuplicateMap[item] ||0) +1; 
    }
  });
  //count duplicated value in array 2
  array2.forEach((item) => {
    if(array1.includes(item)){
      countDuplicateMap[item] = (countDuplicateMap[item] ||0) +1; 
    }
  });

  return countDuplicateMap;
}


function main() {
  /**
   * Main function gets executed on `yarn duplicates` or `npm run duplicates`
   */
  let array1=["1","2","3","4","5","1","3"];
  let array2=["1","2","5","6","7","8","3", "1"]

  console.log(countDuplicates(array1, array2));
}

main();
