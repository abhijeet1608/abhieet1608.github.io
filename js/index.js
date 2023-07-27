const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
function clearAll() {
    const joke = document.querySelector('.joke-content');
    joke.innerHTML = '';
    
  }
const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];

function showJoke() {
    // Value should be a string representing the joke
    const randomJokeText = getRandomData('jokes');
    
    const jokeContainer = document.querySelector('.joke-content');
    const newJoke = document.createElement('p');
    newJoke.textContent = randomJokeText;
    
    clearAll();
    
    // Add the new img to the document
    jokeContainer.appendChild(newJoke);
  }

function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }

  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
    const data = {
      
      jokes
      
    };
  
const form = document.getElementById("myForm");
const submittedDataDiv = document.getElementById("submittedData");
    
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
      // Get form data
      const formData = new FormData(form);
      const firstName = formData.get("firstname");
      const lastName = formData.get("lastname");
      const email = formData.get("emailid");
    
      // Save data to "database" (localStorage)
        const newData = {
        firstName: firstName,
        lastName: lastName,
        email: email
        };
    
      // Check if data already exists in localStorage
      let storedData = localStorage.getItem("formData");
      storedData = storedData ? JSON.parse(storedData) : [];
    
      // Add the new data to the existing data
      storedData.push(newData);
    
      // Save the updated data to localStorage
      localStorage.setItem("formData", JSON.stringify(storedData));
    
      // Display the submitted data on the page
      displaySubmittedData(storedData);
    
      // Clear the form fields
      form.reset();
    });
    
    function displaySubmittedData(data) {
      // Clear the previous data
      submittedDataDiv.innerHTML = "";
    
      // Display the submitted data in a list
      const ul = document.createElement("ul");
      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.firstName} ${item.lastName} - ${item.email}`;
        ul.appendChild(li);
      });
    
      submittedDataDiv.appendChild(ul);
    }
    
    // On page load, display any existing submitted data
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      displaySubmittedData(JSON.parse(storedData));
    }

