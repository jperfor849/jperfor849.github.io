const $form = document.querySelector('#contact_form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const names = document.getElementById('name').value;
    const surnames = document.getElementById('surname').value;
    const ntelephone = document.getElementById('telephone').value;
    const ntelephoneformat = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{3})$/;
    const password = document.getElementById('passwd').value;
    const password2 = document.getElementById('passwd2').value;
    const passwordformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,15}$/;
    const email = document.getElementById('email').value;
    const emailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const genre = document.getElementById('genre').value;
    const birthplace = document.getElementById('birthPlace').value;
    const countryofresidence = document.getElementById('countryOfResidence').value;
    const select = /.{1,}/;
    const birthdate = document.getElementById('birthDate').value;
    const year = new Date(birthdate);
    const currentdate = new Date();
    const age = currentdate.getFullYear() - year.getFullYear();
    const month = currentdate.getMonth() - year.getMonth();

    if (surnames.length < 2) {
        alert("Surname is too short!");
        return;
    } else if (surnames === '') {
        alert("Surname is empty!");
        return;
    }

    if (names.length < 3 || names.length > 15) {
        alert("Name is invalid!");
        return;
    } else if (names === '') {
        alert("Name is empty!");
        return;
    }

    if (ntelephone==='') {
        alert("Please enter a Phone number");
        return;
    } else if (!ntelephone.match(ntelephoneformat)) {
        alert("Phone number doesn't have the right format.");
        return;
    }

    if (password.length < 8 || password.length > 15 && password2.length < 8 || password2.length > 15) {
        alert("Password should have btw 8 and 15 characters!");
        return;
    } else if (password != password2) {
        alert("Password doesn't match, write them again!");
        return;
    } else if (!password.match(passwordformat) && !password2.match(passwordformat))  {
        alert("Password doesn't have the right format!");
        return;
    } else if (password === '' || password2 === '') {
        alert("Password is empty!");
        return;
    }

    if(!email.match(emailformat)) {
        alert("Have u written an email address?");
        return;
    } else if (email === '') {
        alert("Email address is empty!");
        return;
    }

    if(!genre.match(select)) {
        alert("Genre is needed");
        return;
    }

    if(!birthplace.match(select)) {
        alert("Birth place is needed");
        return;
    }

    if(!countryofresidence.match(select)) {
        alert("Country of residence is needed");    
        return;
    }

    if(birthdate > currentdate.toISOString().slice(0, 10)) {
        alert("Birth date is greater than the current date.");
        return;
    }

    if(month < 0 || month === 0) {
        age--;
        return;
    }
    
    if(age < 18 || age > 65) {
        alert("You can't be underage and you can't be over 65 years old");
        return;
    }
    $form.submit();
}