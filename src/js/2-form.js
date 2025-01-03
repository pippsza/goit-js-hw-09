let formData = {
  email: '',
  message: '',
};

const feedbackFormEl = document.querySelector('.feedback-form');
const fillFormFields = () => {
  try {
    const formDataFromLS = localStorage.getItem('feedback-form-state');
    if (!formDataFromLS) {
      return;
    }
    const parsedData = JSON.parse(formDataFromLS);

    for (const key in parsedData) {
      feedbackFormEl.elements[key].value = parsedData[key];
    }
    formData = parsedData;
  } catch (error) {
    console.error(error);
  }
};
fillFormFields();

const onFormFieldChange = event => {
  const formFieldEl = event.target;
  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;
  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

feedbackFormEl.addEventListener('input', onFormFieldChange);

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  let isFormValid = true;
  for (const key in formData) {
    if (formData[key].trim() === '') {
      isFormValid = false;
      break;
    }
  }

  if (!isFormValid) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {
    email: '',
    message: '',
  };
};

feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
