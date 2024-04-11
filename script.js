// Android VS Apple

// variables to save time
theAndroidBtn = document.getElementById("android-btn");
theAppleBtn = document.getElementById("apple-btn");
// Event Listener
theAndroidBtn.addEventListener("click", androidBtnClicked);
theAppleBtn.addEventListener("click", appleBtnClicked);
// Event Function
function androidBtnClicked() {
  // Input
  var explore = document.getElementById("explore-link");
  var theHtml = document.getElementById("the-html");
  // Output
  explore.href = "https://www.android.com/";
  explore.style.backgroundColor = "#a4c93b";
  explore.innerHTML = "Android Home";
  theAndroidBtn.classList.add("active");
  theAppleBtn.classList.remove("active");
  document.getElementById("android-vs-apple").src = "images/Android-Logo.jpg";
  document.getElementById("the-body").style.backgroundColor = "white";
  theHtml.style.backgroundColor = "#a4c93b";
  theHtml.style.fontFamily = "'Roboto', sans-serif";
}
function appleBtnClicked() {
  // Input
  var explore = document.getElementById("explore-link");
  // Output
  explore.href = "https://www.apple.com/";
  explore.style.backgroundColor = "#b6bcca";
  explore.innerHTML = "Apple Home";
  document.getElementById("the-html").style.fontFamily =
    "'Brygada 1918', serif";
  document.getElementById("the-html").style.backgroundColor = "#cabfb6";
  document.getElementById("the-body").style.backgroundColor = "#b6bcca";
  theAppleBtn.classList.add("active");
  theAndroidBtn.classList.remove("active");
  document.getElementById("android-vs-apple").src = "images/Apple-Logo.jpg";
}
