
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
