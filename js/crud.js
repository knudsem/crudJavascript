/********************************************** DELETE *********************************************/

/*Select all trashcans node*/
let TrashNode = document.querySelectorAll('.trash');
let TrashArr = Array.prototype.slice.call(TrashNode);  // Convert it to an array

/*Remove the parent node of the parent node of the trash can ( cf The card with different ID)*/
for (const trash of TrashArr) {
	trash.addEventListener('click', function(event) {
		trash.parentNode.parentNode.remove();
		const index = TrashArr.indexOf(trash);
		if (index > -1) {
			TrashArr.splice(index, 1);
		}
	})
}


/*************************************************** UPDATE *****************************************/


/*Select all pens*/
let PenNode = document.querySelectorAll('.pen');
let PenArr = Array.prototype.slice.call(PenNode); // Convert it to an array


/*Transform into input*/
for (const pen of PenArr) {
	pen.addEventListener('click', function(event) {
		const card = pen.parentNode.parentNode;
		const leftPart = card.querySelector('.part-left')
		const job = leftPart.querySelector('.job-title');
		job.outerHTML = '<input class="job-input" name="job" value="' + job.innerHTML + '"></input>';
		const rightPart = card.querySelector('.part-right')
		const name = rightPart.querySelector('.name')
		const adress = rightPart.querySelector('.adress-dom');
		name.outerHTML = '<input class="name-input" name="name" value="' + name.innerHTML + '"></input>';
		adress.outerHTML = '<input class="adress-input" name="adress" value="' + adress.innerHTML + '"></input>';
		const ud = card.querySelector('.ud');
		ud.remove()
		const submit = document.createElement("button");
		submit.classList.add('submit-btn');
		card.appendChild(submit);
		submit.innerHTML = "Submit";
		submit.addEventListener("click", updateData)
	});
}



const updateData = event => {
  const nameInput = document.querySelector('input[name="name"]') //selecting the input with name property "name"
  const jobInput = document.querySelector('input[name="job"]')
  const adressInput = document.querySelector('input[name="adress"]')
  const name = nameInput.value //get value from form
  const adress = adressInput.value //get value from form
  const job = jobInput.value //get value from form
  jobInput.outerHTML = '<h3 class="job-title">' + job + '</h3>';
  nameInput.outerHTML = '<h2 class="name">' + name + '</h2>';
  adressInput.outerHTML = '<p class="adress-dom">' + adress + '</p>';
  const btn = document.querySelector('.submit-btn');
  const card = btn.parentNode;
  btn.remove()
  const ud = document.createElement("div");
  /*Recreate trash and pen et put again eventlistener*/
  ud.classList.add('ud');
  card.appendChild(ud);
  /*PEN*/
  const pen = document.createElement("div");
  pen.classList.add('pen');
  ud.appendChild(pen);
  /*add pen to pen array*/
  PenArr.push(pen);
  /* ADD EVENT LISTENER TO NEW TRASH TO BE ABLE TO DELETE*/
  pen.addEventListener('click', function(event) {
	  	const card = pen.parentNode.parentNode;
	  	const leftPart = card.querySelector('.part-left')
	  	const job = leftPart.querySelector('.job-title');
	  	job.outerHTML = '<input class="job-input" name="job" value="' + job.innerHTML + '"></input>';
	  	const rightPart = card.querySelector('.part-right')
	  	const name = rightPart.querySelector('.name')
	  	const adress = rightPart.querySelector('.adress-dom');
	  	name.outerHTML = '<input class="name-input" name="name" value="' + name.innerHTML + '"></input>';
	  	adress.outerHTML = '<input class="adress-input" name="adress" value="' + adress.innerHTML + '"></input>';
	  	const ud = card.querySelector('.ud');
	  	ud.remove()
	  	const submit = document.createElement("button");
	  	submit.classList.add('submit-btn');
	  	card.appendChild(submit);
	  	submit.innerHTML = "Submit";
	  	submit.addEventListener("click", updateData);
  });
  /*TRASH*/
  const trash = document.createElement("div");
  trash.classList.add('trash');
  ud.appendChild(trash);
  /*add trash to trash array*/
  TrashArr.push(trash);
  /* ADD EVENT LISTENER TO NEW TRASH TO BE ABLE TO DELETE*/
  trash.addEventListener('click', function(event) {
	  	trash.parentNode.parentNode.remove();
	  	const index = TrashArr.indexOf(trash);
	  	if (index > -1) {
	  		TrashArr.splice(index, 1);
	  	}
  });
}

