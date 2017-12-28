$(".js-show-more").on('click', function(event) {
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


function initMap() {
  console.log('initMap');
  // Initial lat/lng for pageload
  // Create Google Map centered on startLatLng. 
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat:52.6351, lng:1.2756},
  });

  new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: {lat:52.6451,lng:1.2495},
            radius: 1000
          });
  }
