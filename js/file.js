

$(document).ready(main) ;

function main() {
	// stuff goes here...
	
}

$(window).on('resize', function(){
	$('#logo').center();
});

// Center the logo
jQuery.fn.center = function() {
    var container = $(window);
    var top = -this.height() / 2;
    var left = -this.width() / 2;
    return this.css('position', 'absolute').css({ 'margin-left': left + 'px', 'margin-top': top + 'px', 'left': '50%', 'top': '50%' });
}

// Error messages
function alertMsg(msg) {
	if (msg.length === 0) return ;
    var genericAlert = $('#genericAlert');
    $('#genericAlertContent').html(msg);
    genericAlert.attr('class', 'alert alert-danger');
    $('#genericAlertIcon').attr('class', 'glyphicon glyphicon-exclamation-sign');
    $('#genericAlertSR').html('Error:');
 	genericAlert.show();
    genericAlert.slideDown() ;
    genericAlert.focus() ;
    setTimeout(function () {
        genericAlert.slideUp() ;
    }, 3000) ;
    setTimeout(function () {
        genericAlert.hide() ;
    }, 3500) ;
}

// Template substitution
String.prototype.tpl = function (o) {
    var r = this;
    for (var i in o) {
        r = r.replace(new RegExp('\\$' + i, 'g'), o[i]);
    }
    return r;
};


$('.modal-body').on('show.bs.modal', function () {
       $(this).find('.modal-body').css({
              width:'auto', //probably not needed
              height:'auto', //probably not needed
              'max-height':'100%'
       });
	});
}
