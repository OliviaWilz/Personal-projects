
// this is the same script shown at the bottom of the source file sudoku.html
// Some small changes were made for testing purposes to test the functionality of the code 
// the changes include removing outputs and things unless they are integral to the purpose of the function

var entries = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var names = new Array(81);
var testArr = new Array(81);
var i=0;
var j=0;
var k = 0;
var a =0;
var b=0;
var c = 0;
var d=0;
var score = 200;
var gameScore=0;
var hintCost = 20;
var mistake = 25;
var numIncorrect =0;
var cube1 = [0, 1, 2, 9, 10, 11, 18, 19, 20];
var cube2 = [3, 4, 5, 12, 13, 14, 21, 22, 23];
var cube3 = [6, 7, 8, 15, 16, 17, 24, 25, 26];
var cube4 = [27, 28, 29, 36, 37, 38, 45, 46, 47];
var cube5 = [30, 31, 32, 39, 40, 41, 48, 49, 50];
var cube6 = [33, 34, 35, 42, 43, 44, 51, 52, 53];
var cube7 = [54, 55, 56, 63, 64, 65, 72, 73, 74];
var cube8 = [57, 58, 59, 66, 67, 68, 75, 76, 77];
var cube9 = [60, 61, 62, 69, 70, 71, 78, 79, 80];
var letters=["A", "B", "C", "D", "E", "F", "G", "H", "I"];
//var solution= new Array(81);
function load()
{
	k = 0;
	for (i=0; i<entries.length; i++)
	{
		for (j=0; j<entries.length; j++)
		{
			names[k]=letters[i] + entries[j];
			//solution[k] = 0;
			
			k = k + 1;
		}
	}
	return names;
}
function solutionGen()
{
	document.getElementById("submissionButton").disabled = true;
	document.getElementById("restartButton").disabled = true; 
	document.getElementById("hintButton").disabled = false; 
	
	entries.sort(function(a, b){return 0.5 - Math.random()}); 
	entries.sort(function(a, b){return 0.5 - Math.random()});
	entries.sort(function(a, b){return 0.5 - Math.random()});
	
	for (i=0; i < entries.length; i++) // fills first square
	{
		j = cube1[i];
		solution[j] = entries[i];
	}
	
	entries.sort(function(a, b){return 0.5 - Math.random()}); 
	entries.sort(function(a, b){return 0.5 - Math.random()});
	entries.sort(function(a, b){return 0.5 - Math.random()});
	entries.sort(function(a, b){return 0.5 - Math.random()});
	
	for (i=0; i < entries.length; i++) // fills fifth square
	{
		j = cube9[i];
		solution[j] = entries[i];
	}
	entries.sort(function(a, b){return 0.5 - Math.random()}); 
	entries.sort(function(a, b){return 0.5 - Math.random()});
	entries.sort(function(a, b){return 0.5 - Math.random()});
	
	for (i=0; i < entries.length; i++) // fills ninth square
	{
		j = cube5[i];
		solution[j] = entries[i];
	}
	
	entries.sort(function(a, b){return 0.5 - Math.random()});
	entries.sort(function(a, b){return 0.5 - Math.random()}); // randomizes array again 
	for( k=0; k<9; k++)
	{
		a = (Math.floor(k/3))*9; // 3 possibilities; k = 0, k = 9, k = 18
		b = (k%3); // 3 possibilities "
		
		for (i=0; i<9; i++)
		{
			if ( entries[i]!= solution[a] && entries[i]!= solution[a+1] && entries[i]!= solution[a+2] && entries[i] != solution[b+30] && entries[i]!= solution[b+39] && entries[i]!= solution[b+48])
			{
				j = cube2[k]; 
				if (solution[j]==0)
				{
					solution[j] = entries[i];
				} else
				{
					solution[j] = solution[j] + "" + entries[i];
				}
				
			}
			if ( entries[i]!= solution[a] && entries[i]!= solution[a+1] && entries[i]!= solution[a+2] && entries[i] != solution[b+60] && entries[i]!= solution[b+69] && entries[i]!= solution[b+78])
			{
				j = cube3[k]; 
				if (solution[j]==0)
				{
					solution[j] = entries[i];
				} else
				{
					solution[j] = solution[j] + "" + entries[i];
				}
				
			}
			if ( entries[i]!= solution[a+30] && entries[i]!= solution[a+31] && entries[i]!= solution[a+32] && entries[i] != solution[b] && entries[i]!= solution[b+9] && entries[i]!= solution[b+18])
			{
				j = cube4[k]; 
				if (solution[j]==0)
				{
					solution[j] = entries[i];
				} else
				{
					solution[j] = solution[j] + "" + entries[i];
				}
				
			}
			if ( entries[i]!= solution[a+30] && entries[i]!= solution[a+31] && entries[i]!= solution[a+32] && entries[i] != solution[b+60] && entries[i]!= solution[b+69] && entries[i]!= solution[b+78])
			{
				j = cube6[k]; 
				if (solution[j]==0)
				{
					solution[j] = entries[i];
				} else
				{
					solution[j] = solution[j] + "" + entries[i];
				}
				
			}
			if ( entries[i]!= solution[a+60] && entries[i]!= solution[a+61] && entries[i]!= solution[a+62] && entries[i] != solution[b] && entries[i]!= solution[b+9] && entries[i]!= solution[b+18])
			{
				j = cube7[k]; 
				if (solution[j]==0)
				{
					solution[j] = entries[i];
				} else
				{
					solution[j] = solution[j] + "" + entries[i];
				}
				
			}
			if ( entries[i]!= solution[a+60] && entries[i]!= solution[a+61] && entries[i]!= solution[a+62] && entries[i] != solution[b+30] && entries[i]!= solution[b+39] && entries[i]!= solution[b+48])
			{
				j = cube8[k]; 
				if (solution[j]==0)
				{
					solution[j] = entries[i];
				} else
				{
					solution[j] = solution[j] + "" + entries[i];
				}
				
			}
		}
		
	}
	
	entries = solution.filter(truth);
	
	for (i=0; i<81; i++)
	{
		if (typeof entries[i] == "number")
		{
			entries[i] = "0";
		}	
	}
	
	j = 0;
	
	
	while (j<54) {
		
		k=9;
		for (i=0; i<81; i++)
		{
			if(entries[i].length < k && entries[i] != "0")
			{
				a = i;
				k = entries[i].length;
			}
			if (k==1)
			{
				i=81;
			}
		}
				
		k = (Math.floor(a/9))*9;
		b = (a%9);
		c = (27*(Math.floor(a/27)))+(3*((Math.floor(a/3))%3));
		
		solution[a] = entries[a].charAt(0);
		
		entries[a] = "0";
			
		for (i=0; i<9; i++)
		{
			if (c+i+(Math.floor(i/3)*6) != a)
			{
				entries[c+i+(Math.floor(i/3)*6)] = entries[c+i+(Math.floor(i/3)*6)].replace(solution[a], "");
			}
			if (k+i != a)
			{
				entries[k+i] = entries[k+i].replace(solution[a], "");
			}
			if (b != a)
			{
				entries[b] = entries[b].replace(solution[a], "");
			}
			b = b + 9; 
		}
		j = j + 1;
		
	}
	
	for (i=0; i<81; i++)
	{
		if (solution[i] == "")
		{	
			a = (Math.floor(i/9))*9;
			solution[i] = 45-Number(solution[a])-Number(solution[a+1])-Number(solution[a+2])-Number(solution[a+3])-Number(solution[a+4])-Number(solution[a+5])-Number(solution[a+6])-Number(solution[a+7])-Number(solution[a+8]);
		}
	}
}
function retrieveGame()
{
	document.getElementById("restartButton").disabled = false;
	document.getElementById("hintButton").disabled = false; 
	
	if(typeof(Storage) !== "undefined")
	{
		load();
		var x = localStorage.getItem("solution");
		var y = localStorage.getItem("entries");
		var z = localStorage.getItem("testArr");
		var c = localStorage.getItem("gameScore");
		
		x = x.split(",");
		y = y.split(",");
		z = z.split(",");
		
		solution = x.filter(truth);
		entries = y.filter(truth);
		testArr = z.filter(truth);
		gameScore = Number(c);
		
		i = 0;
		for(i=0; i<81; i++) // sets empty cells to be fillable
		{
			testArr[i]=Number(testArr[i]);
			if(entries[i].length == 0)
			{
				a = '"'  + names[i] + i.toString() + '"';
				document.getElementById(names[i]).innerHTML = "<input type='number' id=" + names[i] + i.toString() + " onblur='blurred("+ a +", value)' oninput='changed("+ a +")' min='1' max='9'>";
			}else if (testArr[i] != 0)
			{
				a = '"'  + names[i] + i.toString() + '"';
				document.getElementById(names[i]).innerHTML = "<input type='number' id=" + names[i] + i.toString() + " onblur='blurred("+ a +", value)' oninput='changed("+ a +")' min='1' max='9'>";
				b = names[i] + i.toString();
				document.getElementById(b).value = entries[i];
			}else
			{
				document.getElementById(names[i]).innerHTML = "<b>" + entries[i] + "</b>";
			}
			
		}
		document.getElementById("continueGame").disabled = true;
		x = localStorage.getItem("hintCost");
		y = localStorage.getItem("mistake");
		z = localStorage.getItem("numIncorrect");
		hintCost = Number(x);
		mistake = Number(y);
		numIncorrect = Number(z);
		document.getElementById('hintPrice').innerHTML = "Hints cost " + hintCost + " points";
	}
}
function sort(x)
{
	//entries = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	entries = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	load(); // to reset values correctly and load things in
	
	solutionGen(); // generates initial solution
	
	for (i=0; i<81; i++) // converts all solution values to strings, currently a mix between strings and numbers
	{
		solution[i] = solution[i].toString();
	}
	
	checkSolve(); // checks solution for correctness, occasionally there is an issue due to algorithm, resolves in the event of that
	//must now save solution
	
	entries = solution.filter(truth); 
	
	displayedSolution(12); // sends solution to be displayed, later on multiple functions for difficulty
	
	gameScore = 250 + (x*250);
	hintCost = 15 + (5*x);
	mistake = 10 + (x*15);
	document.getElementById('hintPrice').innerHTML = "Hints cost " + hintCost + " points";
	
	x = 48 + (x*4);
	difficulty(x);
	
	for(i=0; i<81; i++) // sets empty cells to be fillable
	{
		document.getElementById(names[i]).innerHTML = "<b>" + entries[i] + "</b>";
		testArr[i] = 0;
		if(entries[i].length == 0)
		{
			var x = '"'  + names[i] + i.toString() + '"';
			document.getElementById(names[i]).innerHTML = "<input type='number' id=" + names[i] + i.toString() + " onblur='blurred("+ x +", value)' oninput='changed("+ x +")' min='1' max='9'>";
		}
	}
	
	document.getElementById("continueGame").disabled = true;
	
	if(typeof(Storage) !== "undefined")
	{
		localStorage.setItem("solution",solution);
		localStorage.setItem("entries",entries);
		localStorage.setItem("testArr",testArr);
		localStorage.setItem("hintCost", hintCost);
		localStorage.setItem("mistake", mistake);
		localStorage.setItem("gameScore",gameScore);
	}
}
function difficulty(y)
{
	var x;
	for(x = 0; x<12; x++)
	{
		a = 0;
		for(i=0; i<81; i++)
		{
			if(entries[i].length == 0)
			{
				a = a + 1;
			}
		}
		a = y - a;
		a = Math.floor(a/8);
		displayedSolution(a);
	}
	
	for(x=0; x<20; x++)
	{
		a = 0;
		for(i=0; i<81; i++)
		{
			if(entries[i].length == 0)
			{
				a +=1;
			}
		}
		a = y-a;
		a = Math.floor(a/2);
		byTwo(a);
	}
	
	for(x=0; x<20; x++)
	{
		a = 0;
		for(i=0; i<81; i++)
		{
			if(entries[i].length == 0)
			{
				a +=1;
			}
		}
		if(a<y-2)
		{
			byOne(y-a);
		}
	}
}
function submit()
{
	var x = 0;
	c = 0;
	if(numIncorrect!=0)
	{
		c = numIncorrect;
	}
	
	numIncorrect = 0;
	
	for(i=0; i<81; i++)
	{
		
		x =names[i] + i.toString();
		
		if(testArr[i] == 2)
		{
			document.getElementById(x).style.backgroundColor = "rgba(255, 100, 100, 0.4)";
			numIncorrect = numIncorrect + 1;
		}else if(testArr[i] == 1)
		{
			document.getElementById(x).style.backgroundColor = "rgba(50, 255, 150, 0.4)";
		}
	}
	
	if(numIncorrect==0 && c==0)
	{
		score=score + gameScore;
	}else if(c !=0 )
	{
		score = score - (numIncorrect*mistake) + ((c-numIncorrect)*10);
	}else
	{
		score = score + gameScore - (numIncorrect*mistake);
	}
	gameScore =0;
	if(typeof(Storage) !== "undefined")
	{
		localStorage.setItem("score",score);
		localStorage.setItem("gameScore",gameScore);
		localStorage.setItem("numIncorrect",numIncorrect);
	}
	document.getElementById('totalScore').innerHTML = "Points: " + score;
}
function giveHint()
{
	score = score - hintCost;
	hintCost = hintCost + 5;
	document.getElementById('hintPrice').innerHTML = "Hints cost " + hintCost + " points";
	if(typeof(Storage) !== "undefined")
	{
		localStorage.setItem("hintCost", hintCost);
		localStorage.setItem("score", score);
	}
	document.getElementById('totalScore').innerHTML = "Points: " + score;
	
	b = 0;
	for(i=0; i<81; i++)
	{
		if(testArr[i]==2)
		{
			a = names[i];
			entries[i] = solution[i];
			testArr[i] = 0;
			document.getElementById(a).innerHTML = solution[i];
			b = 1;
			if(typeof(Storage) !== "undefined")
			{
				localStorage.setItem("testArr",testArr);
				localStorage.setItem("entries",entries);
			}
			i = 81;
		}
	}
	if(b==0)
	{
		for(i=0;i<20;i++)
		{
			a = Math.floor(Math.random()*81);
			if(testArr[a] == 0)
			{
				entries[a] = solution[a];
				testArr[a] = 0;
				document.getElementById(names[a]).innerHTML = solution[a];
				b = 1;
				if(typeof(Storage) !== "undefined")
				{
					localStorage.setItem("testArr",testArr);
					localStorage.setItem("entries",entries);
				}
				i = 20;
			}
		}
	}
	if(b==0)
	{
		for(i=0;i<81;i++)
		{
			if(testArr[i] == 0)
			{
				entries[i] = solution[i];
				testArr[i] = 0;
				document.getElementById(names[i]).innerHTML = solution[i];
				b = 1;
				if(typeof(Storage) !== "undefined")
				{
					localStorage.setItem("testArr",testArr);
					localStorage.setItem("entries",entries);
				}
				i = 20;
			}
		}
	}
}
function restart()
{
	visible(0, 'popup');
	document.getElementById("submissionButton").disabled = true;
	document.getElementById("restartButton").disabled = true;
	
	
	var x;
	for(i=0; i<81; i++)
	{
		if (testArr[i] == 1 || testArr[i] == 2)
		{
			entries[i] = "";
			testArr[i]=0;
			x = names[i] + i.toString();
			document.getElementById(x).value = null;
		}
	}
}
function displayedSolution(x)
{
	for (i=0; i<x; i++)
	{
		a = Math.floor(Math.random()*41);
		b = (Math.floor(a/9))*9 + 8 - (a%9);
		d = 80 - a;
		c = (Math.floor(d/9))*9 + (a%9);
		
		entries[a] = "";
		entries[b] = "";
		entries[c] = "";
		entries[d] = ""; // removed from matrix, four possibilities
		testArr = entries.filter(truth);
		j = checkUnique();
		
		i = i-j;
		if(j==1)
		{
			entries[a] = solution[a];
			entries[b] = solution[b];
			entries[c] = solution[c];
			entries[d] = solution[d];
		}
	}
	
}
function byTwo(x)
{
	for (i=0; i<x; i++)
	{
		a = Math.floor(Math.random()*81); // write function to remove only two values at once
		b = 81 - a; // choose whether to reflect horizontally or vertically
		
		entries[a] = "";
		entries[b] = ""; // can remove some of these
		testArr = entries.filter(truth);
		j = checkUnique();
		
		i = i-j;
		if(j==1)
		{
			entries[a] = solution[a];
			entries[b] = solution[b]; 
		}
	}
}
function byOne(x)
{
	for (i=0; i<x; i++)
	{
		a = Math.floor(Math.random()*81); // write function to remove only two values at once
		
		entries[a] = "";
		testArr = entries.filter(truth);
		j = checkUnique();
		
		i = i-j;
		if(j==1)
		{
			entries[a] = solution[a];
		}
	}
}
function checkUnique(testArray)
{
	var g = 0;
	var e = 0;
	var f = 0;
	var h = 0;
	
	for(h=0; h<20; h++)
	{
		for(j=0; j<81; j++)
		{	
			if(testArray[j].length != 1)
			{
				g = (Math.floor(j/9))*9;
				e = j%9;
				f = (27*(Math.floor(j/27)))+(3*((Math.floor(j/3))%3));
				
				if(testArray[j]=="")
				{
					testArray[j] = "123456789"; // fills testArr so they can be removed again
				}
				
				for(k=0; k<9; k++) // loop removes invald entries from testArr
				{
					if(g+k != j && testArray[g+k].length == 1)
					{
						testArray[j] = testArray[j].replace(testArray[g+k], "");
					}
					if(e + (9*k) != j && testArray[e + (9*k)].length == 1)
					{
						testArray[j] = testArray[j].replace(testArray[e + (9*k)], "");
					}
					if((f+k+((Math.floor(k/3))*6))!= j && testArray[f+k+((Math.floor(k/3))*6)].length == 1)
					{
						testArray[j] = testArray[j].replace(testArray[f+k+((Math.floor(k/3))*6)], "");
					}
				}
				
			}
		}
	}
	for(j=0; j<81; j++)
	{
		if(testArray[j].length != 1)
		{
			return 1;
		}
	}
	return 0;
}
function truth(value)
{
	return 1==1;
}
function checkSolve(solution)
{
	for(i=0; i<9; i++) // checks solution for correctness
	{
		a = Number(solution[i*9]) + Number(solution[(i*9)+1]) + Number(solution[(i*9)+2]) + Number(solution[(i*9)+3]) + Number(solution[(i*9)+4]) + Number(solution[(i*9)+5]) + Number(solution[(i*9)+6]) + Number(solution[(i*9)+7]) + Number(solution[(i*9)+8]);
		b = Number(solution[i]) + Number(solution[i+9]) + Number(solution[i+18]) + Number(solution[i+27]) + Number(solution[i+36]) + Number(solution[i+45]) + Number(solution[i+54]) + Number(solution[i+63]) + Number(solution[i+72]);
		if ( a!=45 || b !=45)
		{
			return false;
			//sort();
		}else{return true;}
	}
}
function blurred(x)
{
	//var x=document.getElementById(dest).value;
	//var y = Number(dest.slice(2,4));
	
	if(x<1 || x > 9 || x%1 != 0)
	{
		//document.getElementById(dest).value = null;
		return false;
	}else
	{
		return true;
		entries[y] = x.toString();
		if (solution[y] == entries[y])
		{
			testArr[y] = 1;
		}else
		{
			testArr[y] = 2;
		}
		
		if(typeof(Storage) !== "undefined")
		{
			localStorage.setItem("testArr",testArr);
			localStorage.setItem("entries",entries);
		}
		document.getElementById("restartButton").disabled = false;
	}
}
function changed(dest)
{
	a = 0;
	for(i=0; i<81; i++)
	{
		if(entries[i].length == 1)
		{
			a += 1;
		}
	}
	if(a>=24)
	{
		document.getElementById("submissionButton").disabled = false;
	}
}
function visible(toggle, destination)
{
	if(toggle==1)
	{
		document.getElementById(destination).style.visibility = 'visible';
	}else
	{
		document.getElementById(destination).style.visibility = 'hidden';
	}
}
function loadedPage()
{
	var x = localStorage.getItem("solution");
	var y;
	
	if(x == null)
	{
		document.getElementById("continueGame").disabled = true;
	}
	
	x = window.innerWidth;
	y = window.innerHeight;
	
	if(y>x)
	{
		document.getElementById('mostOutsideBox').style.width = x + "px";
		document.getElementById('mostMostOutsideBox').style.width = x + "px";
		//a = (x-50)+Math.ceil(x/2);
		a = y-100;
		a = a + "px";
		document.getElementById('mostMostOutsideBox').style.height = a;
		document.getElementById('mostMostMostOutsideBox').style.height = a;
		//document.getElementById('mostOutsideBox').style.height = "100%";
		a = (x-50)/3;
		a = a + "px";
		b = (x-50)/9;
		b = b + "px";
		$('td').css('width', b);
		$('td').css('height', b);
		$('table').css('width', a);
		$('table').css('height', a);
		document.getElementById('case').style.margin = "auto";
		document.getElementById('case').style.width = x-50 + "px";
		document.getElementById('case').style.height = x-50 + "px";
		document.getElementById('buttonBox').style.width = x + "px";
		document.getElementById('buttonBox').style.top = "-175px";
		document.getElementById('buttonBox').style.margin = "auto";
		a =Math.ceil((x/4) - 15);
		b = Math.floor(a/12);
		c = b*2;
		d = Math.floor(a/4);
		i = (d-b)/2;
		i = i + "px";
		a= a + "px";
		b = b + "px";
		c = c + "px";
		d = d + "px"
		$('button').css('width', a);
		$('button').css('height', d);
		$('button').css('font-size', b);
		$('dropdown-content').css('margin-left', "25px");
		$('input').css('font-size', c);
		$('td').css('font-size', c);
		document.getElementById('dropdiv').style.width = a;
		document.getElementById('dropdiv').style.height = b;
		document.getElementById('dropdiv').style.fontSize = b;
		document.getElementById('dropdiv').style.padding =i + " 0px " + i + " 0px";
		document.getElementById('dropdiv').style.marginLeft = "25px";
		document.getElementById('headofDaPage').style.fontSize = c;
		a = Math.ceil((x/4 - 15)/2);
		b = Math.ceil(a/8);
		document.getElementById('popupYes').style.width = a + "px";
		document.getElementById('popupNo').style.width = a + "px";
		document.getElementById('popupYes').style.height = b + "px";
		document.getElementById('popupNo').style.height = b + "px";
		$('body').css('background-image', 'url("https://i.imgur.com/uUX0n5h.jpg")');
		$('body').css('background-size', x + 'px ' + y + 'px');
	}
	
	if(typeof(Storage) !== "undefined")
	{
		c = localStorage.getItem("score");
	}
	if(c==null)
	{
		score = 200;
		localStorage.setItem("score", 200);
	}else
	{
		score = Number(c);
	}
	document.getElementById('totalScore').innerHTML = "Points: " + score;
}

	
