function toggleMenu() {
  const mobileSidebar = document.querySelector('.mobile-sidebar');
  mobileSidebar.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
}


// cart item cout 
$(document).ready(function() {
  const ticketCount = $('.card-list .styles__item--17Ov3').length;
  $('#ticket-count').text(ticketCount);
});

// ___________
$(document).ready(function() {
  const selectedTickets = [];

  function updateContinueButton() {
    $('#continue-btn').toggleClass('continue-btn-selected', selectedTickets.length > 0);
    $('#selected-count').text(selectedTickets.length);
  }

  $('.ticket-checkbox').on('change', function() {
    const ticketId = $(this).closest('.ticket-select-card').find('.ticket-id').text();
    $(this).is(':checked') ? selectedTickets.push(ticketId) : selectedTickets.splice(selectedTickets.indexOf(ticketId), 1);
    updateContinueButton();
  });

  $('#select-all').on('click', function() {
    $('.ticket-checkbox').prop('checked', true).trigger('change');
  });

  $('#deselect-all').on('click', function() {
    $('.ticket-checkbox').prop('checked', false).trigger('change');
  });

  $('#continue-btn').on('click', function() {
    if (selectedTickets.length > 0) {
      $('#ticket-section').addClass('fade-out');
      setTimeout(function() {
        $('#ticket-section').hide();
        $('#form-section').fadeIn(500).addClass('fade-in');
      }, 500);
    }
  });
});

$(document).ready(function() {
  // Event handler for the link click
  $('.ticket-action').on('click', function(event) {
      event.preventDefault(); // Prevent default navigation
      const targetUrl = $(this).attr('href'); // Store the link URL

      // Show the modal
      $('.overlay').fadeIn();

      // Hide the modal after 10 seconds and navigate
      setTimeout(function() {
          $('.overlay').fadeOut();
          window.location.href = targetUrl; // Redirect to the stored URL
      }, 1300); // 10 seconds
  });
});
