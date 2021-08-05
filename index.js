// Add your functions here
function map(source, callback) {
    const ar = [];

    for (let i = 0; i < source.length; i++) {
        const theElement = source[i];
        ar.push(callback(theElement));
    }
    return ar;
}

function reduce(source, callback, startingPoint) {
    let total;
    if (startingPoint) {
        total = startingPoint;
        for (let i = 0; i < source.length; i++) {
            total = callback(source[i], total);
        }
        return total;
    } else {
        total = source[0];
        for (let i = 1; i < source.length; i++) {
            total = callback(source[i], total);
        }
        return total;
    }
}