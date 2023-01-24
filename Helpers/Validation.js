
const ValidateDescription = (description) => {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  let ValidateDescription = '';
  let errorDescription = '';
  let error = false;

  if (format.test(description)) {
    errorDescription = 'Error: ChatGPT has detected special characters';
  }
  
  else if (description === '') {
    errorDescription = 'Error: ChatGPT description is required';
  }

  else if (description.trim() === '') {
    errorDescription = 'Error: ChatGPT description is blank';
  }

  else {
    ValidateDescription = description
  }

  if (errorDescription !== '') {
    error = true;
  }

  return {
    validDescription: ValidateDescription,
    errorDescription: errorDescription,
    error: error
  }
}

exports.ValidateDescription = ValidateDescription;