
var color = ["Tomato","Orange","DodgerBlue","MediumSeaGreen","Gray","SlateBlue","Violet"];

var current_color;
var author = 'nothing in here';
var quote = 'no';

 function change(){
 var new_color = Math.floor(Math.random()*color.length);
   if(current_color == new_color)
     {
     new_color = Math.floor(Math.random()*color.length);
     }
 current_color = new_color;
 return new_color;
}
 function getQuote(){
  
   $.ajax({
     
     headers: {
      "X-Mashape-Key": "m8LR7U7OQDmsh0lCpdlcXr1WzRcRp1hbtCvjsnXG1Dj863Wynj",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
    
    success:function(r)
     {
       if (typeof r =='string')
         {
           r= JSON.parse(r);
         }
       author = r.author;
       quote = r.quote;
       
  
    $("#quote").html('"'+quote+'"');
    $("#author").html('- '+author);
     $("h1,p").css("color",color[current_color]);
       
  $('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + '- '+author));
       
     }
 
        });
    
   
 }

  $(document).ready(function(){
  getQuote();
  $("body,button").css("background-color",color[change()]);
  
    $("button").click(function() {
  $("body,button").css("background-color",color[change()]);
    getQuote();
    
    });
  
});
