<html>
	<body>
		<a href="http://www.google.com" id="urlredirect" target="_blank">
			<img src="" id="slide" style="max-width:100%">
		</a>
		<script type="text/javascript">			
			function imageExists(url, callback) {
				var img = new Image();
				img.onload = function() { callback(true); };
				img.onerror = function() { callback(false); };
				img.src = url;
			}
		
			DAM = "https://github.com/sustem/lindaswaves/blob/master/dam.png?raw=true";
			DJ = "https://github.com/sustem/lindaswaves/blob/master/dj.png?raw=true";
			HERR = "https://github.com/sustem/lindaswaves/blob/master/herr.png?raw=true";
			HJ = "https://github.com/sustem/lindaswaves/blob/master/hj.png?raw=true";	
			SSC = "https://github.com/sustem/lindaswaves/blob/master/ssc.png?raw=true";	
			URL = "http://www.lindaswaves.se/";
			
			var pictures = [];
			var urls = [];
           
			imageExists(DAM, function(exists) {
				if (exists == 1) {
					pictures.push(DAM);
					urls.push(URL);
				}
			});			
						
			imageExists(DJ, function(exists) {
				if (exists == 1) {
					pictures.push(DJ);
					urls.push(URL);
				}
			});			
	
			imageExists(HERR, function(exists) {
				if (exists == 1) {
					pictures.push(HERR);
					urls.push(URL);
				}
			});			
	
			imageExists(HJ, function(exists) {
				if (exists == 1) {
					pictures.push(HJ);
					urls.push(URL);
				}
			});			
	
			imageExists(SSC, function(exists) {
				if (exists == 1) {
					pictures.push(SSC);
					urls.push(URL);
				}
			});			
	
			var step = 0;

			var picture = document.getElementById("slide");
			var redirect = document.getElementById("urlredirect");
			
			function slideit(){
				picture.src = pictures[step];
				redirect.href = urls[step];

				if(step < pictures.length - 1) {
					step++;
				} else {
					step = 0;
				}
			}
			
			window.onload = function() {            
				slideit();
			}
			
			// Sätt ett interval, så behöver den inte uppdatera en timeout varje gång metoden körs			
			setInterval("slideit()", 4000);
		</script>
	</body>
</html>
