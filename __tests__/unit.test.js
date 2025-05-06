// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// phone number
test('valid phone number: (111) 111-1111', () => {
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});
test('valid phone number: 111-111-1111', () => {
  expect(isPhoneNumber('111-111-1111')).toBe(true);
});
test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number: asd-fvk-wene', () => {
  expect(isPhoneNumber('asd-fvk-wene')).toBe(false);
});

// email 
test('valid email: prachi@gmail.com', () => {
  expect(isEmail('prachi@gmail.com')).toBe(true);
});
test('valid email: prachi@ucsd.org', () => {
  expect(isEmail('prachi@ucsd.org')).toBe(true);
});
test('invalid email: prachi@@gmail.com', () => {
  expect(isEmail('prachi@@gmail.com')).toBe(false);
});
test('invalid email: prachi@gmail', () => {
  expect(isEmail('prachi@gmail')).toBe(false);
});

//  password 
test('valid password: Prachi1234', () => {
  expect(isStrongPassword('Prachi1234')).toBe(true);
});
test('valid password: p_h9', () => {
  expect(isStrongPassword('p_h9')).toBe(true);
});
test('invalid password: 13prachi', () => {
  expect(isStrongPassword('13prachi')).toBe(false);
});
test('invalid password: p', () => {
  expect(isStrongPassword('p')).toBe(false);
});

// date
test('valid date: 1/1/2025', () => {
  expect(isDate('1/1/2025')).toBe(true);
});
test('valid date: 11/11/2025', () => {
  expect(isDate('11/11/2025')).toBe(true);
});
test('invalid date: 2025/01/01', () => {
  expect(isDate('2025/01/01')).toBe(false);
});
test('invalid date: 1-1-2025', () => {
  expect(isDate('1-1-2025')).toBe(false);
});

// color
test('valid hex color: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('valid hex color: 123ABC', () => {
  expect(isHexColor('123ABC')).toBe(true);
});
test('invalid hex color: #2352', () => {
  expect(isHexColor('#2352')).toBe(false);
});
test('invalid hex color: zzzyyy', () => {
  expect(isHexColor('zzzyyy')).toBe(false);
});