$(document).ready(function(){
	const $gridItem = ('.grid-item');

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
		$('.modal').css('display', 'flex');
		//fill the modal with data
		console.log(data);
		$('.banner-img').attr('src', data.video_banner); //set the banenr image
		$('.modal-logo').attr('src', data.logo);
		$('.modal-title').text(data.display_name);
		//cols
			
		$('.views').text(data.views);
		$('.followers').text(data.followers);
		data.mature ? $('.audience').text('For Mature Audiences') : $('.audience').text('For All Audiences') ;
		
		$('.twitch-link').attr('href', data.url);
		$('.playing').text(data.game);
		data.partner ? $('.partner').text("Twitch Partner") : $('.partner').text("Follow me on Twitch to help me get partnered!");
			//data.mature -> boolean
		//show the modal
		$('.overlay').show();
		$('.modal').fadeIn(1000);
	} 

	function hideModal(e){
		//if e.target = overlay || X then close the modal and hide the overlay
		e.stopPropagation();//so that it doesnt trigger other events
		$('.modal').fadeOut(1000);
		$('.overlay').hide();
	
	} 

	$('#grid').on('click', 'div.grid-item', getStream); //make a get request using the stream id
	$('.overlay').on('click', hideModal);
	$('.close').on('click', hideModal);

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