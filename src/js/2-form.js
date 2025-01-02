let formData = {
  email: '',
  message: '',
};

const feedbackFormEl = document.querySelector('.feedback-form');
const fillFormFields = () => {
  try {
    if (localStorage.length === 0) {
      return;
    }
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
    formData = formDataFromLS;
  } catch (error) {
    error;
  }
};
fillFormFields();

const onFormFieldChange = event => {
  const formFieldEl = event.target;
  const fielValue = formFieldEl.value;
  const fieldName = formFieldEl.name;
  formData[fieldName] = fielValue;
  //   console.log(formData.email);
  //   console.log(formData.message);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

feedbackFormEl.addEventListener('input', onFormFieldChange);

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
};
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
