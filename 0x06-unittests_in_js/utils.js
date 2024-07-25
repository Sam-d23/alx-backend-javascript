class Utils {
    static calculateNumber(type, a, b) {
	const x = Math.round(a);
	const y = Math.round(b);
	let c = 0;
	switch (type) {
	case 'SUM':
            c = x + y;
            break;
	case 'SUBTRACT':
            c = x - y;
            break;
	case 'DIVIDE':
	    if (y === 0) {
		c = "Error";
	    } else {
		c = x / y;
	    }
	    break;
	}
	return c;
    }
}

module.exports = Utils;
