$(document).ready(function() {
    /*////////////// MY SLIDER ///////////////*/
    // $('#my-slider').sliderPro({
    //         width: 1976,
    //         height:800,
    //         arrows: true,
    //         fade: true,
    //         autoHeight:true,
    //         centerImage:false,
    //         autoScaleLayers: false,

    //         buttons: true,
    //         thumbnailArrows: true,
    //         autoplay: true,
    //         slideSpeed : 300,
    //         breakpoints: {
    //           768: {
    //             width: 1024,
    //         height:800,
    //         arrows: true,
    //         fade: true,
    //         autoHeight:false,
    //         centerImage:false,
    //         autoScaleLayers: false,
    //         forceSize: 'fullWidth',
    //         buttons: true,
    //         thumbnailArrows: true,
    //         autoplay: true,
    //         slideSpeed : 300,
    //           }
    //         },
    //     })
    /*////////////// MOBILE NAV ///////////////*/
    $('.mobile-menu nav').meanmenu({
        meanMenuContainer: '.menu_mobile_v1',
        meanScreenWidth: "990",
        meanRevealPosition: "right",
        meanMenuOpen: "<span></span>"
    });


    /*////////////// GALLERY ///////////////*/
    var groups = {};
    $('.gallery-item').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
        if (!groups[id]) {
            groups[id] = [];
        }
        groups[id].push(this);
    });


    $.each(groups, function() {
    
      $(this).magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: { enabled:true }
      })
    
    });
		
    /*////////////// BOOKING ///////////////*/
    // $(document).ready(function() {
    //   $('#datetimepicker_v1').datetimepicker();
    // });
    // // CONFIRM BOOKING
    // $(document).ready(function(){
    //     $(".databooktime").on("click",".open_booking", function(){
    //         var hours = $(this).attr("valhours");
    //         $.magnificPopup.open({
    //             type: 'inline',
    //             midClick: true,
    //             items: {
    //               src: '#open_booking'
    //             },
    //             callbacks: {
    //                 beforeOpen: function() {
    //                     if($(window).width() < 700) {
    //                         this.st.focus = false;
    //                     } else {
    //                         this.st.focus = '#name';
    //                     }
    //                     $("input[name='booking_hours']").val(hours);
    //
    //                 }
    //             }
    //         });
    //
    //         return false;
    //     });
    //
    //     $(".btn_cancel").click(function(){
    //         $.magnificPopup.close();
    //
    //     });
    // });
    // END CONFIRM BOOKING
    // FLEX LABEL IN PAYMENT

})