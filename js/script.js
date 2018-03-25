

  // GENERAL SETTING
  window.sr = ScrollReveal({ reset: true });

  sr.reveal('.main-media', {
    viewFactor: 0.3,
    duration: 1000,
    scale: 1,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    distance: '30px',
    reset: false
  });

  sr.reveal('.secondary-media', {
    viewFactor: 0.3,
    duration: 1000,
    scale: 1,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    distance: '30px',
    reset: false
  });

  sr.reveal('.mobile-media', {
    viewFactor: 0.3,
    duration: 1000,
    scale: 1,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    distance: '30px',
    reset: false
  });

  sr.reveal('.mobile-media-2', {
    viewFactor: 0.3,
    duration: 1000,
    scale: 1,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    distance: '30px',
    reset: false
  });

  sr.reveal('.small-media', {
    viewFactor: 0.3,
    duration: 1000,
    scale: 1,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    distance: '30px',
    reset: false
  });

  sr.reveal('.alt-media', {
    viewFactor: 0.3,
    duration: 1000,
    scale: 1,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    distance: '30px',
    reset: false
  });

  sr.reveal('.medium-media', {
    viewFactor: 0.3,
    duration: 1000,
    scale: 1,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    distance: '30px',
    reset: false
  });

  sr.reveal('.home-reveal', {
    viewFactor: 0.1,
    duration: 1000,
    scale: 1,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    distance: '30px',
    reset: false
  });

  // sr.reveal('.bottom-nav-in', {
  //   viewFactor: 0.3,
  //   duration: 1000,
  //   scale: 1,
  //   easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  //   distance: '80px',
  //   reset: false
  // });

  $('.bottom-nav-link').click(function(e) {
    e.preventDefault();
    href = $(this).attr('href');
    $("body").fadeOut( 450, function() {
        window.location = href;
    });
  });

$('.home-link').click(function(e) {
  e.preventDefault();
  href = $(this).attr('href');
  $("body").fadeOut( 450, function() {
      window.location = href;
  });
});
