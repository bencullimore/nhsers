$(document).ready(function(){

  GOVUK.toggle.init();

  // Initialise auto-suggest fields
  //$('.auto-suggest').selectToAutocomplete();


  // Uses radio buttons to emulate a more usable select box
  $( ".js-form-select label" ).click(function() {
  	$( this ).closest('.js-form-select').toggleClass( "open" );
  });

  // Postcode lookup
  // Hide address list if user changes postcode
	var lastValue = '';
	$("#postcode").on('change keyup paste mouseup', function() {
	    if ($(this).val() != lastValue) {
	        lastValue = $(this).val();
  			$( "#address-list" ).addClass("js-hidden");
  			$( "#submit-postcode" ).removeClass("js-hidden");
	    }
	});

  $('dl.accordion dd:eq(0) input[type="checkbox"]').change(function(){
    var dayOfWeek = $(this).attr('id');
    this.checked ?
      $('.main table tr td p:contains('+dayOfWeek+')').parents('tr').removeClass('day-hide').not('.time-hide').show() :
      $('.main table tr td p:contains('+dayOfWeek+')').parents('tr').addClass('day-hide').hide()

    $('.main table tr:visible:odd, .main table tr:visible:odd td').css('background-color','transparent');
    $('.main table tr:visible:even, .main table tr:visible:even td').css('background-color','#eff3f5');
  });

  $('dl.accordion dd:eq(1) div:eq(0) input[type="checkbox"]').change(function(){
    $('.main table tr:odd').not(':hidden').css('background-color','#f9f9f9');
    $('.main table tr:even').not(':hidden').css('background-color','transparent');
    var timeOfDay = $(this).attr('value');
    var afternoon = ['12','1','2','3'];
    var evening = ['4','5','6','7','8'];
    var thisCheckbox = $(this);

    if (timeOfDay == 1) { // Morning (All AM)
      this.checked ?
        $('.main table tr td p:contains("am")').parents('tr').removeClass('time-hide').not('.day-hide').show() :
        $('.main table tr td p:contains("am")').parents('tr').addClass('time-hide').hide();
    }
    else {
      $('.main table tr td:nth-child(2) p').each(function(){
        var hour = $(this).text().split('.');
        var thisPara = $(this);

        if (timeOfDay == 2){ // Afternoon (12-3)
          if ($.inArray(hour[0],afternoon) > -1){
            $(thisCheckbox).is(':checked')?
              $(thisPara).parents('tr').removeClass('time-hide').not('.day-hide').show():
              $(thisPara).parents('tr').addClass('time-hide').hide();
          }
        }
        else { // Evening (4-8)
          if ($.inArray(hour[0],evening) > -1){
            $(thisCheckbox).is(':checked')?
              $(thisPara).parents('tr').not('.day-hide').removeClass('time-hide').show():
              $(thisPara).parents('tr').addClass('time-hide').hide();
          }
        }
      });
    }
    $('.main table tr:visible:odd, .main table tr:visible:odd td').css('background-color','transparent');
    $('.main table tr:visible:even, .main table tr:visible:even td').css('background-color','#eff3f5');
  });

});


jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
});

function goBack() {
    window.history.back()
}
