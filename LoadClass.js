
var i = location.search.substring(1);

var data = JSON.parse(data);
var root = data[0].allClasses[i];

var page = document.getElementById("page");

var title = document.getElementById("title");
title.innerHTML = root.name;

// Create hierarchy tree
var hierarchy = document.getElementById("hierarchy");
for (var a = 0; a < root.hierarchy.childList.length; a++)
{
        // Create hierarchy element object
    var hElement = document.createElement("div");
        hElement.setAttribute("class", "hElement");

        // Create text element attached to a hElement
    var text = document.createTextNode(root.hierarchy.childList[a]);
        hElement.appendChild(text);
        hierarchy.appendChild(hElement);
}



// Create member variables
var members = document.getElementById("members");
for (var b = 0; b < root.members.length; b++)
{
    var member = document.createElement("div");
        member.setAttribute("class", "member");
        members.appendChild(member); // Add member to child of members

    var mHeader = document.createElement("div");
        mHeader.setAttribute("class", "memberHeader");
    var mHeaderText = document.createTextNode(
                        String.fromCharCode(root.members[b].visibility) + " " +
                        root.members[b].name + " : " + root.members[b].type
                        );
        mHeader.appendChild(mHeaderText); // Add text to header
        member.appendChild(mHeader); // Add header to member

    var mBody = document.createElement("div");
        mBody.setAttribute("class", "memberBody");
    var mBodyText = document.createTextNode(
                        root.members[b].desc
                        );
        mBody.appendChild(mBodyText); // Add text to body
        member.appendChild(mBody); // Add body to member
}



// Create function variables
var methods = document.getElementById("methods");
for (var c = 0; c < root.methods.length; c++)
{
    var method = document.createElement("div");
        method.setAttribute("class", "method");
        methods.appendChild(method); // Add method to child of methods

    var fHeader = document.createElement("div");
        fHeader.setAttribute("class", "methodHeader");
    var fHeaderText = document.createTextNode(
                         String.fromCharCode(root.methods[c].visibility) + " " +
                         root.methods[c].name + " : " + root.methods[c].returnType
                         );
        fHeader.appendChild(fHeaderText);
        method.appendChild(fHeader);

    var fBody = document.createElement("div");
        fBody.setAttribute("class", "memberBody");
    var fBodyText = document.createTextNode(
                        root.methods[c].desc
                        );
        fBody.appendChild(fBodyText);
        method.appendChild(fBody);
}