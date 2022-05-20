function enable_submit(){
  document.getElementById("email-form-button").submit();
}

window.onload = function set_theme() {
  var hour = new Date().getHours();
  console.log('It\'s '+hour)
  if(hour < 7 || hour > 19) {
    dark_mode();
  }
}

function toggle_theme() {
  document.getElementById("dark_mode_button").onclick(dark_mode());
}

function dark_mode(){

  const dark_foregrounds = Array.from(document.querySelectorAll(".uk-dark"));
  dark_foregrounds.forEach(element => {
    element.classList.toggle("uk-light");
  });

  const light_backgrounds =Array.from(document.querySelectorAll(".uk-background-muted"));
  light_backgrounds.forEach(element => {
    element.classList.toggle("uk-background-secondary");
  });

  

  console.log("Toggle dark/light")
}
