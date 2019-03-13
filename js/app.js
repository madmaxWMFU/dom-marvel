let arr = []
while(arr.length < 9){
    var number = Math.floor((Math.random() * 1491) + 1);
    if(arr.indexOf(number) === -1) 
      str = `http://gateway.marvel.com/v1/public/characters?ts=1&limit=1&offset=${number}&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702`;
      arr.push(str);
}

Promise.all(arr.map(url =>
    fetch(url).then(resp => resp.json())
)).then(json => {
    json.map(item => drawHero(item.data.results))
    console.log(json);
})


let drawHero = arrayHero => {
    let name = arrayHero.data;
    console.log(name);
}