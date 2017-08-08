import 'core-js/fn/array/is-array';

let Sert = {};

function throwError(error) {
    if ((typeof error) === 'string') {
        throw new Error(error);
    }

    let err = new Error(error.message || 'Invalid value');
    if (error.status) {
        err.status = error.status;
    }
    throw err;
}

// Primitive types

/**
 * Assert subject to be a string
 * @param {string} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {string} Subject
 */
Sert.string = (subject, error = 'Value is not a string.') => {
    if ((typeof subject) !== 'string') {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject to be a number
 * @param {number} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {number} Subject
 */
Sert.number = (subject, error = 'Value is not a number.') => {
    if ((typeof subject) !== 'number') {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject to be an object
 * @param {object} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {object} Subject
 */
Sert.object = (subject, error = 'Value is not an object.') => {
    if ((typeof subject) !== 'object' || Array.isArray(subject) || subject === null || subject === undefined) {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject to be a function
 * @param {object} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {function} Subject
 */
Sert.func = (subject, error = 'Value is not a function.') => {
    if ((typeof subject) !== 'function') {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject to be an array
 * @param {array} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {array} Subject
 */
Sert.array = (subject, error = 'Value is not an array.') => {
    if (!Array.isArray(subject)) {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject to be a boolean
 * @param {boolean} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {boolean} Subject
 */
Sert.bool = (subject, error = 'Value is not a boolean.') => {
    if (subject !== true && subject !== false) {
        throwError(error);
    }
    return subject;
};

// Comparison

/**
 * Assert subject1 to be equal (===) subject2
 * @param {mixed} subject1 Subject 1
 * @param {mixed} subject2 Subject 2
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} First subject
 */
Sert.equal = (subject1, subject2, error = 'Subjects are not equal.') => {
    if (subject1 !== subject2) {
        throwError(error);
    }
    return subject1;
};

export default Sert;
