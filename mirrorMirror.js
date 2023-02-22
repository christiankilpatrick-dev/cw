// You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...

// More info
// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

const zero = (a) => (a ? a(0) : 0);
const one = (a) => (a ? a(1) : 1);
const two = (a) => (a ? a(2) : 2);
const three = (a) => (a ? a(3) : 3);
const four = (a) => (a ? a(4) : 4);
const five = (a) => (a ? a(5) : 5);
const six = (a) => (a ? a(6) : 6);
const seven = (a) => (a ? a(7) : 7);
const eight = (a) => (a ? a(8) : 8);
const nine = (a) => (a ? a(9) : 9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const dividedBy = (a) => (b) => Math.floor(b / a);
const times = (a) => (b) => a * b;
