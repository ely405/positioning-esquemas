var docFragment = document.createDocumentFragment();
var largeContainer = document.createElement("section");
var mediumContainer = document.createElement("section");
var smallContainer = document.createElement("section");
largeContainer.classList.add("large-container", "red");
mediumContainer.classList.add("medium-container", "purple");
smallContainer.classList.add("small-container", "yellow");
mediumContainer.append(smallContainer);
largeContainer.append(mediumContainer);

var containerClone = largeContainer.cloneNode(true);
containerClone.classList.remove("red");
containerClone.classList.add("blue");
containerClone.firstChild.classList.remove("purple");
containerClone.firstChild.classList.add("green");
containerClone.firstChild.firstChild.classList.remove("yellow");
containerClone.firstChild.firstChild.classList.add("black");

docFragment.append(largeContainer, containerClone);

window.addEventListener("load",function(){
  document.body.append(docFragment);
});
