/**
 * Created by Yotam on 23/12/2014.
 */
/// <reference path="jquery.d.ts"/>
var content = {
    "History": {
        "History a'": [
            {
                "Title": "Title",
                "Content": "Lorem ipsum dolor sit"
            }
        ],
        "History b'": [
            {
                "Title": "Title",
                "Content": "Lorem ipsum dolor sit"
            }
        ]
    },
    "English": {
        "History a'": [
            {
                "Title": "Title",
                "Content": "Lorem ipsum dolor sit"
            }
        ],
        "History b'": [
            {
                "Title": "Title",
                "Content": "Lorem ipsum dolor sit"
            }
        ]
    }
};
var sidebar;
(function (sidebar) {
    var $menu = $('.menu_list');
    var $item = $('.menu_list .item').clone();
    $('.menu_list .item').remove();
    function init() {
        for (var profession in content) {
            var $currect = $item.clone();
            $currect.children('img').attr({ "src": "public/images/sidebar_icons/icon_" + profession + ".png" });
            $currect.children('span').html(profession);
            $currect.appendTo($menu);
        }
    }
    sidebar.init = init;
})(sidebar || (sidebar = {}));
sidebar.init();
//# sourceMappingURL=main.js.map