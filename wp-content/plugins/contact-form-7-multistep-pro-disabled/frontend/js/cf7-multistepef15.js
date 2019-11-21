jQuery(document).ready(function($){
    $(".multistep-cf7-next").click(function(e){
        /*
        * Check validates and required
        */
        $(this).closest('form').submit();
        return false;
    })
    $(".multistep-cf7-prev").click(function(e){
        $(".wpcf7-response-output").addClass("hidden");
        var tab_current = parseInt( $("#wpcf7_check_tab").val() );
        var prev_tab = tab_current - 1;
        $(".cf7-tab").addClass("hidden");
        $("#cf7-tab-"+prev_tab).removeClass("hidden");
        $("#wpcf7_check_tab").val( prev_tab  );
        $(".cf7-display-steps-container li").removeClass("active");
        $(".cf7-display-steps-container li").removeClass("enabled");
        $(".cf7-display-steps-container .cf7-steps-"+prev_tab).addClass("active");
        for(var i=1;i<prev_tab;i++){
            $(".cf7-display-steps-container li.cf7-steps-"+i).addClass("enabled");
        }
        $(".multistep-check input").val("");
        var top = $('.container-multistep-header').offset().top-200;

        $('html, body').animate({scrollTop : top},800);
        return false;
    })
    $(".multistep-cf7-first").click(function(event) {
        $(".wpcf7-response-output").addClass("hidden");
        var prev_tab =  1;
        $(".cf7-tab").addClass("hidden");
        $("#cf7-tab-"+prev_tab).removeClass("hidden");
        $("#wpcf7_check_tab").val( prev_tab  );
        $(".cf7-display-steps-container li").removeClass("active");
        $(".cf7-display-steps-container li").removeClass("enabled");
        $(".cf7-display-steps-container .cf7-steps-"+prev_tab).addClass("active");
        for(var i=1;i<prev_tab;i++){
            $(".cf7-display-steps-container li.cf7-steps-"+i).addClass("enabled");
        }
        $(".multistep-check input").val("");
        var top = $('.container-multistep-header').offset().top - 200;

        $('html, body').animate({scrollTop : top},800);
        return false;
    });
})