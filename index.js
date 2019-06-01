$(".js-show-more").on('click', function (event) {
  // alter 'show more/less' text
  if ($(event.target).html() == 'Show rest of testimonial') {
    $(event.target).html('Show less');
  } else {
    $(event.target).html('Show rest of testimonial');
  }

  // show/hide review
  let text = $(event.target).prev('.js-testimonial-text')
  $(text).toggleClass('testimonial-text-hide')
});
