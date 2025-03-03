window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById('evaluateBtn').addEventListener('click', function() {
    const questions = document.querySelectorAll('.quiz-question');
    let totalScore = 0;
    
    questions.forEach(question => {
      const selectedValue = question.querySelector('select').value;
      totalScore += parseInt(selectedValue);
    });
  
    const resultText = document.getElementById('resultText');
    const resultDisplay = document.getElementById('resultDisplay');
    
    if (totalScore <= 5) {
      resultText.textContent = ' Posees la chispa emprendedora, solo necesitas encenderla';
    } else if (totalScore <= 10) {
      resultText.textContent = ' Tienes el potencial para emprender y alcanzar tus sueños.';
    } else {
      resultText.textContent = ' Tu potencial para emprender es enorme, ¡atrévete a explorarlo!';
    }
    
    resultDisplay.style.display = 'block';
  });