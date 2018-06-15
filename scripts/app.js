//get JSON from twitch API
	//set up functions to handle the data
		//update the grid items
		//change styles based on channel status
			//starter info needed: 
				//channel logo, channel name, status
				//"https://api.twitch.tv/kraken/streams?channel=streamer1,streamer2,streamer3,streamer4&client_id=<<your client ID>>"
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
		const name = streamer.stream.channel.display_name;
		const status = streamer.stream.channel.status;
		const id = streamer.stream._id;

		const newGridItem = $(`<div class="grid-item">
	                    			<img src="${logo}" alt="Streamer Logo" class="streamer-logo">
	                    			<div class="channel-info">
	                        			<h3 class="name">${name}</h3>
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

	function showModal(e){
		console.log( $(e.target).data('id') );
	}

	//use event delegation for the grid items
	$('#grid').on('click', 'div.grid-item', showModal)

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