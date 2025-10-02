'use strict';

//Method 1:resolvedPromise that is similar to
// delayedSuccess and resolves a message after a timeout of 500ms.
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};

// Method2: rejectedPromise that is similar to
// delayedException and rejects an error message after a timeout of
// 500ms.
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
};

// Call both promises separately and handle results
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

//Check More detailed
// console.time("ResolvedPromise");
//
// resolvedPromise()
//     .then(result => {
//         console.timeEnd("ResolvedPromise"); // logs how long it took
//         console.log(result);
//     });

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));