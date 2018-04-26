/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
// import '../style/index.scss';

window.onload = function(){
    let pronoun = ['my','yours','his',"her","he","she","they","their"];
    let nouns = ["mom","house","dog","son","cat","spoon"];
    let verbs = ["died","ate","ran"];
    
    function generateExcuse (array1, array2, array3){
        var random1 = Math.floor(Math.random()*(array1.length-1));
        var random2 = Math.floor(Math.random()*(array2.length-1));
        var random3 = Math.floor(Math.random()*(array3.length-1));
        
        const excuse = array1[random1]+" "+array2[random2]+" "+array3[random3];
        return excuse;
    }
    function myButton(){
    var str = generateExcuse(pronoun,nouns,verbs);
    document.querySelector(".js").innerHTML=str;
    }
    let clickbutton = document.querySelector(".btn-danger");
    clickbutton.onclick= myButton;
};