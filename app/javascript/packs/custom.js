$(document).ready(function() {
  var winText = 'You win!',
      loseText = 'You lose!';

  $('.shape').click(function() {
    var userChoice = $(this).data('choice').toLowerCase();
    var finalText = 'Identical throws tie';
    $('#choice-modal').modal('show');
    $('.user-choice').html(userChoice);

    $.ajax({
      url: '/generate_choice',
      contentType: 'application/json',
      method: 'POST',
      success: function(data) {
        var computerChoice = data.shape.toLowerCase();
        $('.computer-choice').html(computerChoice);
        finalText = compareShapes(userChoice, computerChoice);
        $('.final-text').html(finalText);
      }
    });
  });

  $('.try-again').click(function() {
    window.location.reload();
  });

  function compareShapes(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Identical throws tie';
    }
    if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        return winText;
      } else {
        return loseText;
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return winText;
      } else {
        return loseText;
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return loseText;
      } else {
        return winText;
      }
    }
  };

  $('#choice-modal').on('hidden.bs.modal', function() {
    var spinner = '<div class="spinner-border text-primary" role="status">' +
                    '<span class="sr-only">Loading...</span>' +
                  '</div>';
    $('.computer-choice').html(spinner);
    $('.final-text').html('');
  });
});
