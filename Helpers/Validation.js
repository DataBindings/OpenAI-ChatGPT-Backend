
const ValidateDescription = (description) => {
  const descriptionToValidate = description.replace(/[^a-zA-Z0-9]/g, '')
  let errorDescription = '';
  let error = false;
  
  if (descriptionToValidate === '') {
    errorDescription = 'Error: ChatGPT description is required';
  }
  else if (descriptionToValidate.trim() === '') {
    errorDescription = 'Error: ChatGPT description is blank';
  }

  if (errorDescription !== '') {
    error = true;
  }

  return {
    validDescription: descriptionToValidate,
    errorDescription: errorDescription,
    error: error
  }
}

exports.ValidateDescription = ValidateDescription;