const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');

test('Year returns 2021', () => {
  expect(getFullYear().toString()).toBe("2021");
})

test('getFooterCopy works for true ', () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
})

test('getFooterCopy works for false', () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})


test('getLatestNotification works', () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})
