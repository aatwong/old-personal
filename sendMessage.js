

$(document).ready(function() {
  $('#sendMessageButton').on('click', function() {
    if($('#spamCheck').is(':checked') && $('#anonMessage').val() != '') {
      //send message
      $('#anonMessage').val('');
      //jump to new page?
      alert('Thank you. Your message has been sent.');

    }
    else if ($('#anonMessage').val() == ""){ //Improve this check to include spaces; non-messages
      alert('Please enter a message.')
    }
    else {
      alert('Please assert that you are not a robot');
    };
  });
});
