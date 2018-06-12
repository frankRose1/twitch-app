//get JSON from twitch API
	//set up functions to handle the data
		//update the grid items
		//change styles based on channel status
			//starter info needed: 
				//channel logo, channel name, status
$(document).ready(function(){

	const $gridItem = ('.grid-item')
	const URL = 'https://wind-bow.gomix.me/twitch-api';

	function getData(){
		$.getJSON(URL, function(){
			console.log(data);
		});
	}

});