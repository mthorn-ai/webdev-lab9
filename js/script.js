function init(){
 var button = document.getElementById('entrybutton');

  function showText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Matthew Thornton: " + textbox.value);
  }
  
  button.addEventListener('click', showText);
}





window.addEventListener('load', init);
