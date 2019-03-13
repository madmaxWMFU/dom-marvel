// $.ajax({
// 	method: "POST",
// 	url: "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702",
// 	success: function(arr) {
// 		console.log(arr);
// 	}
// })


fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702')
.then(function(response) {
  console.log(response.json());
})

var arr = []
while(arr.length < 9){
    var r = Math.floor((Math.random() * 1491) + 1);
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);