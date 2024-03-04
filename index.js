let response;

let element1 = document.getElementById("email")
let element2 = document.getElementById("password")
let element3 = document.getElementById("output")

const correctEmail = "zondimaqina0@gmail.com"
let input;  
let password;

function login(){

	input = element1.value
	password = element2.value
	if (input !== `zondimaqina0@gmail.com` || input == null || password !== `0459pP4482`){
		response = `Invalid email address or password`
		element3.textContent = response

	} else if (input === correctEmail && password === `0459pP4482`){
		response = `Welcome Back Zondi!!!`
		element3.textContent = response;
	}
}


