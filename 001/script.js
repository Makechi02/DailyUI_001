function move() {
	let welcome = document.getElementById('welcome');
	let h2 = welcome.getElementsByTagName('h2');
	let p = document.getElementsByTagName('p');
	let btn = document.getElementsByTagName('button');

	let create = document.getElementById('create');
	let head = create.getElementsByTagName('h2');
	let form = create.getElementsByTagName('form');

	if (btn[0].innerHTML === "sign in") {
		h2[0].innerHTML = "Hello, friend!";
		p[0].innerHTML = "Enter your personal details and start journey with us";
		p[1].innerHTML = 'or use your email account'
		btn[0].innerHTML = "sign up";
		btn[1].innerHTML = 'sign in';
		welcome.classList.add('moveLeft');
		head[0].innerHTML = "Sign in to khwizmania";
		create.classList.add('moveRight');
		form[0].style.display = 'none';
		form[1].style.display = 'flex';
	} else {
		h2[0].innerHTML = "Welcome back!"
		btn[0].innerHTML = "sign in";
		btn[1].innerHTML = 'sign up';
		p[0].innerHTML = "To keep connected please log in with your details";
		p[1].innerHTML = 'or use your email for registeration';
		welcome.classList.remove('moveLeft');
		head[0].innerHTML = 'create account';
		create.classList.remove('moveRight');
		form[0].style.display = 'flex';
		form[1].style.display = 'none';
	}
}

window.onload = move;