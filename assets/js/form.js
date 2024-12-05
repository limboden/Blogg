// TODO: Create a variable that selects the form element
const formElement = document.querySelector("form");
const usernameElement = document.querySelector("#username");
const titleElement = document.querySelector("#title");
const contentElement = document.querySelector("#content");
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(event) {
  event.preventDefault();

  const formDetails = {
    username: usernameElement.value,
    title: titleElement.value,
    content: contentElement.value,
  }

  localStorage.setItem('formDetails', JSON.stringify(formDetails))
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener('submit', handleFormSubmission)