/************************************* CREATE ***************************************/

const addCard = document.querySelector('.add');
const containerCard = document.querySelector('.cards-container')


addCard.addEventListener('click', function(event) {
	createNewCard();
});


const createNewCard = () => {
	/*create new card div*/
	let containerNumberOfChild = containerCard.childElementCount;
	const card = document.createElement("div");
	card.classList.add('card', 'card-' + containerNumberOfChild)
	containerCard.insertBefore(card, addCard);
	/*Create left part div*/
	const LeftPart = document.createElement("div");
	LeftPart.classList.add('part-left');
	card.appendChild(LeftPart);
	/*Create avatar*/
	const avatar = document.createElement("img");
	avatar.classList.add('avatar');
	avatar.src = "Assets/michael-zimber.jpg";
	LeftPart.appendChild(avatar);
	/*Create job title*/
	const job = document.createElement("h3");
	job.classList.add('job-title');
	LeftPart.appendChild(job);
	job.innerHTML = "Sales Manager"
	/*Create part right*/
	const RightPart = document.createElement("div");
	RightPart.classList.add('part-right');
	card.appendChild(RightPart);
	/*Create name*/
	const name = document.createElement("h2");
	name.classList.add('name');
	RightPart.appendChild(name);
	name.innerHTML = "Michael Zimber"
	/*Create adress*/
	const adress = document.createElement("div");
	adress.classList.add('adress');
	RightPart.appendChild(adress)
	const adressPin = document.createElement("div")
	adressPin.classList.add('adress-pin')
	adress.appendChild(adressPin);
	const pin = document.createElement("div")
	pin.classList.add('pin')
	adressPin.appendChild(pin);
	const adressText = document.createElement("p")
	adressText.classList.add('adress-dom')
	adressText.innerHTML = "Riviera State 32/106"
	adressPin.appendChild(adressText);
	/*Create Twitter*/
	const twitter = document.createElement("h3");
	twitter.classList.add('twitter');
	adress.appendChild(twitter);
	twitter.innerHTML = "Twitter, Inc"
	const twitterText = document.createElement("p")
	twitterText.innerHTML = " 795 Folsom Ave, Suite 600 <br> San Francisco, CA 94107 <br> P: (123) 456-7890"
	adress.appendChild(twitterText);
	/*Create Icons delete modify*/
	const ud = document.createElement("div");
	ud.classList.add('ud');
	card.appendChild(ud);
	/*PEN*/
	const pen = document.createElement("div");
	pen.classList.add('pen');
	ud.appendChild(pen);
	/*add pen to pen array*/
	PenArr.push(pen);
	/* ADD EVENT LISTENER TO NEW PEN TO BE ABLE TO UPDATE*/
	pen.addEventListener('click', function(event) {

		const card = pen.parentNode.parentNode;
		const leftPart = card.querySelector('.part-left')
		const job = leftPart.querySelector('.job-title');
		const rightPart = card.querySelector('.part-right')
		const name = rightPart.querySelector('.name')
		const adress = rightPart.querySelector('.adress-dom');
		job.outerHTML = '<input class="job-input" name="job" value="' + job.innerHTML + '"></input>';
		name.outerHTML = '<input class="name-input" name="name" value="' + name.innerHTML + '"></input>';
		adress.outerHTML = '<input class="adress-input" name="adress" value="' + adress.innerHTML + '"></input>';
		console.log(adress);
		const ud = card.querySelector('.ud');
		ud.remove()
		const submit = document.createElement("button");
		submit.classList.add('submit-btn');
		card.appendChild(submit);
		submit.innerHTML = "Submit";
		submit.addEventListener("click", updateData);
	});
	/*TRASH*/
	const trash = document.createElement("div");
	trash.classList.add('trash');
	ud.appendChild(trash);
	/*add trash to trash array*/
	TrashArr.push(trash);
	/* ADD EVENT LISTENER TO NEW TRASH TO BE ABLE TO DELETE*/
	trash.addEventListener('click', function(event) {
		trash.parentNode.parentNode.remove();
		const index = TrashArr.indexOf(trash);
		if (index > -1) {
			TrashArr.splice(index, 1);
		}
	})
}
