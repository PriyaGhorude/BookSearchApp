
const btnSearch = document.getElementById("btnSearch")
console.log(btnSearch);

btnSearch.addEventListener("click",bookSearch); //call to search function

async function bookSearch()
{
	event.preventDefault();
	console.log("Inside Book search function");
	var searchBook = document.getElementById('search').value
	document.getElementById('results').innerHTML=""

	var $fetch=await fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=10&q=+${searchBook}`)
    var data=await $fetch.json();

	//
	// axios.get("https://www.googleapis.com/books/v1/volumes?maxResults=10&q="+searchBook)
	// .then(res=>{
	//   console.log(res.data.items[0].volumeInfo.title);
	//   //books_list(res.data)
	// })
	// .catch(err=>{
	//   console.log(err)
	// })
	//

	// Bind books data to UI
	for(i=0;i<data.items.length;i++)
	{
	var jdata = data.items[i].volumeInfo	

	document.getElementById("results").innerHTML += 
	"<div class='col'><h2>" 
	+ jdata.title + "</h2>" + "<h3>" + jdata.authors
	+ "</h3>" + "<h4>" + jdata.publishedDate 
	+ "</h4><a  target='_blank' href='" + jdata.infoLink 
	//+ "'><button class='btn btn-primary'>Add To Card</button></a></div>" 
	+ "<div class='col-sm-4'><img src='" 
	+ jdata.imageLinks.thumbnail + "'></div></div>"
	}
	// Bind books data to UI
 
}
