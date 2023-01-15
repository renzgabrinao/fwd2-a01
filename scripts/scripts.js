// grab hidden textbox
let reference = document.getElementById("reference");
let textbox = document.getElementById("tell-me-more");

const showTextbox = () => {
  if (reference.value === "magic" || reference.value === "other") {
    textbox.removeAttribute("hidden");
  } else {
    textbox.setAttribute("hidden", "hidden");
  }
  console.log(textbox);
};

reference.addEventListener("onchange", showTextbox);
