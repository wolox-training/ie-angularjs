import logo from './../../assets/LogoWolox.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component('login', {
    template: require('./login.html'),
    controller: [function() {
      this.emailValidation = /^(?!.*\.\.)[^.][^\s@]+[^.]@[^\-][^\s@]+\.[^\s@]{2,}$/;;
      this.logo = logo;
      this.validForm = function() {
        alert('Form requirements are ok!');
      };
    }]
  });

