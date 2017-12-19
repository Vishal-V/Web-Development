var start = new Date().getTime();
		var best = 100;
		var average = '';
		var i = 1;
		delay();

		function colourGenerator() {
			var colour = '#';
			var alpha = '0123456789ABCDEF';
			for (var i = 0; i < 6; i++) {
				colour += alpha[Math.floor((Math.random()) * 16)];
			}
			return(colour);
		}

		function delay() {
			setTimeout(shapeAppear, ((Math.random()) * 2000 + 250));
		}

		function shapeAppear() {
			var width = ((Math.random()) * 200 + 25);
			var height = ((Math.random()) * 250 + 25);
			var top = ((Math.random()) * 250 + 25);
			if (Math.random() > 0.5) {

				document.getElementById('shapeShifter').style.borderRadius = "50%";

			}

			else {
				document.getElementById('shapeShifter').style.borderRadius = "0";
				document.getElementById('shapeShifter').style.width = width + "px";
				document.getElementById('shapeShifter').style.height = width + "px";

			}

			document.getElementById('shapeShifter').style.top = ((Math.random()) * 250) + "px";
			document.getElementById('shapeShifter').style.left = ((Math.random()) * 250) + "px";
			document.getElementById('shapeShifter').style.display = "block";
			start = new Date().getTime();
		}

		document.getElementById('shapeShifter').onclick = function() {
			var end = new Date().getTime();
			var timed = (end - start)/1000;
			document.getElementById('shapeShifter').style.background = colourGenerator();
			document.getElementById('shapeShifter').style.display = "none";
			document.getElementById('time').innerHTML = timed + ' s';

			if (timed < best) {
					best = timed;
					document.getElementById('best').innerHTML = timed + ' s';
			}

			delay();
		}

