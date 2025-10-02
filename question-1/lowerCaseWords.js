'use strict';
//loweCaseWords function -> 1. take mixed array 2.return promise(resolve/reject)
// 3.filter non-string 4.lowerCase remaining
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            return reject(new Error("Input must be an array"));
        }

        const words = mixedArray
            .filter(item => typeof item === 'string')
            .map(str => str.toLowerCase());

        if (words.length > 0) {
            resolve(words);
        } else {
            reject(new Error("No string values found in the array"));
        }
    });
};

//Test
lowerCaseWords(['PIZZA', 10, true , 25, false, 'Wings'])
    .then(result => console.log("Q1 result:", result))
    .catch(error => console.error("Q1 error:", error.message));

module.exports = { lowerCaseWords };