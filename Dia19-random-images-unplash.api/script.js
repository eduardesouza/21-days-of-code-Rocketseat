dayNightTheme = () => {
    let date = new Date();
    let hour = date.getHours();
  
    if(hour >= 7 && hour < 19){
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    else{
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }
  
  window.addEventListener('load', dayNightTheme);
  
  document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key == "Enter")
      apiRequest();
  });
  
  document.querySelector("#search").addEventListener("click", () => {
      apiRequest();
  });
  
  apiRequest = () => {
  
    document.querySelector("#grid").textContent = "";
  
    const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
  
    fetch(url)
  
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
  
     .then(data => {
        loadImages(data);
     })
  
     .catch(error => console.log(error));   
  }
  
  loadImages = (data) => {
    for(let i = 0;i < data.results.length;i++){
      let image = document.createElement("div");
      image.className = "img";
      image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
      image.addEventListener("dblclick", function(){
        window.open(data.results[i].links.download, '_blank');
      })
      document.querySelector("#grid").appendChild(image);
    }
  }

// const input = document.getElementById("input");
// const grid = document.getElementByClassName("grid")[0];

// window.addEventListener("load", dayNightMode);

// input.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") loadImg();
// });

// function loadImg() {
//   removeImages();

//   const url = "https://api.unsplash.com/search/photos?query='+input.value+'&per_page=9&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

//   fetch(url)
  
//   .then((response) => {
//     console.log(response);
// //     if(response.ok)
// //     return response.json();
// //     else 
// //    alert(response.status)
//   });

//   .then(data => {
//     const imageNodes = [];
//     for(let i = 0; i < data.results.length;i++){
//         imageNodes[i] = document.createElement('div');
//         imageNodes[i].className = 'img';
//         imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
//         imageNodes[i].addEventListener('dblclick', function(){
//             window.open(data.results[i].links.download,'_blank');
//         })
//         grid.appendChild(imageNodes[i]);
//     }
//   })
// }

// function removeImages() {
//   grid.innerHTML = "";
// }

// function dayNightMode() {
//   const date = new Date();
//   const hour = date.getHours();

//   if (hour >= 7 && hour <= 19) {
//     document.body.style.backgroundColor = "whitesmoke";
//     document.body.style.color = "black";
//   } else {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   }
// }
