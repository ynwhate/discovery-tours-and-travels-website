// Function to check if element is in viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to start counting animation when element is in viewport
function startCountingIfInView() {
  if (isElementInViewport(document.getElementById('counter-stats'))) {
    $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
    
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
    
      });  
    });
    // Remove the event listener after the counting starts
    window.removeEventListener('scroll', startCountingIfInView);
  }
}

// Event listener to trigger counting when element is in viewport
window.addEventListener('scroll', startCountingIfInView);
// Trigger once on page load in case the section is already in view
startCountingIfInView();
