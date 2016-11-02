(function(){
    var login = document.getElementsByClassName('login')[0];
    var register = document.getElementsByClassName('register')[0];

    var loginBtn = document.getElementsByClassName('login-btn')[0];
    var regBtn = document.getElementsByClassName('register-btn')[0];
    var field = document.getElementsByClassName('extra-password-label')[0];

    field.style.display='none';

    var toggle = function(target){
        if(target.classList[0] == 'login'){
            field.style.display='none';
            loginBtn.style.display='block'
            regBtn.style.display='none'

            register.classList.remove('activeTab');
            login.classList.add('activeTab');

        } else if(target.classList[0] == 'register'){
            field.style.display='flex';
            regBtn.style.display='block'
            loginBtn.style.display='none'

            register.classList.add('activeTab');
            login.classList.remove('activeTab');
        }
    }

    register.onclick = function(){
        toggle(register);
    }

    login.onclick = function(){
        toggle(login);
    }
}());