const mergeSortedArrs = require('./index');
const even = [2, 4, 6, 8];
const odd = [3, 5, 11, 13, 15];

test('Reverse function exists', () => {
    expect(mergeSortedArrs).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(mergeSortedArrs(even, odd)).toEqual([2, 3, 4, 5, 6, 8, 11, 13, 15]);
});
