import {
  padLeadingZeros, decimToMeters, hectoToKilos, pkmnColor,
} from '.';

test('returns a string', () => {
  const res = padLeadingZeros(3, 4);
  expect(typeof res === 'string').toBe(true);
});

test('returns a string of size length', () => {
  const size = 4;
  const res = padLeadingZeros(23.2, size);
  expect(res.length).toBe(size);
});

test('returns a string', () => {
  const res = decimToMeters(3);
  expect(typeof res === 'string').toBe(true);
});

test('returns a value with units in meters', () => {
  const res = decimToMeters(2);
  expect(res.includes('m')).toBe(true);
});

test('returns a string', () => {
  const res = hectoToKilos(3);
  expect(typeof res === 'string').toBe(true);
});

test('returns a value with units in meters', () => {
  const res = hectoToKilos(2);
  expect(res.includes('kg')).toBe(true);
});
