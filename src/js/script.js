function enable_send_email(){
  document.getElementById("email-form-button").disabled = false;
}

function set_theme() {
  const is_dark = window.matchMedia("(prefers-color-scheme: dark)").matches
  if(is_dark) {
    dark_mode()
    console.log('Dark mode')
  }
}

function toggle_theme() {
  $("#dark_mode_button").click(function(){
      dark_mode();
  }); 
}

function dark_mode(){
  $(".uk-dark").toggleClass("uk-light");
  $(".uk-background-muted").toggleClass("uk-background-secondary");
  console.log("Toggle dark/light")
}