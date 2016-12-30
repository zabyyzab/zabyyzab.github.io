$(document).ready(function() { //On DOM load, runs the functions below
	$("#button").click(function() {
		var searchinput = $("#searchtag").val();
		var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e94a48f54f962ad2d1887601e0c7012&tags=" + searchinput + "&safe_search=1&per_page=25&page=5&format=json&nojsoncallback=1";
		var styletag = "<style id = 'mygallerystyle'>" + "#mygallery {" + "position: absolute;" + "padding: 5px;" + "background: white;" + "overflow: scroll;" + "max-width: 1200px;" + "max-height: 550px;" + "}";
		$("#mygallerystyle").replaceWith(styletag); // Keeps the #myGallery Div scrollable
		$.getJSON(flickrAPI, function(jsonitem) { //Calls the Flickr API with a JSON request
			$.each(jsonitem.photos.photo, function(i, jsonitem) { //For each JSON object returned, it creates a usable image URL
				var imageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + "_q.jpg";
				var regularImageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + ".jpg";
				$("#mygallery").append("<a href=" + regularImageURL + ">" + "<img src=" + regularImageURL + "/>" + "</a>");
				console.log(i, jsonitem); //logs the JSON objects in the console command
			});
			$("#mygallery").justifiedGallery({ //This library is used to justify the images evenly in the Div
				rowHeight: 180,
				rel: 'gallery 1',
				lastRow: "justify",
				margins: 4
			}).on('jg.complete', function() { //This library is used to have the popup gallery effect
				$(this).find('a').colorbox({
					maxWidth: '100%',
					maxHeight: '100%',
					opacity: 0.85,
					transition: 'elastic',
					current: ''
				});
			});
		});
		$("#searchtag").val(""); //clear input field on reload
		$("#mygallery").html(""); //clear feed div on reload
		console.clear(); //clear console on reload 
	});
});


// Button click at the top, Enter key at the bottom.


$(document).ready(function() {//On DOM load, runs the functions below
	$("#searchtag").keypress(function(e) {
		if (e.which == "13") {
			var searchinput = $("#searchtag").val();
			var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e94a48f54f962ad2d1887601e0c7012&tags=" + searchinput + "&safe_search=1&per_page=25&page=5&format=json&nojsoncallback=1";
			var styletag = "<style id = 'mygallerystyle'>" + "#mygallery {" + "position: absolute;" + "padding: 5px;" + "background: white;" + "overflow: scroll;" + "max-width: 1200px;" + "max-height: 550px;" + "}";
			$("#mygallerystyle").replaceWith(styletag); // Keeps the #myGallery Div scrollable
			$.getJSON(flickrAPI, function(jsonitem) {  //For each JSON object returned, it creates a usable image URL
				$.each(jsonitem.photos.photo, function(i, jsonitem) {
					var imageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + "_q.jpg";
					var regularImageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + "_b.jpg";
					$("#mygallery").append("<a href=" + regularImageURL + ">" + "<img  alt=" + jsonitem.title + " src=" + regularImageURL + "/>" + "</a>");
					console.log(i, jsonitem); //logs the JSON objects in the console command
				});
				$("#mygallery").justifiedGallery({ //This library is used to justify the images evenly in the Div
					rowHeight: 180,
					rel: 'gallery 2', 
					lastRow: "justify",
					margins: 4
				}).on('jg.complete', function() { //This library is used to have the popup gallery effect
					$(this).find('a').colorbox({
						maxWidth: '100%',
						maxHeight: '100%',
						opacity: .85,
						transition: 'elastic',
						current: ''
					});
				});
			});
			$("#searchtag").val(""); //clear input field on reload
			$("#mygallery").html(""); //clear feed div on reload
			console.clear(); //clear console on reload
		}
	});
});