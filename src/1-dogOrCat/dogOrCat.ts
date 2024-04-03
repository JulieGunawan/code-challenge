/**
  _____                  ____          _____        _   
 |  __ \                / __ \        / ____|      | |  
 | |  | |  ___    __ _ | |  | | _ __ | |      __ _ | |_ 
 | |  | | / _ \  / _` || |  | || '__|| |     / _` || __|
 | |__| || (_) || (_| || |__| || |   | |____| (_| || |_ 
 |_____/  \___/  \__, | \____/ |_|    \_____|\__,_| \__|
                  __/ |                                 
                 |___/                                  
 * @challenge 1
 * @description 
 * In this challenge you are to create a data type that represents a Dog OR a Cat.
 *      This data type will then be used to perform either Dog behaviour or Cat behaviour.
 * @requirements
 * - Make a new type (IDogOrCat) that represents a Dog OR a Cat.
 * - Make a function (dogOrCat) that takes a cat or dog breed and returns your new type (IDogOrCat).
 * - Make a function (barkOrMeow) that given your new type (IDogOrCat) barks or meows depending on whether the instance given to it is a Dog or a Cat.
 * - Make a function (dogOrCatMatch) that given your new type (IDogOrCat) and a two functions, one for a dog and the other for a cat, execute the 
 *       correct function based on the instance passed in. 
 * - Make a function (DogOrCatMatchBarkOrMeow) that uses your dogOrCatMatch to acheive the functionality of barkOrMeow
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
const CatBreeds = ["Persian", "British Shorthair", "Abyssinian", "Sphynx"];

type Cats = typeof CatBreeds[number];

const DogBreeds = ["Golden Retriever", "Poodle", "Bulldog", "Beagle"];

type Dogs = typeof DogBreeds[number];

class Animal {
  private breed: Cats | Dogs;
  constructor(breed: Cats | Dogs) {
    this.breed = breed;
  }
}

class Cat extends Animal {
  constructor(breed: Cats) {
    super(breed);
  }
  meow(): "Meow" {
    return `Meow`;
  }
}

class Dog extends Animal {
  constructor(breed: Dogs) {
    super(breed);
  }
  bark(): "Bark" {
    return `Bark`;
  }
}

/**************
   _____  _             _  _                                
  / ____|| |           | || |                               
 | |     | |__    __ _ | || |  ___  _ __// Assuming Cats and Dogs are type aliases for string
    if (CatBreeds.includes(breed as any)) {
        return new Cat(breed as Cats);
    } else if (DogBreeds.includes(breed as any)) {
        return new Dog(breed as Dogs);
    } else {
        // Handle cases where breed is neither a Cat nor a Dog
        throw new Error("Unknown breed");
    }
 * @description Create the `IDogOrCat` type that will represent a Dog or a Cat, this type will be used in the functions that follow.
 * @tips
 * - Given this type we will want to be capable of identifying if our instance is a Cat or a Dog
 * @requirements
 * - Make a new type (IDogOrCat) that represents a Dog OR a Cat.
 */
type IDogOrCat = Cat | Dog;

const isCat = (c:IDogOrCat):c is Cat => {
  return "meow" in c;
}

const isDog = (d:IDogOrCat):d is Dog => {
  return "bark" in d;
}

/**
 * @challenge 1.2
 * @name dogOrCat
 * @description Implement the `dogOrCat` function, this function will take a Dog or Cat breed and using CatBreeds + DogBreeds
 *      Identify and return a `IDogOrCat`
 * @input A string that is one our predefined breeds of Dog or Cat
 * @returns A single type that represents a Dog or a Cat (dogOrCat)
 * @test This function has a unit test which will be ran using `yarn test:dogOrCat` or `npm run test:dogOrCat`
 */
export function dogOrCat(breed: Cats | Dogs): IDogOrCat {
  if (CatBreeds.includes(breed)){
    return new Cat(breed) as Cat;
  } else if (DogBreeds.includes(breed)){
    return new Dog(breed) as Dog;
  } else {
    throw new Error("Invalid breed");
  }
}

/**
 * @challenge 1.3
 * @name barkOrMeow
 * @description Implement the `barkOrMeow` function, this function will take a IDogOrCat and execute `bark` or `meow` depending on whether
 *      the instance is a dog or a cat.
 * @input A IDogOrCat
 * @returns A Bark or Meow
 * @limitation Cannot `instanceof` to check the class
 */
export function barkOrMeow(dogOrCat: IDogOrCat): "Bark" | "Meow" {
  if (isDog(dogOrCat)){
    return dogOrCat.bark();
  }
  return dogOrCat.meow();
 
}

/**
 * @challenge 1.4
 * @name dogOrCatMatch
 * @description Implement and type annotate the `dogOrCatMatch` function, this function will take a IDogOrCat and two functions,
 *      one for a dog and the other for a cat, execute either the dog or the cat function depending on whether
 *      the instance is a dog or a cat. The return of the cat function and the dog function should be the same type (is going to be generic).
 * @input A IDogOrCat
 * @input Two match functions, one for dog, one for cat. Both returning the same type
 * @returns The return type of the dog function and the cat function
 * @limitation Cannot `instanceof` to check the class
 * @tips
 * - Will require Generic implementation
 */
export function dogOrCatMatch<T>(
  dogOrCat: IDogOrCat,
  match: {
    cat: (cat:Cat) => T;
    dog: (dog:Dog) => T;
  }
): T { //the return should be the same time?

  
  if (isCat(dogOrCat)){
    let cat:Cat = dogOrCat;
    return match.cat(cat);
  } else {
    let dog:Dog = dogOrCat;
    return match.dog(dog);
  } 
}

/**
 * @challenge 1.5
 * @name DogOrCatMatchBarkOrMeow
 * @description Call your `dogOrCatMatch` and replicate what `barkOrMeow` is set out to acheive. That is, call dogOrCatMatch
 *      and have it return `"Bark" | "Meow"` based on if Dog or Cat
 * @input A IDogOrCat
 * @limitation Cannot `instanceof` to check the class
 * @returns A Bark or Meow
 */
export function DogOrCatMatchBarkOrMeow<T>(dogOrCat: IDogOrCat):"Bark" | "Meow" {
  
  return dogOrCatMatch(dogOrCat, { 
    cat:(cat:Cat) => cat.meow(),
    dog: (dog:Dog)=> dog.bark()
  });
}

function main() {
  /**
   * Main function gets executed on `yarn dogOrCat` or `npm run dogOrCat`
   */
  
  let dog = dogOrCat("Beagle");
  let cat = dogOrCat("Persian");
  // console.log(barkOrMeow(dog));
  console.log(DogOrCatMatchBarkOrMeow(dog));
}

main();
