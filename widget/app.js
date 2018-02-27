


define(["lib/jquery.min"], function() {
   require(["app/UserControl"], function() {
        var page_name = $("#script_page").attr("page");
        switch (page_name) {
            case "index":
                require(["app/index"], function($obj) {
                    $obj.init();
                });
                break;
            case "canvas":
                require(["app/canvas"], function($obj) {
                    $obj.init();
                });
                break;
            case "canvas_1":
                require(["app/canvas_1"], function($obj) {
                    $obj.init();
                });
                break;
            case "canvas_2":
                require(["app/canvas_2"], function($obj) {
                    $obj.init();
                });
                break;
            case "canvas_3":
                require(["app/canvas_3"], function($obj) {
                    $obj.init();
                });
                break;
            
        }
    });
});
