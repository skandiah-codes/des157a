(function(){
    'use strict';
    console.log('reading js');

    window.addEventListener('load', function () { //from the example, changes color
        'use strict';

        const sections = document.querySelectorAll('section');

        let sectionTops = [];
        let pagetop;
        let counter = 0;
        let prevCounter = 1;
        sections.forEach(function (eachSection) {
            sectionTops.push(
                Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY
            );
        });

        sectionTops.push(Number.MAX_SAFE_INTEGER);

        window.addEventListener('scroll', function () {
            pagetop = window.scrollY + 100;
        });


        window.addEventListener('scroll', function () {
            pagetop = window.scrollY + 100;

            if (pagetop > sectionTops[counter]) {
                counter++;
            }

 
            else if (counter > 1 && pagetop < sectionTops[counter - 1]) {
                counter--;
            }


            if (counter !== prevCounter) {
                document.querySelector('body').className = 'bgcolor' + counter;
                prevCounter = counter;
            }
        });

    });

    document.addEventListener("DOMContentLoaded", function () {

    var items = document.querySelectorAll(".fade-target");

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
             
                entry.target.classList.add("fade-in");
            } else {

                entry.target.classList.remove("fade-in");
            }

        });
    }, {
        threshold: 0.2
    });

    items.forEach(function (item) {
        observer.observe(item);
    });
});


})();
