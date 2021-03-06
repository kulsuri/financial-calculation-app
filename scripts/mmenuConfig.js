$(document).ready(function() {
    $("#my-menu").mmenu({
        "navbars": [
            {
                "position": "bottom",
                "content": [
                    "<a class='glyphicon glyphicon-home' href='http://www.thecitysecret.com/'></a>",
                    "<a class='glyphicon glyphicon-user' href='/about'></a>",
                    "<a class='glyphicon glyphicon-comment' href='http://www.thecitysecret.com/page/contact'></a>"
                ]
            }
        ],
        iconPanels: true,
        counters: true,
        searchfield: true,
        extensions: [
            "theme-white",
            "effect-menu-slide",
            "multiline",
            "pagedim-black",
            "border-offset"
//            "pageshadow",
//            "widescreen"
        ]
    });
    var API = $("#my-menu").data( "mmenu" );
    
    $("#info-menu").mmenu({
        "navbar": {
            "add": false
        },
        "navbars": [
            {
                "position": "bottom",
                "content": [
                    "<a class='glyphicon glyphicon-envelope' href=''></a>",
                    "<a class='fa fa-twitter' href=''></a>",
                    "<a class='fa fa-facebook' href=''></a>"
                ]
            }
        ],
        iconPanels: true,
        "autoHeight": true,
        "dropdown": {
            "drop": true,
//            "tip": false,
//            "event": "hover",
//            "position.of": $("info-button"),
//            "position.x": "right"
        },
        extensions: [
            "theme-white",
            "multiline",
            "border-none"
//            "pagedim",
//            "pageshadow",
        ]
    });
    var API = $("#info-menu").data( "mmenu" );
    
    var animationName = 'animated rollIn';
    var animationEnd = 'webkitAnimationEnd moxAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('#menuButton').on('click', function() {
        $('#menuButton').addClass(animationName).one(animationEnd, function() {
            $(this).removeClass(animationName);
        });
    });
    
    $('#infoButton').on('click', function() {
        $('#infoButton').addClass('animated jello').one(animationEnd, function() {
            $(this).removeClass('animated jello');
        });
    });
    
});