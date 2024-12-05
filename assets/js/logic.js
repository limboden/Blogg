// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const formElement = document.querySelector('form')

function readLocalLightStorage() {
  const lightStorage = localStorage.getItem("lightMode")

  if (lightStorage) {
    const lightMode = JSON.parse(lightStorage) // boolean

  }
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(str) {
  const mode = localStorage.getItem(str);
  if (mode) {
    return JSON.parse(mode)
  } else {
    return []
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(object) {
  localStorage.setItem("blogData", JSON.stringify(object))
}

// ! Use the following function whenever you need to redirect to a different page

formElement.addEventListener('submit', function rP(id) {
  return function () {
    redirectPage(id)
  };
});

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

