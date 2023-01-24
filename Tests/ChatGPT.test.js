const { chatGPT } = require('../OpenAI/ChatGPT.js');
const { ValidateDescription } = require('../Helpers/Validation.js');

jest.setTimeout(300000);

const description = 'Write a detailed short story of Batman fighting Joker on a commet heading towards earth';

// Validation.js
test('Validation: Description has special characters', async () => {
  const validate = ValidateDescription('!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?');
  expect(validate.validDescription).toBe('');
  expect(validate.errorDescription).toBe('Error: ChatGPT has detected special characters');
  expect(validate.error).toBe(true);
});

test('Validation: Description is empty', async () => {
  const validate = ValidateDescription('');
  expect(validate.validDescription).toBe('');
  expect(validate.errorDescription).toBe('Error: ChatGPT description is required');
  expect(validate.error).toBe(true);
});

test('Validation: Description is blank', async () => {
  const validate = ValidateDescription(' ');
  expect(validate.validDescription).toBe('');
  expect(validate.errorDescription).toBe('Error: ChatGPT description is blank');
  expect(validate.error).toBe(true);
});

test('Validation: Description is valid', async () => {
  const validate = ValidateDescription(description);
  expect(validate.validDescription).toBe(description);
  expect(validate.errorDescription).toBe('');
  expect(validate.error).toBe(false);
});

// chatGPT.js
test('ChatGPT: Description has special characters', async () => {
  const apiData = await chatGPT('!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?');
  expect(apiData.validDescription).toBe('');
  expect(apiData.errorDescription).toBe('Error: ChatGPT has detected special characters');
  expect(apiData.error).toBe(true);
});

test('ChatGPT: Description is empty', async () => {
  const apiData = await chatGPT('');
  expect(apiData.validDescription).toBe('');
  expect(apiData.errorDescription).toBe('Error: ChatGPT description is required');
  expect(apiData.error).toBe(true);
});

test('ChatGPT: Description is blank', async () => {
  const apiData = await chatGPT('     ');
  expect(apiData.validDescription).toBe('');
  expect(apiData.errorDescription).toBe('Error: ChatGPT description is blank');
  expect(apiData.error).toBe(true);
});

test('ChatGPT: Return from OpenAI is valid', async () => {
  const apiData = await chatGPT(description);
  expect(apiData.status).toBe(200);
  expect(typeof apiData.response[0].text).toBe("string");
});