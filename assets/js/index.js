const btn = document.getElementById("btn");
const photo = document.getElementById("photo");

btn.addEventListener("click", () => {
  const request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      const url = JSON.parse(request.responseText).message;
      photo.src = url;
    }
  };

  request.open("GET", "https://dog.ceo/api/breeds/image/random");
  request.send();
});
