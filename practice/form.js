const checkRegisterForm = function() {
    const form = document.getElementById('test-register');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('password-2');
    //const errorElement = document.getElementById('test-error');



    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!isusernameValid(username)) {
            showError('username must have 3 t0 10 characters or numbers');
            return false;
        }
    if (!isPasswordValid(password)) {
            showError('password must have 6-20');
            return false;
        }
    if (password !== confirmPassword) {
            showError(' twice input passwords is not the same');
            return false;
        }

    return true;
};


function isUsernameValid(username) {
    const regex = /^[a-zA-Z0-9]{3,10}$/;
    return regex.test(username);
}
function isPasswordValid(password) {
    return password.length >=6 && password.length <=20;
}

function showError(message){
    const errorElement = document.getElementById('test-error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    }
