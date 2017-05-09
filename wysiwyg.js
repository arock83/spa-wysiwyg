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

var input = document.getElementById("input");

var container = document.getElementById("container");
objectStuff.forEach(function(item, index) {
	container.innerHTML += `<div class="person" id="person--${index}">
									          <header>`+item.title+" "+item.name+`</header>
									          <section>
                                <img height=200px width=200px src="`+item.image+`" rel="samuri"/>
                                <p id="bioText">`+item.bio+`</p>
                            </section>
									          <footer>
                                <p>Born: `+item.lifespan.birth+` Died: `+item.lifespan.death+`</p>
                            </footer>
								          </div>`;
});

var bioText = document.getElementById("bioText");

var list = document.getElementsByClassName("person");
console.log("list: ", list);
for (n=0;n<list.length; n+=1) {
  card = list[n];
  card.addEventListener("click", function (event) {
      event.currentTarget.classList.add("border");
      console.log("event target: ", event.currentTarget.id);
      editFunction(event.currentTarget.id);

  })
}

let editFunction = (id) => {
  let ID = id.replace("person--", "")
  console.log("ID: ", ID);
  let bio = document.getElementById(id);
  input.focus();
  console.log("objectStuff: ", objectStuff[0]);
  input.value = objectStuff[ID].bio;
  input.addEventListener("keydown", keylistener)
}

var keylistener = (event) => {
    console.log(event);
    bioText.innerHTML = input.value;
    if (event.key === "Enter") {
      input.value = "";
      input.removeEventListener("keydown", keylistener)
    }
}

// document.addEventListener("click", function(event){
// 	event.target.classList.add("border");
// 	input.focus();
// });
