var tablinks = document.getElementsByClassName("skill-tab-link");
var tabcontents = document.getElementsByClassName("skill-tab-contents");



function showContents(name) 
{
    for(link of tablinks)
    {
        link.classList.remove("skill-active-link");
    }
    for(content of tabcontents)
    {
        content.classList.remove("skill-active-tab");
    }

    event.currentTarget.classList.add("skill-active-link");
    document.getElementById(name).classList.add("skill-active-tab");
}



  




