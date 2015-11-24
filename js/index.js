$(document).ready(function(){
  $('#quote_form').submit(function(e){
    e.preventDefault()
    var form = $('#quote_form')
    $.ajax({
      method: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize(),
      dataType: 'xml',
      success: function(xml){
        $('.display_quote').css('display', 'none');
        $('.display_quote .quote').html($(xml).find("quote").text());
        $('.display_quote .author').html($(xml).find("author").text());
        $('.display_quote').fadeIn()
      }
    });
  })
});