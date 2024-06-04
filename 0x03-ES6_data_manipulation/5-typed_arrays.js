export default function createInt8TypedArray(length, position, value) {
	if (position < 0 || position >= length) {
		throw new Error('Position outside range');
        }
	let buffer = new ArrayBuffer(length);
	let int8Array = new int8Array(buffer);
	int8Array[position] = value;
	return buffer;
}
