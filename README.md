# Interactive Registration Form

## JavaScript documentation:
 - Make a constant where the form will be stored.
   
   ```
   const $form = document.querySelector('#contact_form');
   ```
   
 - Listen to the form submit event:
   
   ```
   $form.addEventListener('submit', handleSubmit);
   ```
   
 - Create a function for handling the submit, check if every form field has the correct format, size and if it is empty.
   
   ```
   function handleSubmit(event) {
   ```
   
 - Cancel the event if it can be cancelled
   
   ```
   event.preventDefault();
   ```
   
 - Create the constants for getting by ID the needed values (name, surname, telephone, password, confirmation password, email, genre, birth place, country of residence, birth date, year of the birth date, current date and error)
   
   ```
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
   const currentdate = new Date();
   const currentdate = new Date();
   const error = document.getElementById("errorName");
   ```
   
 - Create the constants for storing the regex rules and also storing the year of the birthdate, the ages and months that have passed since the birth date and the current date.
	- Name and surname can only contains letters:
	 ```
	 const nameformat = /^[a-zA-ZÀ-ÿ\s]+$/;
	 ```
	- Telephone can only contain numbers:
	 ```
	 const ntelephoneformat = /^\d+$/;
	 ```
	- Password must contain at least 1 capital letter, 1 lower case letter, 1 number and 1 special character:
	 ```
	 const passwordformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).+$/;
	 ```
	- Email can only contain letters, numbers, dots, hyphens and underscores and must contain an `@` and `.<whatever>`:
	 ```
	 const emailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	 ```
	- Select camps can't be empty, so it must have 1 value at least:
	 ```
	 const select = /.{1,}/;
	 ```
	- Age store the ages that have passed since your date of birth until now:
	 ```
	 var age = currentdate.getFullYear() - year.getFullYear();
	 ```
	- Month store the months that have passed since your date of birth until now:
	 ```
	 const month = currentdate.getMonth() - year.getMonth();
	 ```

 - Start checking the fields of the form:
	- Surname: mustn't be empty, must have a length of 2 letters at least and must match with the name format.
    ```
	1.- Check if the surname is empty:
		if (surnames === '') {
			/* If is empty, the following message will be printed */
			error.textContent = "Surname is empty!";
			return;
		}
	2.- Check if the surname have 2 letters at least:
		if (surnames.length < 2) {
			/* If the surname has less than 2 letters, the following message will be printed */
			error.textContent = "Surname is must have at least 2 letters!";
			return;
		}
		
	3.- Check if the surname match the name format:
		if (!surnames.match(nameformat)) {
			/* If the surname doesn't match with the name format, the following message will be printed */
			error.textContent = "Surname must only contain letters!";
			return;
		}
	  ```
	- Name: mustn't be empty, must have a length between 3 and 15 letters and must match with the nameformat
    ```
	1.- Check if the name is empty:
		if (names === '') {
			/* If is empty, the following message will be printed */
			error.textContent = "Name is empty!";
			return;
		}
	2.- Check if the name have between 3 and 15 letters:
		if (names.length < 3 || names.length > 15) {
			/* If the name isn't between 3 and 15 letters, the following message will be printed */
			error.textContent = "Name must have between 3 and 15 letters!";
			return;
		}
		
	3.- Check if the name match the name format:
		if (!names.match(nameformat)) {
			/* If the name doesn't match with the name format, the following message will be printed */
			error.textContent = "Name must only contain letters!";
			return;
		}
	  ```
	- Telephone: mustn't be empty, must have 9 digits and must match the telephone format.
    ```
	1.- Check if the telephone is empty:
		if (ntelephone === '') {
			/* If is empty, the following message will be printed */
			error.textContent = "Please enter a Phone number!";
			return;
		}
	2.- Check if the telephone have 9 digits:
		if (ntelephone.length < 9 || ntelephone.length > 9) {
			/* If it doesn't have 9 digits, the following message will be printed */
			error.textContent = "Phone number must have 9 digits!";
			return;
		}
		
	3.- Check if the telephone match the telephone format:
		if (!ntelephone.match(ntelephoneformat)) {
			/* If the telephone doesn't match with the telephone format, the following message will be printed */
			error.textContent = "Phone number must only contain numbers!";
			return;
		}
	  ```
	- Password & confirmation password mustn't be empty, must have between 8 and 15 characters, mustn't be different and must have the right format.
    ```
	1.- Check if the passwords aren't empty:
		if (password === '' || password2 === '') {
			/* If is empty, the following message will be printed */
			error.textContent = "Password is empty!";
			return;
		}
	2.- Check if the password have a 9 digits:
		if (password.length < 8 || password.length > 15 && password2.length < 8 || password2.length > 15) {
			/* If it doesn't have between 8 and 15 characters, the following message will be printed */
			error.textContent = "Password should have btw 8 and 15 characters!";
			return;
		}
		
	3.- Check if the password are not different:
		if (password != password2) {
			/* If the password are differents, the following message will be printed */
			error.textContent = "Password doesn't match, write them again!";
			return;
		}
	4.- Check if the password have the right format:
		if (!password.match(passwordformat) && !password2.match(passwordformat)) {
			/* If the password doesn't have the right format, the following message will be printed */
			error.textContent = "Password doesn't have the right format!";
			return;
		}
	  ```
	- Email mustn't be empty and must match the email format.
    ```
    	1.- Check if the email isn't empty:
		if (email === '') {
			/* If is empty, the following message will be printed */
			error.textContent = "Email address is empty!";
			return;
		}
    	2.- Check if the email mustn't match the email format:
		if (!email.match(emailformat)) {
			/* If the email doesn't have the right format, the following message will be printed */
			error.textContent = "Have u written an email address?";
			return;
		}
    ```
	- Genre mustn't be empty
    ```
    	1.- Check if the genre isn't empty:
		if (!genre.match(select)) {
			/* If is empty, the following message will be printed */
			error.textContent = "Genre is needed!";
			return;
		}
    ```
	- Birth place mustn't be empty
    ```
    	1.- Check if the birth place isn't empty:
		if (!birthplace.match(select)) {
			/* If is empty, the following message will be printed */
			error.textContent = "Birth place is needed!";
			return;
		}
    ```
	- Country of residence mustn't be empty
    ```
    	1.- Check if the country of residence isn't empty:
		if (!countryofresidence.match(select)) {
			/* If is empty, the following message will be printed */
			error.textContent = "Country of residence is needed!";
			return;
		}
    ```
	- Birth date mustn't be empty, check if birth date is not greater than the current date, and if the user is underage or over 65 years old.
    ```
		1.- Check if the birth date is not empty:
		if (birthdate === '') {
			/* If birth date is empty, the following message will be printed */
			error.textContent = "Birth date is needed";
			return;
		}
    	2.- Check if the birth date is not greater than the current date:
		if (birthdate > currentdate.toISOString().slice(0, 10)) {
			/* If birth date is greater than the current date, the following message will be printed */
			error.textContent = "Birth date is greater than the current date!";
			return;
		}
    	3.- Check if the user is underage or over 65 years old:
		if (age < 18 || age > 65) {
			/* If the user is underage or over 65 years old, the following message will be printed */
			error.textContent = "You can't be underage and you can't be over 65 years old!";
			return;
		}
    ```

 - Send the form
   ```
   $form.submit();
   ```
 
### Authors:

- #### [jmpfbmx](https://github.com/jmpfbmx)
