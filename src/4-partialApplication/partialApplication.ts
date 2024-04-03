/**
  _____              _    _         _                          _  _              _    _               
 |  __ \            | |  (_)       | |    /\                  | |(_)            | |  (_)              
 | |__) |__ _  _ __ | |_  _   __ _ | |   /  \    _ __   _ __  | | _   ___  __ _ | |_  _   ___   _ __  
 |  ___// _` || '__|| __|| | / _` || |  / /\ \  | '_ \ | '_ \ | || | / __|/ _` || __|| | / _ \ | '_ \ 
 | |   | (_| || |   | |_ | || (_| || | / ____ \ | |_) || |_) || || || (__| (_| || |_ | || (_) || | | |
 |_|    \__,_||_|    \__||_| \__,_||_|/_/    \_\| .__/ | .__/ |_||_| \___|\__,_| \__||_| \___/ |_| |_|
                                                | |    | |                                            
                                                |_|    |_|                                            
 * @challenge 4
 * @description 
 * In this challenge you are to use partial application to implment custom logging functionality.
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
/**
 * @name logger
 * @description our base logger that console logs
 * @helper
 */
export const logger = (msg: string) => {
  console.log(msg);
};

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
 * @challenge 4.1
 * @name customLogger
 * @description Implement and type annotate the `customLogger` function, this function will perform the same behaviour as the `logger` function
 *      but will allow us to pass in custom logging function to handle our message.
 * @tips
 * - These custom logging functions only need to handle a string
 * @returns void
 */
function customLogger(msg: string, loggingFunction: (arg:string)=>void) {
  loggingFunction(msg);
}

/**
 * @challenge 4.2
 * @name customLoggerFactory
 * @description Implement and type annotate the `customLoggerFactory` function, this function will generate a new logger which can be used to log messages
 * @returns A new logger
 */
function customLoggerFactory(loggingFunction:(msg:string) => void):(msg:string)=>void {
  return function (msg:string):void {
    loggingFunction(msg);
  }
}

/**
 * @challenge 4.3
 * @name errorLogger
 * @description Using your created `customLoggerFactory` generate an errorLogger that uses console.error
 */
const errorLogger = customLoggerFactory(console.error);

function main() {
  /**
   * Main function gets executed on `yarn partialApplication` or `npm run partialApplication`
   */
  errorLogger("This is Error");
}

main();
