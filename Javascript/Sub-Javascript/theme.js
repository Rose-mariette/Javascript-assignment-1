let count = 0;

// function increaseCount(){
//     count++;
//     document.getElementById('count').innerHTML = count;

// }
//         function decreaseCount() {
//     count--;
//     document.getElementById('count').innerHTML = count;

// }
function increaseCount() {
  if (count < 20) {
    count++;
    document.getElementById("count").innerHTML = count;
  } else {
    alert(`You have reached the maximum count of ${count}`);
    // alert("You have reached the maximum count of 20!");
    // document.getElementById("count").innerHTML ="20"
  }
}
function decreaseCount() {
  if (count > 0) {
    count--;
    document.getElementById("count").innerHTML = count;
  }
}
function reset() {
  //    if (count > 0);

  count = 0;

  document.getElementById("count").innerHTML = count;
}

let invalid = null;

function startAuto() {
  if (invalid !== null) return; // Prevent multiple intervals
  invalid = setInterval(() => {
    if (count < 20) {
      count++;
      document.getElementById("count").innerHTML = count;
    } else {
      stopAuto();
      alert(`You have reached the maximum count of ${count}!`);
    }
  }, 1000);
}

function stopAuto() {
  // Stop the auto-increment
  clearInterval(invalid); // Clear the interval
  invalid = null; // Reset the invalid variable
}

const themeToggleButton = document.getElementById("themeToggleButton");
const themeIcon = themeToggleButton.querySelector("i");


function setTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme); 
    if (theme === 'dark') {
        themeIcon.classList.replace("fa-moon", "fa-sun"); 
      } else {
          themeIcon.classList.replace("fa-sun", "fa-moon"); 
      }
    }
    

document.getElementById('themeToggleButton').addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newTheme);
  
});

setTheme(localStorage.getItem('theme') || 'light');
 
