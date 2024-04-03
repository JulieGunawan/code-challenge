/**
  ______  _            ____                   
 |  ____|(_)          |  _ \                  
 | |__    _  ____ ____| |_) | _   _  ____ ____
 |  __|  | ||_  /|_  /|  _ < | | | ||_  /|_  /
 | |     | | / /  / / | |_) || |_| | / /  / / 
 |_|     |_|/___|/___||____/  \__,_|/___|/___|
 * @challenge 2
 * @description
 * In this challenge you are to create functions to play and validate a game of FizzBuzz.
 *      Fizz Buzz is a group word game where players take turns collectively counting up from 1,
 *      If the number is divisible by 3 the current player must instead say Fizz
 *      If the number is divisible by 5 the current player must instead say Buzz
 *      If the number is both divisible by 3 and 5 the player must instead say Fizz Buzz
 * https://en.wikipedia.org/wiki/Fizz_buzz
 * @example 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, etc...
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
type IFizzBuzz = number | "Fizz" | "Buzz" | "Fizz Buzz";

export type PlayerAnswer = {
  counter: number;
  playerAnswer: IFizzBuzz;
};

type ValidAnswer = {
  counter: number;
  correct: true;
  playerAnswer: IFizzBuzz;
  correctAnswer: IFizzBuzz;
};

type InvalidAnswer = {
  counter: number;
  correct: false;
  playerAnswer: IFizzBuzz;
  correctAnswer: IFizzBuzz;
};

export type ValidatedAnswer = ValidAnswer | InvalidAnswer;

type ValidatedFizzBuzzGame = {
  losingTurn?: InvalidAnswer;
  turns: Array<ValidatedAnswer>;
  playedCorrectly: boolean;
};

export type FizzBuzzGame = Array<PlayerAnswer>;

const base1 = 3;
const base2 = 5;

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
 * @challenge 2.1
 * @name fizzBuzz
 * @description Implement the `fizzBuzz` function, this function will correctly play a FizzBuzz turn. That is, given a number output the correct
 *      value from the `IFizzBuzz` type
 * @input A number representing the games counter
 * @returns A PlayerAnswer which contains the current number and the playerAnswer `IFizzBuzz` depending on the input
 * @tips
 * - opposed to hard coding 3 and 5 into your function use the variables base1 and base2
 */
export function fizzBuzz(input: number): PlayerAnswer {

    if(input % base1 === 0 && input % base2 === 0){
      return {counter:input, playerAnswer:"Fizz Buzz"}
    }  else if (input % base1 === 0){
      return {counter:input, playerAnswer:"Fizz"}
    } else if (input % base2 === 0){
      return {counter:input, playerAnswer:"Buzz"}
    } else {
      return {counter:input, playerAnswer: input}
    }
}

/**
 * @challenge 2.2
 * @name equal
 * @description Implement the function `equal` which given two PlayerAnswers determines if they are equal or not
 * @input A playersAnswer
 * @input A playersAnswer
 * @returns A boolean representing if the answers are equal or not
 */
export function equal(answer1: PlayerAnswer, answer2: PlayerAnswer): boolean {
  if (answer1.counter === answer2.counter && answer1.playerAnswer===answer2.playerAnswer){
    return true;
  } else {
    return false;
  }
}

/**
 * @challenge 2.3
 * @name validateFizzBuzz
 * @description Implement the `validateFizzBuzz` function, this function will take PlayerAnswer (Does not need to be correct)
 *      and validates whether it is Valid or Invalid, returning a `ValidatedAnswer`.
 * @input A playersAnswer
 * @returns A ValidatedAnswer which is a union of ValidAnswer | InvalidAnswer
 */
export function validateFizzBuzz(playerAnswer: PlayerAnswer): ValidatedAnswer {
  let expectedAnswer:PlayerAnswer = fizzBuzz(playerAnswer.counter)
  if (equal(expectedAnswer, playerAnswer)){
    return ({counter:playerAnswer.counter, correct:true, playerAnswer: playerAnswer.playerAnswer, correctAnswer:expectedAnswer.playerAnswer})
  }
  else {
    return ({counter:playerAnswer.counter, correct:false, playerAnswer: playerAnswer.playerAnswer, correctAnswer:expectedAnswer.playerAnswer})
  } 
}

/**
 * @challenge 2.4
 * @name isValidAnswer
 * @description Implement and type annotate `isValidAnswer` function, this function will check if a ValidatedAnswer is a ValidAnswer
 * @input A answer that has been validated
 * @returns Boolean with the status of whether the answer is valid or not (type annotation required)
 */
export function isValidAnswer(validatedAnswer: ValidatedAnswer): boolean {
  console.log(validatedAnswer);
  return (validatedAnswer.correct);  
}

/**
 * @challenge 2.5
 * @name validateFizzBuzzGame
 * @description Implement the `validateFizzBuzzGame` function, this function will take a `FizzBuzzGame` which is a collection of `PlayerAnswer`s
 *      and return a `ValidatedFizzBuzzGame`. Including information on which turn lost if any, all turns validated, and whether the game was played correctly.
 * @input An array of playerAnswers
 * @returns A ValidatedFizzBuzzGame, this type will identify the losingTurn, which turns where incorrect, and if the game was played correctly
 * @assumptions
 * - In this challenge we are going to assume the counter in the playerAnswers is always correct.
 */
export function validateFizzBuzzGame(
  playerAnswers: FizzBuzzGame
): ValidatedFizzBuzzGame {
  let turns:ValidatedAnswer[] = playerAnswers.map(validateFizzBuzz); 
  let validatedAnswer:boolean[]= turns.map(isValidAnswer);
  let losingTurnIndex:number = -1;
  losingTurnIndex = validatedAnswer.findIndex((i)=>i===false);

  if (losingTurnIndex!==-1){
    let invalidAnswer:InvalidAnswer=turns[losingTurnIndex] as InvalidAnswer;
    return {losingTurn: invalidAnswer, turns: turns, playedCorrectly: false};
  } else {
    return {turns: turns, playedCorrectly:true}
  }
}

function main() {
  /**
   * Main function gets executed on `yarn fizzbuzz` or `npm run fizzbuzz`
   */
  let playerAnswers:FizzBuzzGame = [
    { counter: 1, playerAnswer: 1 },
    { counter: 2, playerAnswer: 2 },
    { counter: 3, playerAnswer: 3 },
    { counter: 4, playerAnswer: 4 },
    { counter: 5, playerAnswer: "Buzz" },
    { counter: 6, playerAnswer: "Fizz" },
    { counter: 7, playerAnswer: 7 },
    { counter: 8, playerAnswer: 8 },
    { counter: 9, playerAnswer: "Fizz" },
    { counter: 10, playerAnswer: "Buzz" },
    { counter: 11, playerAnswer: 11 },
    { counter: 12, playerAnswer: "Fizz" },
    { counter: 13, playerAnswer: 13 },
    { counter: 14, playerAnswer: 14 },
    { counter: 15, playerAnswer: "Fizz Buzz" },
  ];

  let finalGame:ValidatedFizzBuzzGame = validateFizzBuzzGame(playerAnswers);
  console.log(finalGame.playedCorrectly);  
  if (!finalGame.playedCorrectly){
    console.log("the losing turn is ",finalGame.losingTurn?.counter);
  }

}

main();
