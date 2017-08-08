let Sert = {};

// Primitive types

/**
 * Assert subject to be a string
 * @param {string} subject Assertion subject
 * @param {string} [message] Error message for failed assertions
 * @return {string} Subject
 */
Sert.string = (subject, message = 'Value is not a string.') => {
    if ((typeof subject) !== 'string') {
        throw new Error(message);
    }
    return subject;
};

/**
 * Assert subject to be a number
 * @param {number} subject Assertion subject
 * @param {string} [message] Error message for failed assertions
 * @return {number} Subject
 */
Sert.number = (subject, message = 'Value is not a number.') => {
    if ((typeof subject) !== 'number') {
        throw new Error(message);
    }
    return subject;
};

/**
 * Assert subject to be an object
 * @param {object} subject Assertion subject
 * @param {string} [message] Error message for failed assertions
 * @return {object} Subject
 */
Sert.object = (subject, message = 'Value is not an object.') => {
    if ((typeof subject) !== 'object' || Array.isArray(subject) || subject === null || subject === undefined) {
        throw new Error(message);
    }
    return subject;
};

/**
 * Assert subject to be a function
 * @param {object} subject Assertion subject
 * @param {string} [message] Error message for failed assertions
 * @return {function} Subject
 */
Sert.func = (subject, message = 'Value is not a function.') => {
    if ((typeof subject) !== 'function') {
        throw new Error(message);
    }
    return subject;
};

/**
 * Assert subject to be an array
 * @param {array} subject Assertion subject
 * @param {string} [message] Error message for failed assertions
 * @return {array} Subject
 */
Sert.array = (subject, message = 'Value is not an array.') => {
    if (!Array.isArray(subject)) {
        throw new Error(message);
    }
    return subject;
};

/**
 * Assert subject to be a boolean
 * @param {boolean} subject Assertion subject
 * @param {string} [message] Error message for failed assertions
 * @return {boolean} Subject
 */
Sert.bool = (subject, message = 'Value is not a boolean.') => {
    if (subject !== true && subject !== false) {
        throw new Error(message);
    }
    return subject;
};

// Comparison

/**
 * Assert subject1 to be equal (===) subject2
 * @param {mixed} subject1 Subject 1
 * @param {mixed} subject2 Subject 2
 * @param {string} [message] Error message for failed assertions
 */
Sert.equal = (subject1, subject2, message = 'Subjects are not equal.') => {
    if (subject1 !== subject2) {
        throw new Error(message);
    }
};

export default Sert;
