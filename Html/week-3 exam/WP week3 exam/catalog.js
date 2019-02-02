var data = {
	"products": [{
			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10"
		},
		{
			"title": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20"
		},
		{
			"title": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image": "3.jpeg",
			"quantity":"30"
		},
		{
			"title": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image": "4.jpeg",
			"quantity":"40"
		}
	]
}


var i = 0;
function load() {
document.getElementById('title').innerHTML = "Product Title:  " + data.products[i].title;
document.getElementById('description').innerHTML = "Product Descripton:  " + data.products[i].description;
document.getElementById('image').innerHTML = '<img src = "./'+data.products[i].image+'" alt= "Not found" height = "400px">';	
document.getElementById('quantity').innerHTML = "Product quantity:" + data.products[i].quantity;
hideButton('prev');
}

function next() {
	if (i > data.products.length - 2) {
		console.log(i);
		i = data.products.length  - 1;
		hideButton('next');
		// return;
	} else {
		console.log(i);
	document.getElementById('title').innerHTML = "Product Title:" + data.products[i+1].title;
	document.getElementById('description').innerHTML = "Product Description:  " + data.products[i +1].description;
	document.getElementById('image').innerHTML = '<img src = "./'+data.products[i + 1].image+'" alt= "Not found" height = "400px">';
	document.getElementById('quantity').innerHTML ="Product quantity:  " +  data.products[i + 1].quantity;
	showButton('next');
	showButton('prev');
	i = i +1;
	}
	
}
function prev() {
	if (data.products[i-1].title === '') {
		document.getElementById('title').innerHTML = data.products[i].title;
		document.getElementById('description').innerHTML = data.products[i].description;
		document.getElementById('image').innerHTML = "";	
		document.getElementById('quantity').innerHTML = data.products[i].quantity;
	}
	if (i == 0) { hideButton('prev');
	i = 0;
} else {
	showButton('next');
	showButton('prev');
	console.log(i);
	document.getElementById('title').innerHTML = "Product Title:" + data.products[i-1].title;
	document.getElementById('description').innerHTML = "Product description:  " + data.products[i -1].description;
	document.getElementById('image').innerHTML = '<img src = "./'+data.products[i - 1].image+'" alt= "Not found" height = "400px">';	
	document.getElementById('quantity').innerHTML = "Product Quantity:  " + data.products[i - 1].quantity;
	i = i -1;
}

}
function hideButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'hidden'
}
function showButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'visible'
}
function deleteInfo() {
	data.products[i].title = "";
	data.products[i].description = "";
	data.products[i].quantity = "";
	data.products[i].image = "";
	console.log(data.products[i].title);
	document.getElementById('title').innerHTML = data.products[i].title;
	document.getElementById('description').innerHTML = data.products[i].description;
	document.getElementById('image').innerHTML = "";	
	document.getElementById('quantity').innerHTML = data.products[i].quantity;
}
function update() {
	var tempTitle = document.getElementById('titleid').value;
	var tempDesc = document.getElementById('descid').value;
	var tempQuant = document.getElementById('quantid').value;
	console.log(tempTitle);
	data.products[i].title = tempTitle;
	data.products[i].description = tempDesc;
	data.products[i].quantity = tempQuant;
	console.log(data.products[i].title);
	document.getElementById('title').innerHTML = "Product Title:  " + data.products[i].title;
	document.getElementById('description').innerHTML = "Product Descripton:  " + data.products[i].description;
	document.getElementById('image').innerHTML = '<img src = "./'+data.products[i].image+'" alt= "Not found" height = "400px">';	
	document.getElementById('quantity').innerHTML = "Product quantity:" + data.products[i].quantity;
}
