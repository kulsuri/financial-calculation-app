$(document).ready(function() {
    $("#my-menu").mmenu({
        "navbars": [
            {
                "position": "bottom",
                "content": [
                    "<a class='glyphicon glyphicon-home' href='http://www.thecitysecret.com/'></a>",
                    "<a class='glyphicon glyphicon-user' href='/about'></a>",
                    "<a class='glyphicon glyphicon-comment' href='http://www.thecitysecret.com/page/contact'></a>",
                ],
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
            "pageshadow",
            "widescreen"
        ]
    });
    var API = $("#my-menu").data( "mmenu" );
});