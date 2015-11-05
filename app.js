/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';
var punteggio;

$(document).ready(function(){
var i = 0;
punteggio=0;
var tot= 7;
    $(".current").text(data[i].phrase_en);  
   
        $(".btn opt-continue").click(function(){
            console.log("handler");
            var frase = $("input[class=form-control]").val();
            if (frase == data[i].phrase_de){
                punteggio++;
            }
            
            i++;
        });
    
    $("#tot-good").text(punteggio);
    $("#tot").text(tot);
    
    
    
});







