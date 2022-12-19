// Assignment 1
const getData = (apiLink) => {
  return new Promise((res, rej) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("No Data Found"));
      }
    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};
getData("articles.json").then((res) => {
  res.length = 5;
  return res;
}).then((res) => {
  for (let i in res) {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = res[i].title;
    let p = document.createElement("p");
    p.textContent = res[i].description;
    div.appendChild(h3);
    div.appendChild(p);
    document.body.appendChild(div);
  }
});

// Assignment 2
fetch("articles.json").then((res) => {
  return res.json();
}).then((res) => {
  res.length = 5;
  return res;
}).then((res) => {
  for (let i in res) {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = res[i].title;
    let p = document.createElement("p");
    p.textContent = res[i].description;
    div.appendChild(h3);
    div.appendChild(p);
    document.body.appendChild(div);
  }
});
