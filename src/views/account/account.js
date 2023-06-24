import './account.css'
const passwordInput = document.querySelector('.pa');
const togglePasswordButton = document.querySelector('.one>img');

togglePasswordButton.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.src = 'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-hide-password.svg';
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.src = 'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-show-password.svg';
  }
});