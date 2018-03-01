function mergeSortedArrs(a, b) {
    if (!Array.isArray(a)) throw new Error('arguments must be an arrays!!!');
    if (!Array.isArray(b)) throw new Error('arguments must be an arrays!!!');
    var longer, shorter;

    if (a.length < b.length) {
        longer = b;
        shorter = a;
    } else {
        longer = a;
        shorter = b;
    }

    let shortTail = shorter.length - 1;
    let longInd = longer.length - 1;
    if (shortTail <= 0 || longInd <= 0) throw new Error('Arrays musst not be empty');
    let longTail = longer.length + shorter.length - 1;

    for (let i = shortTail; i >= 0; i--) {

        if (longInd < 0) break;
        let longVal = longer[longInd];
        let shortVal = shorter[i];

        if (typeof longVal !== 'number') throw new Error('Array contains non integer value');
        if (typeof shortVal !== 'number') throw new Error('Array contains non integer value');

        if (shortVal > longVal) {
            longer[longTail] = shortVal;
            longTail--;
            continue;

        } else {
            longer[longTail] = longVal;
            longTail--;
            longInd--;
            i++;
        }
    }

    for (let i = longTail; i >= 0; i--) {
        let shortVal = shorter[i];
        if (typeof shortVal !== 'number') throw new Error('Array contains non integer value');
        longer[i] = shortVal;
    }
    return longer;
}

module.exports = mergeSortedArrs;