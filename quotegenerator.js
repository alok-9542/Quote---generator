
    var str1 = ['"The greatest glory in living lies not in never falling, <br/>but in rising every time we fall."',
    '"The way to get started is to quit talking and <br/>begin doing."',
    '"Your time is limited, so dont waste it living <br/>someone elses life. Dont be trapped by dogma<br/> which is living with the results of <br/>other peoples thinking."',
    '"If life were predictable it would cease to be life, and be without flavor."',
    '"If you look at what you have in life, youll always have <br/>more. If you look at what you dont have in <br/>life, youll never have enough."',
    '"Life is what happens when youre busy making other plans."',
    '"If you set your goals ridiculously high and its a failure you <br/> will fail above everyone elses success."',
    '"Spread love everywhere you go. Let no one ever come to you without <br/>leaving happier."',
    '"When you reach the end of your rope, tie a knot <br/>in it and hang on."',
    '"Always remember that you are absolutely unique. <br/>Just like everyone else"'];


   
    var author=["-Nelson Mandela","-Walt Disney","-Steve Jobs","-Eleanor Roosevelt","-Oprah Winfrey"
   ,"-James Cameron","-John Lennon","-Mother Teresa","-Franklin D. Roosevelt","-Margaret Mead"];

    var d1bcolor = ["green","blue","purple","orange","yellow","red","greenyellow","violet","pink","indigo"];
    var d2bcolor = ["lightgreen","lightblue","lightpurple","lightorange","lightyellow",
	"lightred","lightgreenyellow","lightviolet","lightpink","lightindigo"];


    function newQuotes(){
		
		        let date = new Date();
                let hrs = date.getHours();
                let mins = date.getMinutes();
                let secs = date.getSeconds();

		
		        if(hrs>=0 && hrs<12)
				{
					document.getElementById("n1").innerHTML="Let's start our morning with a new quote";
				}
				else if(hrs>=12 && hrs<16)
				{
					document.getElementById("n1").innerHTML="Let's start our afternoon with a new quote";
				}
				else if(hrs>=16 && hrs<20)
				{
					document.getElementById("n1").innerHTML="Let's start our evening with a new quote";
				}
				else
				{
					document.getElementById("n1").innerHTML="Let's start our night with a new quote";
				}
				
				
        var randomNumber = Math.floor(Math.random() * str1.length);

        document.getElementById("j1").innerHTML = str1[randomNumber];
        document.getElementById("j2").innerHTML = author[randomNumber];
        document.getElementById("j1").style.color = d1bcolor[randomNumber];
        document.getElementById("j2").style.color = d1bcolor[randomNumber];
        document.getElementById("d1").style.backgroundColor = d1bcolor[randomNumber];
        document.getElementById("l1").style.backgroundColor = d2bcolor[randomNumber];
        document.getElementById("b1").style.backgroundColor = d1bcolor[randomNumber];
    }


