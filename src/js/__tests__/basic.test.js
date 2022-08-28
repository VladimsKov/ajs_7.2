import FormatNumbers from '../basic';

test.each([
  ['8 (927) 123-45-67', '+79271234567'],
  ['+7 960 987 65 43', '+79609876543'],
  ['+86 987 654 3210', '+869876543210'],
])('format %s to be %s', (value, expected) => {
  expect(FormatNumbers.formatPhoneNumbers(value)).toBe(expected);
});
