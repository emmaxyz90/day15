function dayOfMonth(){
			// Storing the value of the user input into the variable (month)
				var month = document.getElementById('userinput').value;
				
				// Assigning each month to a variable 
				var jan = "January"; 
				var feb ="February"; 
				var mar = "March"; 
				var apr = "April"; 
				var may = "May"; 
				var jun = "June";
				var jul = "July"; 
				var aug = "August";
				var sept = "September";
				var oct ="October"; 
				var nov = "November"; 
				var dec = "December";
			
				//Conditional statement that checks the user input and gives the days output. 
				if (month == jan){
					document.getElementById('result').innerHTML = '31';					
				}else if (month == feb){
					document.getElementById('result').innerHTML = '28';
				}else if (month == mar){
					document.getElementById('result').innerHTML = '31';
				}else if (month == apr){
					document.getElementById('result').innerHTML = '30';
				}else if (month == may){
					document.getElementById('result').innerHTML = '31';
				}else if (month == jun){
					document.getElementById('result').innerHTML = '30';
				}else if (month == jul){
					document.getElementById('result').innerHTML = '31';
				}else if (month == aug){
					document.getElementById('result').innerHTML = '31';
				}else if (month == sept){
					document.getElementById('result').innerHTML = '30';
				}else if (month == oct){
					document.getElementById('result').innerHTML = '31';
				}else if (month == nov){
					document.getElementById('result').innerHTML = '30';
				}else if (month == dec){
					document.getElementById('result').innerHTML = '31';
				}
			}
	