$(document).ready(function(){
  // Bootstrap plugins
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('.alert').alert();

  // Select picker plugin
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.selectpicker').selectpicker('mobile');
  } else {
    $('.selectpicker').selectpicker();
  };

  // Sidebar toggles
  $('[data-toggle=sidebar-primary]').click(function(e) {
      e.preventDefault();
      $('.dashboard-wrapper').toggleClass('toggle-sidebar-primary');
  });
  $('[data-toggle=sidebar-secondary]').click(function(e) {
      e.preventDefault();
      $('.dashboard-wrapper').toggleClass('toggle-sidebar-secondary');
  });

  // Summernote plugin
  $('.rtf-editor').summernote({
    height: 300
  });

  // Autosize plugin
  $('textarea').on('focus', function(){
    $(this).autosize();
  });

  // jquery-labelauty plugin
  $('.labelauty').labelauty({minimum_width: "155px"});
  $('.labelauty-no-label').labelauty({label:false});

  // keep dashboard min height
  $('.dashboard-wrapper').css('min-height', $(window).height());

  // initialize the fullcalendar.js
  $('#calendar, #calendar-example').fullCalendar({
    // example data
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    defaultDate: '2014-11-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2014-11-01'
      },
      {
        title: 'Long Event',
        start: '2014-11-07',
        end: '2014-11-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2014-11-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2014-11-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2014-11-11',
        end: '2014-11-13'
      },
      {
        title: 'Meeting',
        start: '2014-11-12T10:30:00',
        end: '2014-11-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2014-11-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2014-11-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2014-11-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2014-11-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2014-11-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2014-11-28'
      }
    ]
  });
// end of document.ready
});

$(window).load(function() {
  // Isotope plugin
  var $container = $('.isotope-container').isotope({});
  $container.isotope({
    resizable: false,
    layoutMode : 'masonry',
    itemSelector : '.isotope-item'
  });
  $('#filters a').click(function(){
    // define selector
    var selector = $(this).attr('data-filter');
    // define options
    $container.isotope({ filter: selector });
    // remove `active` class
    $(this).parent().parent().find('.active').removeClass('active');
    // reassign `active` class to selected filter
    $(this).parent().addClass('active');
    return false;
  });

  // Countdown plugin
  var countdownDate = $('.countdown').attr('data-date');
  $('.countdown').countdown(countdownDate, function(event) {
    $(this).html(event.strftime(
        '<li><span class="date-digit">%D</span> <span class="date-text">Days</span></li>'
      + '<li><span class="date-digit">%H</span> <span class="date-text">Hours</span></li>'
      + '<li><span class="date-digit">%M</span> <span class="date-text">Minutes</span></li>'
      + '<li><span class="date-digit">%S</span> <span class="date-text">Seconds</span></li>'
    ));
  }).on('finish.countdown', function(event) {
    // redirect on finish
    window.location = 'index.html';
  });
});

