/* required for templates */
jQuery(document).ready(function($) {
    $( "#header" ).load( "templates/header.tpl" );
    $( "#nav" ).load( "templates/nav.tpl" );
    $( "#footer").load( "templates/footer.tpl" );
    $( "#header" ).load( "../templates/header.tpl" );
    $( "#nav" ).load( "../templates/nav.tpl" );
    $( "#footer").load( "../templates/footer.tpl" );
});
/* required for sticky footer */
$(document).ready(function(){
    $(window).resize(function(){
        var footerHeight = $('.footer').outerHeight();
        var stickFooterPush = $('.push').height(footerHeight);
        $('.wrapper').css({'marginBottom':'-' + footerHeight + 'px'});
    });
    $(window).resize();
});
/* required for fancybox */
$(document).ready(function() {
    $("a#example1").fancybox();
    $("a#example2").fancybox({
        'overlayShow'       : false,
        'transitionIn'      : 'elastic',
        'transitionOut'     : 'elastic'
    });
    $("a#example3").fancybox({
        'transitionIn'      : 'none',
        'transitionOut'     : 'none'	
    });
    $("a#example4").fancybox({
        'opacity'           : true,
        'overlayShow'       : false,
        'transitionIn'      : 'elastic',
        'transitionOut'     : 'none'
    });
    $("a#example5").fancybox();
    $("a#example6").fancybox({
        'titlePosition'     : 'outside',
        'overlayColor'      : '#000',
        'overlayOpacity'    : 0.9
    });
    $("a#example7").fancybox({
        'titlePosition'     : 'inside'
    });
    $("a#example8").fancybox({
        'titlePosition'     : 'over'
    });
    $("a[rel=example_group]").fancybox({
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'titlePosition'     : 'over',
        'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("#various1").fancybox({
        'titlePosition'     : 'inside',
        'transitionIn'      : 'none',
        'transitionOut'     : 'none'
    });
    $("#various2").fancybox();
    $("#various3").fancybox({
        'width'             : '75%',
        'height'            : '75%',
        'autoScale'         : false,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'type'              : 'iframe'
    });
    $("#various4").fancybox({
        'padding'           : 0,
        'autoScale'         : false,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none'
    });
});