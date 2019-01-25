function validateForm() {
  var x = document.getElementById("name").value;
  var y = document.getElementById("comment").value;
  var z = document.getElementById("pwd").value;
  var key = "phani";
  var compare = key.localeCompare(z);
  if (x == "" || y == "") {
    alert("Name or comments must be filled out");
    return false;
  }
  if (compare == 0) {
  	// alert("asdas");
  	var tmp = document.getElementById("division");
  	console.log(tmp);
	tmp.style.setProperty("display","");
	var para = document.createElement("p");
	var node = document.createTextNode("abshdvhjsnbsjvigikjvjhjvy");
	para.appendChild(node);
	tmp.appendChild(para);
  }
 else {
	alert("Error: You entered wrong secret key.")
}
}