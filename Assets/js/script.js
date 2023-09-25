let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
        const homeSection = document.querySelector('.home');
        const surveySection = document.querySelector('section:not(.home)');

        const startTestButton = document.getElementById('start-test');

        startTestButton.addEventListener('click', function(event) {
            event.preventDefault(); 

            homeSection.style.display = 'none';

            surveySection.style.display = 'block';
        });
});


    const forms = document.querySelectorAll('.form-test');

    forms.forEach((form, index) => {
        const radioButtons = form.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radioButton, radioIndex) => {
            radioButton.addEventListener('change', () => {
                if (index < forms.length - 1) {
                    const nextForm = forms[index + 1];
                    const rect = nextForm.getBoundingClientRect();

                    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    const centerY = window.scrollY + windowHeight / 2;

                    const scrollToY = rect.top + window.scrollY - (windowHeight / 2) + (rect.height / 2);

                    window.scrollTo({
                        top: scrollToY,
                        behavior: 'smooth',
                    });
                }
            });
        });
    });



