(function(){
    'use strict';
    console.log('reading js');


    const madlib = document.querySelector("#madlib")
    const header = document.querySelector('#madlib-questions h2');


    const myform = document.querySelector('#myform');
    myform.addEventListener('submit', function(e){

        e.preventDefault();
        let formData = document.querySelector('input'.value);
        // alert('form submitted');
        const name = document.querySelector('#name').value;
        const number = document.querySelector('#number').value;
        const verb1 = document.querySelector('#verb1').value;
        const verb2 = document.querySelector('#verb2').value;
        const color1 = document.querySelector('#color1').value;
        const color2 = document.querySelector('#color2').value;
        const adj1 = document.querySelector('#adj1').value;
        const food = document.querySelector('#food').value;

        let mytext;
    if(name == '' ){
        mytext = "please provide your name";
        document.querySelector('#name').focus();

    } else if(number == '' ){
        mytext = "please provide a number";
        document.querySelector('#number').focus();
    } else if (verb1 == '' ){
        mytext = "please provide a verb";
        document.querySelector('#verb1').focus();
    } else if (verb2 == '' ){
        mytext = "please provide another verb";
        document.querySelector('#verb2').focus();
    } else if (color1 == '' ){
        mytext = "please provide a color";
        document.querySelector('#color1').focus();
    } else if (color2 == '' ){
        mytext = " please provide another color";
        document.querySelector('#color2').focus();
    } else if (adj1 == '' ){
        mytext = "please provide a adjective";
        document.querySelector('#adj1').focus();
    } else if (food == '' ){
        mytext = "please provide a food item";
        document.querySelector('#food').focus();
    } else {
        mytext = `I, ${name} will wake up at ${number} 'o clock. I will ${verb1} my teeth and ${verb2} my face. After that, I choose my clothes for the day. Today, I wear a ${color1} shirt and ${color2} pants. I pick out my ${adj1} shoes and run out the door, ready to go get ${food} with friends!
        `;
    }

    if(mytext.includes('Please provide')) {
        madlib.innerHTML = `<p>${mytext}</p>`;

    } else {
        header.style.display = 'none';
        myform.style.display = 'none';
        madlib.innerHTML = mytext;
    }

    });
})();