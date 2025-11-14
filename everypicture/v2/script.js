(function(){
    'use strict';
    console.log('reading js');
window.addEventListener('load', function () {
    'use strict';
    const sections = document.querySelectorAll('section');
    const headerP = document.querySelector('header p');
    let sectionTops = [];
    let pagetop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;
    sections.forEach(function (eachSection) {
    sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
});

console.log(sectionTops);
});

if (counter != prevCounter) {
    const myStyle = `bgcolor${counter}`;
    document.querySelector('body').className = myStyle;
    prevCounter = counter;
}



})();