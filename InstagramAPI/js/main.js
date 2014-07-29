//http://cfg.good.is/challenges/instagram-api 

$(document).ready(function() {
	var tag = "SIB";
	var count = 4;
	var client_id = '97437151d4c9456bb6c2b36a500e93b4';
	//var access_token = 'f214d0f8b78ac4fbc82caa567cd0603a1';
	//var access_parameters = {access_token:access_token};


	function grabImages(){
		var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=' + client_id; + '?callback=?';
		//var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=' + client_id + '?&count=' + count;

		$.getJSON('https://api.instagram.com/v1/media/popular?client_id=97437151d4c9456bb6c2b36a500e93b4', function (data){
			alert(data);
		});
		//$.getJSON(instagramUrl, onDataLoaded(json));
	}

	function onDataLoaded(instagram_data){
		// instagram_data.meta is where the secret messages from Instagram live
  		// and instagram_data.meta.code holds the status code of the request
  		// 404 means nothing was found, and 200 means everything is all good so...
  		alert('in onDataLoaded')
		if(instagram_data.meta.code == 200) {
			// create a variable that holds all returned payload
			var photos = instagram_data.data;
			alert("in 200");

			//as long as that variable holds data (does not = ) then...
			if(photos.length > 0){
				//since there are multiple objects in the payload we have
      			//to create a loop
      			for (var key in photos){
      				//we create a variable for one object
      				var photo = photos[key];
      				//then we create and append to the DOM an  element in jQuery
        			//the source of which is the thumbnail of the photo
        			$('#target').append();
    			}
      		} else {
					//if the photos variable doesn't hold data
					$('#target').append("Hmm, we couldn't find any photos.");
			}
		} else {
			alert("not 200");
			alert(JSON.stringify(instagram_data, null, 3));
			//if we didn’t get a 200 (success) request code from instagram
  			//then we display instagram’s error message instagram
  			var error = data.meta.error_message;
  			$('#target').append("Something happened, Instagram said: " + error);
  			alert("here");
		}
	}

	grabImages();

});