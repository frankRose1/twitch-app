
$(document).ready(function(){

	const $gridItem = ('.grid-item');

// $.ajax({
// 	 type: 'GET',
// 	 url: 'https://api.twitch.tv/kraken/channels/twitch',
// 	 headers: {
// 	   'Client-ID': 'axjhfp777tflhy0yjb5sftsil'
// 	 },
// 	 success: function(data) {
// 	   console.log(data);
// 	 }
// }); 
	function getData(){
		$.ajax({
			type: 'GET',
			url: `https://api.twitch.tv/kraken/streams/featured?limit=12`,
			headers: {
				'Client-ID': 'mnjxuz1js2d8ix4azjyvpa656pi5w9'
			},
			success: addStreamers,
			error: handleError
		});
	}

	function addStreamers(data){
		console.log(data.featured);
		const streams = data.featured;
		streams.forEach(function(streamer){
			updateDOM(streamer);
		});
	}

	function updateDOM(streamer){
		//create a grid item for each stream response
		const logo = streamer.stream.channel.logo;
		const title = streamer.stream.channel.display_name;
		const status = streamer.stream.channel.status;
		const id = streamer.stream.channel.name;

		const newGridItem = $(`<div class="grid-item">
	                    			<img src="${logo}" alt="Streamer Logo" class="streamer-logo">
	                    			<div class="channel-info">
	                        			<h3 class="name">${title}</h3>
	                        			<p class="status">${status}</p>
	                    			</div>
         						</div>`);
		newGridItem.data('id', id);
		$('#grid').append(newGridItem);
	}

	//use this to display an error in the DOM
	function handleError(err){
		console.log(err);
	}

	//api using the stream's id
	function getStream(){
		const id = $(this).data('id');
		$.ajax({
			method: 'GET',
			url: `https://api.twitch.tv/kraken/channels/${id}`,
			headers: {
				'Client-ID': 'mnjxuz1js2d8ix4azjyvpa656pi5w9'
			},
			success: showModal,
			fail: handleError
		});
		console.log( $(this).data('id'), id );
	}

	//show the modal and fill it with data from the api response
	function showModal(data){
		console.log(data);
		$('.overlay').show();
		$('.modal').fadeIn(1000);
	} 

	function hideModal(){
		//if e.target = overlay || X then close the modal and hide the overlay
		$('.modal').fadeOut(1000);
		$('.overlay').hide();
	} 

	//make an api call using the stream id
	$('#grid').on('click', 'div.grid-item', getStream);

	//smooth scroll
	$('a.down-arr').on('click', function(e){
		e.preventDefault();
		const target = $(this.hash);
		
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 750);
	});

getData();
}); //end doc ready