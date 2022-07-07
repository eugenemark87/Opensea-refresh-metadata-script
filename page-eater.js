//click refresh button
document.getElementsByClassName('sc-1xf18x6-0 sc-glfma3-0 hiIVBZ gyCmAw sc-1skvztv-0 fPnOUC')[0].click();


//this code will execute after 2 second (2000 milliseconds)
setTimeout(function() {

//navigate to the next url
window.location.href = "[link]" + (parseInt(window.location.href.split("/").pop()) + 1);
}, 2000);
