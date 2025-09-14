// pour le jeu du rocher

const rocher1 = document.getElementById('roc1');
const rocher2 = document.getElementById('roc2');
const rocher3 = document.getElementById('roc3');
const rocher4 = document.getElementById('roc4');
const messageDiv = document.getElementById('message');
var rocherlezardhere = Math.floor(Math.random() * 4 + 1);

rocher1.addEventListener('click', () => {
    if (rocherlezardhere == 1) {

        messageDiv.textContent = 'Vous avez trouvé le lézard ! :)';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Vous n\'avez pas trouvé le lézard. :(';
        messageDiv.style.color = 'red';

    }
    rocherlezardhere = Math.floor(Math.random() * 4 + 1);
});

rocher2.addEventListener('click', () => {
    if (rocherlezardhere == 2) {

        messageDiv.textContent = 'Vous avez trouvé le lézard ! :)';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Vous n\'avez pas trouvé le lézard. :(';
        messageDiv.style.color = 'red';

    }
    rocherlezardhere = Math.floor(Math.random() * 4 + 1);
});

rocher3.addEventListener('click', () => {
    if (rocherlezardhere == 3) {

        messageDiv.textContent = 'Vous avez trouvé le lézard ! :)';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Vous n\'avez pas trouvé le lézard. :(';
        messageDiv.style.color = 'red';

    }
    rocherlezardhere = Math.floor(Math.random() * 4 + 1);
});

rocher4.addEventListener('click', () => {
    if (rocherlezardhere == 4) {

        messageDiv.textContent = 'Vous avez trouvé le lézard ! :)';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Vous n\'avez pas trouvé le lézard. :(';
        messageDiv.style.color = 'red';

    }
    rocherlezardhere = Math.floor(Math.random() * 4 + 1);
});


