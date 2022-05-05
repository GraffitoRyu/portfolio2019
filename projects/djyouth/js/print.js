$(document).ready(function() {
  $('button.print-page').on('click', function(e) {
    e.preventDefault();
    $('.board-view').print();
  });
});
