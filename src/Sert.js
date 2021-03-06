import 'core-js/fn/array/is-array';
import 'core-js/fn/array/includes';

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
 * Assert subject (or subject length for arrays) to be above boundry
 * @param {number} boundry Boundry for comparison
 * @param {mixed} subject Subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} Subject
 */
Sert.above = (boundry, subject, error = 'Value is not above boundry.') => {
    if ((Array.isArray(subject) && !(subject.length > boundry)) ||
        (!Array.isArray(subject) && !(subject > boundry))
    ) {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject (or subject length for arrays) to be at least boundry
 * @param {number} boundry Boundry for comparison
 * @param {mixed} subject Subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} Subject
 */
Sert.atLeast = (boundry, subject, error = 'Value is not at least boundry.') => {
    if ((Array.isArray(subject) && !(subject.length >= boundry)) ||
        (!Array.isArray(subject) && !(subject >= boundry))
    ) {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject (or subject length for arrays) to be below boundry
 * @param {number} boundry Boundry for comparison
 * @param {mixed} subject Subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} Subject
 */
Sert.below = (boundry, subject, error = 'Value is not below boundry.') => {
    if ((Array.isArray(subject) && !(subject.length < boundry)) ||
        (!Array.isArray(subject) && !(subject < boundry))
    ) {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject (or subject length for arrays) to be at most boundry
 * @param {number} boundry Boundry for comparison
 * @param {mixed} subject Subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} Subject
 */
Sert.atMost = (boundry, subject, error = 'Value is not at most boundry.') => {
    if ((Array.isArray(subject) && !(subject.length <= boundry)) ||
        (!Array.isArray(subject) && !(subject <= boundry))
    ) {
        throwError(error);
    }
    return subject;
};

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

/**
 * Assert subject to be among the elements in list
 * @param {array} list List
 * @param {mixed} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} Subject
 */
Sert.in = (list, subject, error = 'Subject is not in list.') => {
    if (!list.includes(subject)) {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject to not be among the elements in list
 * @param {array} list List
 * @param {mixed} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} Subject
 */
Sert.notIn = (list, subject, error = 'Subject is in list.') => {
    if (list.includes(subject)) {
        throwError(error);
    }
    return subject;
};

function isEmpty(subject) {
    return Boolean(
        subject === null
        || subject === undefined
        || (Array.isArray(subject) && subject.length === 0)
        || ((typeof subject) === 'object' && Object.keys(subject).length === 0)
    );
}

/**
 * Assert subject to be empty ({}, [], null or undefined)
 * @param {mixed} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} Subject
 */
Sert.empty = (subject, error = 'Subject is not empty.') => {
    if (!isEmpty(subject)) {
        throwError(error);
    }
    return subject;
};

/**
 * Assert subject to not be empty ({}. [], null, undefined)
 * @param {mixed} subject Assertion subject
 * @param {string|object} [error] Error message (string) or props (object) for failed assertions
 * @param {string} [error.message] Error message
 * @param {number} [error.status] Error status, for http requests
 * @return {mixed} Subject
 */
Sert.notEmpty = (subject, error = 'Subject is empty.') => {
    if (isEmpty(subject)) {
        throwError(error);
    }
    return subject;
};

export default Sert;
