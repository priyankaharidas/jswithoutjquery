
var ourheading=document.getElementById("heading");
var ourlist=document.getElementById("list").getElementsByTagName("li");
for(i=0; i<ourlist.length; i++)
{
	ourlist[i].addEventListener("click",activateItem);
	
	function activateItem()
	{
		ourheading.innerHTML=this.innerHTML;
	}
}