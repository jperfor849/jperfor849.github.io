/* Constant where the form is being stored */
const $form = document.querySelector('#contact_form');

/* Listen to the form submit event */
$form.addEventListener('submit', handleSubmit);

/* Function for handle the submit, checking if every form field has the correct format, size and if it is empty */
function handleSubmit(event) {
    /* Cancels the event if it is cancelable */
	event.preventDefault();

	/* Constants for getting by ID the name, surname, telephone, password, confirmation password , email, genre, birth place, country of residence and birth date. */
	const names = document.getElementById('name').value;
	const surnames = document.getElementById('surname').value;
	const ntelephone = document.getElementById('telephone').value;
	const password = document.getElementById('passwd').value;
	const password2 = document.getElementById('passwd2').value;
	const email = document.getElementById('email').value;
	const genre = document.getElementById('genre').value;
	const birthplace = document.getElementById('birthPlace').value;
	const countryofresidence = document.getElementById('countryOfResidence').value;
	const birthdate = document.getElementById('birthDate').value;
	const year = new Date(birthdate);

	/* Constants for storing the regex rules and also for storing the new Date and the ages and months that have passed since the birth date and the current date. */
	/* name and surname: can only contain letters */
	const nameformat = /^[a-zA-ZÀ-ÿ\s]$/;
	/* telephone: can only contain 9 numbers and can also contain a - per 3 numbers */
	const ntelephoneformat = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{3})$/;
	/* password: must contain 1 capital letter, 1 lower case letter, 1 number and 1 special character and a length btw 8 and 15 characters */
	const passwordformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,15}$/;
	/* email: can only contain letters, numbers, dots, hyphens and underscores and must contain an @ and .<whatever> */
	const emailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	/* select camps: cannot be empty, so it has to have 1 value at least. */
	const select = /.{1,}/;
	/* currentdate: store today date */
	const currentdate = new Date();
	/* age: variable that store the ages that have passed since your date of birth until now */
	var age = currentdate.getFullYear() - year.getFullYear();
	/* month: store the months that have passed since your date of birth until now */
	const month = currentdate.getMonth() - year.getMonth();

	/* surname: must have a length of 2 characters at least, mustn't be empty and must match with the nameformat */
	if (surnames.length < 2) {
		alert("Surname is too short!");
		return;
	} else if (surnames === '') {
		alert("Surname is empty!");
		return;
	} else if (!surnames.match(nameformat)) {
		alert("Surname doesn't have the right format.");
	}

	/* name: must have a length between 3 and 15 characters at least, mustn't be empty and must match with the nameformat */
	if (names.length < 3 || names.length > 15) {
		alert("Name is invalid!");
		return;
	} else if (names === '') {
		alert("Name is empty!");
		return;
	} else if (!names.match(nameformat)) {
		alert("Name doesn't have the right format.");
	}

	/* telephone: mustn't be empty and must match the telephone format */
	if (ntelephone === '') {
		alert("Please enter a Phone number");
		return;
	} else if (!ntelephone.match(ntelephoneformat)) {
		alert("Phone number doesn't have the right format.");
		return;
	}

	/* password & confirmation password: must have between 8 and 15 characters, mustn't be different, must have the right format and they mustn't be empty   */
	if (password.length < 8 || password.length > 15 && password2.length < 8 || password2.length > 15) {
		alert("Password should have btw 8 and 15 characters!");
		return;
	} else if (password != password2) {
		alert("Password doesn't match, write them again!");
		return;
	} else if (!password.match(passwordformat) && !password2.match(passwordformat)) {
		alert("Password doesn't have the right format!");
		return;
	} else if (password === '' || password2 === '') {
		alert("Password is empty!");
		return;
	}

	/* email: mustn't be empty and must match the email format */
	if (!email.match(emailformat)) {
		alert("Have u written an email address?");
		return;
	} else if (email === '') {
		alert("Email address is empty!");
		return;
	}

	/* genre: mustn't be empty */
	if (!genre.match(select)) {
		alert("Genre is needed");
		return;
	}

	/* birthPlace: mustn't be empty */
	if (!birthplace.match(select)) {
		alert("Birth place is needed");
		return;
	}

	/* countryOfResidence: mustn't be empty */
	if (!countryofresidence.match(select)) {
		alert("Country of residence is needed");
		return;
	}

	/* birthDate mustn't be greater than current date */
	if (birthdate > currentdate.toISOString().slice(0, 10)) {
		alert("Birth date is greater than the current date.");
		return;
	}

	/* if month is less than 0 or equal to 0 let's substract ages */
	if (month < 0 || month === 0) {
		age--;
		return;
	}

	/* you can't: be underage or be over 65 years old */
	if (age < 18 || age > 65) {
		alert("You can't be underage and you can't be over 65 years old");
		return;
	}

	/* Send the form */
	$form.submit();
}