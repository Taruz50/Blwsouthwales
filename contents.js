var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'GOOD EVENING!';
}
else if (hourNow > 12)
{
  greeting = 'GOOD AFTERNOON!';
}
else if (hourNow > 0)
{
  greeting = 'GOOD MORNING!';
}
else {
  greeting = 'HELLO THERE!!!';
}
document.write('<h3>' + greeting + '</h3>');

/*function toggleMobileMenu(menu) {

}*/

const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('open');
})





/*const options = {
  top: '95px',
  bottom: 'unset', // default: '32px'
  right: 'unset', // default: '32px'
  left: '190px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: 'rgba(239, 129, 18, 1)', // default: '#fff'
  backgroundColor: '#353836',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: false // default: true
}*/

/*const darkmode = new Darkmode(options);
darkmode.showWidget();*/
