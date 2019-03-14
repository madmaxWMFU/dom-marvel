const menuItem = document.querySelector(".menu-wrap-list-item");

let drawHero = arrayHero => {
    let hero = arrayHero[0];
    console.log(hero);
    let heroName = hero.name;
    let heroImg = `${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`;
    console.log(heroImg);
    let heroComics = "";
    hero.urls.forEach((val) => {
    	if(val.type == "comiclink")
    		heroComics = val.url;
    }) 

    let heroWrap = `
		<div class="hero-wrap">
			<div class="card-thumb-frame">
				<img src="${heroImg}" />
			</div>
			<div class="card-body">
			    <p class="card-body__headline">${heroName}</p>
			</div>
			<div class="comic-url">
				<a class="card-body__comicurl" href="${heroComics}" target="_blanck">Comics zone</a>
			</div>
		</div>`;

	document.querySelector(".main-content").insertAdjacentHTML("beforeEnd", heroWrap);
}


menuItem.addEventListener("click", e => {
    switch (e.target.dataset.href) {
        case "home":
			break;
        case "heros":
			let arr = []
			while(arr.length < 10){
			    var number = Math.floor((Math.random() * 1491) + 1);
			    if(arr.indexOf(number) === -1) 
			      str = `http://gateway.marvel.com/v1/public/characters?ts=1&limit=1&offset=${number}&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702`;
			      arr.push(str);
			}

			Promise.all(arr.map(url =>
			    fetch(url).then(resp => resp.json())
			)).then(json => {
			    json.map(item => drawHero(item.data.results))
			})

            break;
        case "comics":
			break;
        default:
            break;
    }	
});
