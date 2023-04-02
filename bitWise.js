// A greyscale digital image is supplied as a matrix of values between 0 (black) and 255 (white), each being the decimal representation of an 8-bit value. For example: a mid-grey is represented as 127 in decimal and 01111111 in binary; the subsequent value 128, is 10000000 in binary; an example of a 4 pixel digital image is: [[0, 63], [127, 255]] in decimal, or [[00000000, 00111111], [01111111, 11111111]] binary.

function bitSlice(image, plane) {
  const mask = 1 << plane;
  return image.map((row) => row.map((x) => (x & mask ? 1 : 0)));
}
