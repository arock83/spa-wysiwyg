var objectStuff = [{
	title: "Samurai",
  	name: "Tomoe Gozen",
  	bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  	image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  	lifespan: {
    	birth: 1747,
    	death: 1797
  	}
},{
	title: "A Gentleman and a Scholar",
  	name: "Andrew Rock",
  	bio: "Those that have met him were impressed but little did they know he would rise to be in charge of the Soylent Green Project in 2022.",
  	image: "https://s-media-cache-ak0.pinimg.com/originals/e7/4c/ea/e74cea6c90ba9291fa074c6f195cd249.jpg",
  	lifespan: {
    	birth: 1983,
    	death: 2041
    }
},{
	title: "Science Guy",
  	name: "Bill Nye",
  	bio: "He inspired millions of childern to go into science at a young age, and lead the fight against Climate Change untill he was executed by Donald Trump in 2018.",
  	image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/BillNyeSG.jpg",
  	lifespan: {
    	birth: 1955,
    	death: 2018
    }
}];

var container = document.getElementById("container");
objectStuff.forEach(function(item, index) {
	container.innerHTML +=	`<div class="person">
									<header>`+item.title+" "+item.name+`</header>
									<section><img height=200px width=200px src="`+item.image+`" rel="samuri">`+item.bio+`</section>
									<footer>Born: `+item.lifespan.birth+` Died: `+item.lifespan.death+`</footer>
								</div>`;
});

document.addEventListener("click", function(event){
	event.target.classList.add("border");
	input.focus();
});
