import { tester } from "./tester";

// what we already have
const _reductions = ["S->L=R", "S->R", "R->L", "L->*R", "L->a"];
const _table = {
	"=": [null, null, "s-6", null, null, "r-5", null, "r-3", "r-4", null, null, null, null, null],
	"*": ["s-4", null, null, null, "s-4", null, "s-11", null, null, null, null, "s-11", null, null],
	a: ["s-5", null, null, null, "s-5", null, "s-12", null, null, null, null, "s-12", null, null],
	$: [null, "accept", "r-3", "r-2", null, "r-5", null, "r-3", "r-4", "r-3", "r-1", null, "r-5", "r-4"],
	S: ["g-1", null, null, null, null, null, null, null, null, null, null, null, null],
	L: ["g-2", null, null, null, "g-7", null, "g-9", null, null, null, null, "g-9", null, null],
	R: ["g-3", null, null, null, "g-8", null, "g-10", null, null, null, null, "g-13", null, null],
};

// what we need to check
const _inputString = "a=a*a";
console.log("");
console.log({ input: _inputString });

// passing resources to the algorithm
const accepted = tester(_table, _reductions, _inputString);

// displaying output
console.log(accepted ? "Input accepted!" : "Not accepted...");

console.log("");
