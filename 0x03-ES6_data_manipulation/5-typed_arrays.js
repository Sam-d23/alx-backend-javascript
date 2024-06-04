export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const new_view = new DataView(buffer, 0, length);
  const array = new Int8Array(buffer);
  array[position] = value;
  return new_view;
}
