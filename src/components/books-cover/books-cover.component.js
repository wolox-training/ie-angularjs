import bookCover from './../../assets/book-cover.png';
import badge from './../../assets/badge.png';

const angular = require('angular');

angular.module('app-bootstrap')
  .component ('cover', {
      template : require('./books-cover.html'),
      controller: ['$stateParams', 'booksService', function ($stateParams, booksService) {
        const bookId = parseInt($stateParams.bookId);
        this.bookCover = bookCover;
        this.badge = badge;
        this.book = booksService.getBook(bookId);
      }]

  });
