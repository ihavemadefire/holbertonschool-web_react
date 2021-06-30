
const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');

test('Year returns 2021', () => {
  expect(getFullYear()).toBe("2021");
})

test('getFooterCopy works for both true and false', () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('getLatestNotification works', () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})
