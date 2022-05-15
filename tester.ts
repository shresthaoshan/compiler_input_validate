export const tester = (table: { [key: string]: string[] }, reductions: string[], inputString: string): boolean => {
	console.log("");
	// initialize parsing stack
	const stack = ["0"];
	// prepare input symbols
	let _input = [...inputString.split(""), "$"];
	while (_input.length) {
		// fetch action from given table with first character
		// of input and last number of parsing stack
		const action = table[_input[0]][Number(stack[stack.length - 1])];

		// logging pass info
		console.log({ stack: stack.join(""), input: _input.join(""), action });

		// if an action does not exist, throw error as not accepted.
		if (!action) return false;
		if (action === "accept") return true;

		// perform predicated action
		const [actionType, actionTarget] = action.split("-");
		if (actionType === "s") {
			/* shift action */
			const popped = _input.shift();
			stack.push(popped);
			stack.push(actionTarget);
		} else if (actionType === "r") {
			/* reduction action */
			const [_reducHead, _reducBody] = reductions[Number(actionTarget) - 1].split("->");
			const reducLength = _reducBody.length * 2;
			stack.splice(stack.length - reducLength, reducLength);
			const determiner = stack[stack.length - 1];
			stack.push(_reducHead);
			// goto action
			const [gotoHead, gotoTarget] = table[_reducHead][Number(determiner)]?.split("-") || [,];
			if (gotoHead !== "g") return false;
			stack.push(gotoTarget);
		}
	}

	return false;
};
