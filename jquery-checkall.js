/*!
 * jQuery-checkAll Plugin Library - snapshot
 * http://github.com/leafriend/jquery-checkall
 *
 * Copyright 2005, 2014 leafriend
 * Released under the MIT license
 * http://raw.githubusercontent.com/leafriend/jquery-checkall/master/LICENSE
 *
 * Date: 2014-10-13T01:00Z
 */
(function($) {
    $.fn.checkAll = function() {

        var args;
        if (arguments.length == 0) {
            args = ["input[type=checkbox]"];
        } else {
            args = arguments;
        }

        return this.each(function() {

            $(this).click(function () {
                var checked = $(this).prop("checked");
                for (var i = 0; i < args.length; i++) {
                    $(args[i]).prop("checked", checked);
                }
            });

        });

    };
}(jQuery));
