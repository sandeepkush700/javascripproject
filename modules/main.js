// import { message, user, test} from "./library.js";

// console.log(message)

// console.log(user())

// let a = new test()

import * as fxn from "./library.js";
console.log(fxn.message)
console.log(fxn.user())

let a = new fxn.test()
 import { show  } from "./bridge.js";
 console.log(show())