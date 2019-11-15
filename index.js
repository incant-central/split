'use strict';

const help = "Takes a string `subject` or an array `[subject delimiter]` and outputs an array. Splits on whitespace when no delimiter is given.";

function split(input) {
    if (typeof input === 'string') return split([ input ]);
    if (Array.isArray(input)) {
        const [ subject, delim = /\s+/g ] = input;
        if (typeof subject === 'string') return subject.split(delim);
        throw new SyntaxError('Invalid input');
    }
}

split.study = () => help;

module.exports = split;
