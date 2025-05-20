function capitalize (str){
    try{
        if(typeof str !== 'string' || str.length === 0) {
            throw new Error('Invalid input: must be a string.');
        }
        return str[0].toUpperCase() + str.slice(1);
    }catch (error){
        return `capitalize() error: ${error.message}`;
    }
}

function reverse (str) {
    try {
        if (typeof str !== 'string'){
            throw new Error('Invalid input: Not a String');
        }
        return str.split('').reverse().join('');
}catch(error){
        return `reverse() error: ${error.message}`
    }
}

function contains(str, substr){
    try{
        if (typeof str !== 'string' || typeof substr !== 'string'){
            throw new Error('Both arguments must be string');
        }
        return str.includes(substr);
    }catch(error){
        return `contains() error: ${error.message}`;
    }
}

module.exports = {
    capitalize,
    reverse,
    contains
};