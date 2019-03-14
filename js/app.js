// $.ajax({
// 	method: "POST",
// 	url: "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702",
// 	success: function(arr) {
// 		console.log(arr);
// 	}
// })



// var arr = []
// while(arr.length < 9){
//     var r = Math.floor((Math.random() * 1491) + 1);
// 	if(arr.indexOf(r) === -1)
// 		fetch('http://gateway.marvel.com/v1/public/characters?limit=1&offset='+r+'&apikey=0cc0bbc55224cb8f34ec109ab692c2cb&hash=4e7f342316da627d9a966768f39d0702')
// 		.then(function(response) {
// 		  return response.json();
// 		})
// 		.then(function(data) {
// 			console.log(data.data.results)
// 			arr.push(data.data.results[0])
// 		})
// }
// console.log(arr);


