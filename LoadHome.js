
var data = JSON.parse(data);
// var root = data[0].allClasses[i];

var element = document.getElementById("main");
for (var i = 0; i < data[0].allClasses.length; i++)
{
	var classData = document.createElement("div");
		classData.setAttribute("class", "classTitle");
		
	var a = document.createElement('a');
	var link = document.createTextNode(data[0].allClasses[i].name);
		a.appendChild(link);
		a.href = "classPage.html?"+i;
		
	classData.appendChild(a);
	element.appendChild(classData);
}