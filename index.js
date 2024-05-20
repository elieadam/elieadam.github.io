let navbar = document.getElementById("navigation");
const sections = document.querySelectorAll('section');
const as = document.querySelectorAll('a');
let prev_current = null;

let shouldStickPosition = window.innerHeight - navbar.offsetHeight; //navbar.offsetTop;

function addOrRemoveStickyClass() {
	if (window.pageYOffset >= shouldStickPosition){
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

function activateNavLink(){
	let current = '';
	sections.forEach( section => {
		const sectionTop = section.offsetTop;
		if (window.pageYOffset >= sectionTop - navbar.offsetHeight){
			current = section.getAttribute("id");
		}
	})
	console.log(current);
	if (prev_current != current){
		prev_current = current;
		as.forEach( a => {
			a.classList.remove("active")
			if (a.classList.contains(current))
			{
				a.classList.add("active")
				console.log(a.classList);
			}
		})
	}
}

function addOrRemoveActiveClass() {
	if (window.pageYOffset >= shouldStickPosition){
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}


window.onscroll = () => {  // onwheel instead of onscroll to work with overflow
	addOrRemoveStickyClass();
	activateNavLink();
};

window.onresize = () =>{
	shouldStickPosition = window.innerHeight - navbar.offsetHeight; //navbar.offsetTop;
};


// COLLAPSING PUBLICATIONS

var coll = document.getElementsByClassName("collapsible");
var i;

// THIS IS FOR BIO
X = coll[0];
X.innerText = "Show Bio";
  coll[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
	  X.innerText = "Show Bio";
      content.style.maxHeight = null;
    } else {
	  X.innerText = "Hide Bio";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
 
  
Y = coll[1];
Y.innerText = "SHOW MORE";
  coll[1].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
	  Y.innerText = "SHOW MORE";
      content.style.maxHeight = null;
    } else {
	  Y.innerText = "SHOW LESS";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });  
  

//for (i = 0; i < coll.length; i++) {
//  X = coll[i];
//  coll[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var content = this.nextElementSibling;
//    if (content.style.maxHeight){
//	  X.innerText = "Closed!";
//      content.style.maxHeight = null;
//    } else {
//	  X.innerText = "Open!";
//      content.style.maxHeight = content.scrollHeight + "px";
//    }
//  });
//}




