document.getElementById('login-submit').
    addEventListener('click', function () {
        const userEmail = document.getElementById('user-email').value
        // this is pssword part 
        const userPassword = document.getElementById('user-password').value
        // this is condotion part 
        if (userEmail == 'bap@sontan.com' && userPassword == 'secrate') {
            window.location.href = 'js/banking.html'
        }
    })