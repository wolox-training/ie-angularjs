import logo from './../../assets/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('signup', {
    template: require('./signup.html'),
    controller: [function() {
      this.emailValidation = /^(?!.*\.\.)[^.][^\s@]+[^.]@[^\-][^\s@]+\.[^\s@]{2,}$/;;
      this.logo = logo;
      this.validPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
      this.validForm = function() {
        alert('Form requirements are ok!');
      };
    }]
  });

