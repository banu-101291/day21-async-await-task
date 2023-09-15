let card = document.getElementById("card");
let url= "https://pokeapi.co/api/v2/ability/7/";
let data = async() =>(await fetch(url)).json();
let btn = getElementById('result');


btn.onclick= () =>{
        data().then((res) => {
        let img = document.createElement('img');
        img.src = res(0).url;
        card.appendChild(img);
        })  
        .catch((err) => {
            alert(err);

    })
}


