$(function() {
  $('.sinput').submit(function(event){
    event.preventDefault();

    var input = $('#sinput').val();
    var words = input.split(' ');
    var owords = [];

    words.forEach(function(word){
      if (word.length >= 3){
        owords.push(word);
      };
    });

    console.log(words);
    console.log(owords);
    var rwords = owords.reverse();

    $('.soutput').text(rwords.join(' '));



  });
});
