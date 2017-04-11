
var newItemcounter=1;
var unlis=document.getElementById("list");
var ourbutton=document.getElementById("blue");
var ourheading=document.getElementById("heading");
var ourlist=document.getElementById("list").getElementsByTagName("li");
for(i=0; i<ourlist.length; i++)
{
	ourlist[i].addEventListener("click",activateItem);
}	
	function activateItem()
	{
		ourheading.innerHTML=this.innerHTML;
	}
	
	ourbutton.addEventListener("click",createNewItem);
	
	function createNewItem()
	{
		unlis.innerHTML +="<li>something new " + newItemcounter+"</li>";
		newItemcounter++;
	}