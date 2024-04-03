/**
  _____        _       
 |  __ \      (_)      
 | |__) |__ _  _  _ __ 
 |  ___// _` || || '__|
 | |   | (_| || || |   
 |_|    \__,_||_||_|   
 * @challenge 7
 * @description 
 * In this challenge you must create the functionality to properly pair/zip together two arrays, and perform operations on these arrays.
 */

/**************
   _____                    _                 _        
  / ____|                  | |               | |       
 | |      ___   _ __   ___ | |_  __ _  _ __  | |_  ___ 
 | |     / _ \ | '_ \ / __|| __|/ _` || '_ \ | __|/ __|
 | |____| (_) || | | |\__ \| |_| (_| || | | || |_ \__ \
  \_____|\___/ |_| |_||___/ \__|\__,_||_| |_| \__||___/
**************/

const group1 = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Charlotte",
  "Elijah",
  "Amelia",
  "James",
  "Ava",
];

const group2 = [
  "William",
  "Sophia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Harper",
  "Mia",
  "Henry",
  "Evelyn",
  "Theodore",
];

const group3 = [
  "William",
  "Sophia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Harper",
  "Mia",
  "Henry",
  "Evelyn",
  "Theodore",
  "Jack",
  "Mila",
  "Aiden",
];

const group1Grouped: AssignedGroupMembers[] = [
  { person: "Liam", groupNumber: 2 },
  { person: "Olivia", groupNumber: 3 },
  { person: "Noah", groupNumber: 1 },
  { person: "Emma", groupNumber: 5 },
  { person: "Oliver", groupNumber: 4 },
];

const group2Grouped: AssignedGroupMembers[] = [
  { person: "William", groupNumber: 2 },
  { person: "Sophia", groupNumber: 1 },
  { person: "Benjamin", groupNumber: 3 },
  { person: "Isabella", groupNumber: 4 },
  { person: "Lucas", groupNumber: 5 },
];

type IPair = [string, string];
type IPairs = Array<IPair>;

type IPartialPair = [undefined, string] | [string, undefined];
type IPartialPairs = Array<IPartialPair>;

type IPairsWithPartialPairs = {
  pairs: IPairs;
  partialPairs: IPartialPairs;
};

type AssignedGroupMembers = {
  person: string;
  groupNumber: number;
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
 * @challenge 7.1
 * @name createPairs
 * @description Create the function `createPairs`, this function will take two arrays of strings each representing a group of people,
 *          and pair a person from group1 with group2. Returning IPairs
 * @assumption
 * - The length of the arrays are the same
 */
function createPairs(group1: string[], group2: string[]): IPairs {
  throw new Error("Function Not Implemented");
}

/**
 * @challenge 7.2
 * @name updatePair
 * @description Create the function `updatePair`, this function will update a specific pair within a IPairs array. This function will take
 *          a IPairs array, an index of the group we wish to update, and the new IPair values.
 */
function updatePair(pairs: IPairs, index: number, newPair: IPair): IPairs {
  throw new Error("Function Not Implemented");
}

/**
 * @challenge 7.2
 * @name removePair
 * @description Create the function `removePair`, this function will remove a specific pair within a IPairs array, using the pairs index.
 *          This function will take a IPairs array, and a index of the group we wish to remove.
 */
function removePair(pairs: IPairs, index: number): IPairs {
  throw new Error("Function Not Implemented");
}

/**
 * @challenge 7.3
 * @name removePairWithoutIndex
 * @description Create the function `removePairWithoutIndex`, this function will remove a specific pair within a IPairs array,
 *          using the pair itself. This function will take a IPairs array, and the pair we wish to remove.
 */
function removePairWithoutIndex(pairs: IPairs, pair: IPair): IPairs {
  throw new Error("Function Not Implemented");
}

/**
 * @challenge 7.4
 * @name joinPairs
 * @description Create the function `joinPairs`, this function will take two arrays of preassigned group memebers and correctly return the pairs.
 *          A `AssignedGroupMembers` is a person with their group number. In this challenge you must join the member from group1 with groupNumber 1
 *          and the member from group2 with groupNumber 1, for all groupNumbers.
 * @assumptions
 * - The two input groups are the same length
 * - each group will have two members. i.e if a member of group1 is assigned to groupNumber 2 then group2 will also have a member assigned
 *          to groupNumber 2
 */
function joinPairs(
  group1: AssignedGroupMembers[],
  group2: AssignedGroupMembers[]
): IPairs {
  throw new Error("Function Not Implemented");
}

/**
 * @challenge 7.5
 * @name createPairsWithPartialPairs
 * @description Create the function `createPairsWithPartialPairs`, this function will take two arrays of strings each representing a group of people,
 *          and pair a person from group1 with group2. If one of the groups is larger than the other we should identify the people that do not have a group.
 * @tips
 * - The input groups may not be the same length
 */
function createPairsWithPartialPairs(
  group1: string[],
  group2: string[]
): IPairsWithPartialPairs {
  throw new Error("Function Not Implemented");
}
