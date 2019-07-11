// FUNCTION
function getGalleryByCat(cat_id=0, page=0) {
    $.ajax({
        type: "post",
        url: "/gallery/getlistbycat",
        beforeSend: function() {

        },
        data: {cat_id: cat_id, page:page},
        success: function(html) {
            // console.log(html);
            var obj = JSON.parse(html);
            // console.log(obj);
            var html_gallery="";
            if(obj.data.length > 0)
            {
                for(var x in obj.data)
                {
                    html_gallery += `
                            <li class="portfolio-item">
                                <div class="portfolio">
                                    <div class="tt-overlay"></div>
                                    <img itemprop="image" src="`+obj.data[x].imageThumb+`">
                                    <div class="portfolio-info">
                                        <h3 itemprop="name" class="project-title">`+obj.data[x].name+`</h3>
                                        <a itemprop="url" href="/" class="links">`+obj.data[x].description+`</a> </div>
                                    <ul class="portfolio-details">
                                        <li><a itemprop="url" class="tt-lightbox" href="`+obj.data[x].image+`"><i class="fa fa-search-plus" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                    `;
                }
            }else{
                html_gallery="Not found gallery item in this category.";
            }
            $(".box_list_gallery").html(html_gallery);
            $(".box_paging").html(obj.paging_ajax);
        }
    });
}

function call_notify(title_msg, msg, type_notify) {
    type_notify = type_notify ? type_notify : "error";

    var icon = "";
    if(type_notify == "error")
    {
        icon = "fa fa-exclamation-circle";
    }else if(type_notify == "success"){
        icon = "fa fa-check-circle";
    }
    new PNotify({
        title: title_msg,
        text: msg,
        type: type_notify,
        icon: icon,
        addclass: 'alert-with-icon'
    });
}

function loadService(pg_id=0, _page=0, resizeWidth=0) {

    var btn_appointment = "";
    if( typeof(enable_booking) != "undefined" && enable_booking == 1 )
    {
        btn_appointment = `<a class="btn btn-secondary mb-15 btn_make_appointment" href="/book">Make an appointment</a>`;
    }
    var btn_callnow = `<a class="btn btn-secondary mb-15" style="margin-left:15px;" href="tel:` + company_phone + `"><i class="fa fa-phone"></i>Call now</a>`;

    // change active of nav
    $("ul.listcatser li").removeClass("active ui-state-active");
    $("ul.listcatser li[lid='"+pg_id+"']").addClass("active ui-state-active");

    // Get data
    $.ajax({
        type: "post",
        url: "/service/loadservice",
        data: {pg_id: pg_id, limit: num_paging, page: _page, paging: 1, resize_width: resizeWidth},
        beforeSend: function() {
            $(".content_service").html("Loading...");
        },
        success: function(html)
        {
            var obj = JSON.parse(html);

            // paging
            $(".paging_service").html(obj.paging_ajax);

            var group_des = obj.group_des;
            obj = obj.data;
            if(obj.length > 0)
            {
                var html_row = `
                <li class="item-botton-1" style="padding:0;margin:0;height:0;width:100%;min-height:0;line-heignt:0;border:none;">&nbsp;</li>
                <li class="item-botton clearfix" style="border:none;padding:0px;margin:0px;">
                    <div class="col-md-12 text-right">` + btn_appointment + btn_callnow + `</div>
                </li>
                `;

                if( group_des )
                {
                    html_row += `
                    <li class="des_service" style="border-top: none; padding: 10px 0;">
                        <div class="col-md-12 ">` + group_des + `</div>
                    <hr class="mt-50 mb-50 alt-1" />
                    </li>
                    `;
                }

                var pull_right = "pull-right";
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
                {
                    pull_right = "";
                }
                for( x in obj )
                {
                    var price_show = obj[x].price_sell ? obj[x].price_sell : "";
                    html_row += `
                    <li>
                        <div class="line_item_v1">
                            <div class="just_start_line">
                                <a class="inline-block" href="`+obj[x].link_book+`" title="`+obj[x].name+`">
                                    <span class="name_service_v1">`+obj[x].name+`</span>
                                    <span class="price_service_v1 `+pull_right+`">`+price_show+obj[x].product_up+`</span>
                                </a>
                                <div class="box_des">`+obj[x].product_description+`</div>
                            </div>
                            <!--
                            <div class="just_end_line">
                                <a class="hs-btn btn_2 btn-light" href="`+obj[x].link_book+`">Book</a>
                            </div>
                            -->
                        </div>
                    </li>
                    `;
                }

                // insert content
                $(".content_service").html(html_row);

                // Scroll
                scrollJumpto ( '.box_service' );
            } else {
                $(".content_service").html("No services found in this category");
            }
        }
    });

    // Load gallery right
    // loadGallery(pg_id,300);
}

function saveForm() {
    // Save form
    var formdata = $("#surveyForm").serialize();
    $.ajax({
        type: "post",
        url: "/book/saveform",
        data: formdata,
        success:function(html)
        {
            // console.log(html);
        }
    });
}

function loadForm(formdata) {
    var obj = JSON.parse(formdata);
    $("input[name='booking_date']").val(obj.booking_date);
    $("input[name='booking_hours']").val(obj.booking_hours);
    var listservice = typeof(obj.service_staff) != "undefined" ? obj.service_staff : [];
    // console.log(listservice);
    if(listservice.length > 0 )
    {
        for(var x in listservice)
        {
            // split info
            var list = listservice[x].split(',');

            // Trigger add row
            if(x>0)
            {
                $(".addButton").trigger("click");
            }
            var objservice = $(".list_service:last");
            $(".list_service:last option[value='"+list[0]+"']").attr("selected", "selected");
            objservice.trigger("change");
            $(".list_staff:last option[value='"+list[1]+"']").attr("selected", "selected");
            
        }

        // Trigger action search for show staff list
        $(".btn_action").trigger("click");
    }
}

function loadGallery(pg_id=0, resizeWidth=0) {
    if(pg_id)
    {
        $.ajax({
            type: "post",
            url: "/service/loadgallery",
            data: {id:pg_id, resize_width:resizeWidth},
            beforeSend: function()
            {
                // $(".box_show_gallery").html("Loading...");
            },
            success: function(html)
            {
                // console.log(html);
                var obj = JSON.parse(html);
                var html_img = '';
                for(var x in obj)
                {
                    html_img +=`<li>
                                    <img itemprop="image" alt="" src="`+obj[x].image+`" class="img-responsive">
                                </li>`;
                }

                $(".box_show_gallery").html(html_img);
            }
        });
    }
}

function convertDate(input) {
    var list_date = input.split("/");
    var splitDate = posFormat.split(",");
    var new_date = list_date[splitDate[2]]+"/"+list_date[splitDate[1]]+"/"+list_date[splitDate[0]];
    return new_date;
}

function pushHtmlTime(input_date,type) {
    
    $.ajax({
        type: "post",
        url: "/book/get_hours",
        data: {input_date: input_date, type: type},
        beforeSend: function(){
            $(".box_detail_info").append("<div class='mask_booking'><i class='fa fa-spinner fa-pulse fa-3x fa-fw'></i></div>");
            $(".box_detail_info").css("position","relative");
            $(".mask_booking").css("position","absolute").css("height","100%").css("width","100%").css("top",0).css("left",0).css("background","rgba(0,0,0,0.5)").css("text-align","right");
            $(".mask_booking i").css("font-size","2em").css("margin","10px");
        },
        success: function(response)
        {
            // console.log(response);
            // Remove mask
            $(".mask_booking").remove();
            var obj = JSON.parse(response);
            if(obj.checkmorning == false)
            {
                $(".note_am_time").html("(Booking time has expired)");
            }else
            {
                $(".note_am_time").html("");
            }

            if(obj.checkafternoon == false)
            {
                $(".note_pm_time").html("(Booking time has expired)");
            }else
            {
                $(".note_pm_time").html("");
            }

            $(".databooktime .timemorning").html(obj.htmlMorning);
            $(".databooktime .timeafternoon").html(obj.htmlAfternoon);
        }
    });
}

function setHtmldate(date_choose) {
    // use for booking
    var new_date = convertDate(date_choose);
    var d = new Date(new_date);

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var str_show = days[d.getDay()]+", "+months[d.getMonth()]+"-"+d.getDate()+"-"+d.getFullYear();
    // console.log(str_show);
    $(".time_show").html(str_show);
}

function loadEvent() {
    // Add button click handler
    $('#surveyForm').on('click', '.addButton', function() {
        var template = `
        <div class="item-booking relative">
            <div class="row is-more">
                <span class="removeButton"><img src="assets/img/remove-service-icon-new.png"></span>
                `+$('#optionTemplate').html()+`
            </div>
        </div>
        `;
        $(this).before($(template));
        $("#surveyForm .item-booking:last .list_service").trigger('change');
        saveForm();
    });

    // Remove button click handler
    $('#surveyForm').on('click', '.removeButton', function() {
        var $row = $(this).parents('.item-booking'),
            $option = $row.find('[name="option[]"]');

        // Remove element containing the option
        $row.remove();
        saveForm();
    });
}

function update_cart(onthis) {
    var quantity = $(onthis).val();
    var id = $(onthis).attr("cart_id");
    //Ajax
    $.ajax({
        type: "post",
        url: "/cart/update",
        data: {quantity: quantity, id: id},
        success: function(html)
        {
            // console.log(html);
            var obj = JSON.parse(html);
            // set value
            if(obj.total_show && obj.amount)
            {
                $(onthis).parents("tr").find(".total_change").html(obj.total_show);
                $(".amount_change").html(obj.amount);
            }

            if(obj.cart_data){
                $("#cart_tax").text(obj.cart_data[1]);
                $("#cart_discount_code_value").text(obj.cart_data[5]);
                $("#cart_subtotal").text(obj.cart_data[2]);
                $("#cart_payment_total").text(obj.cart_data[3]);
            }
        }
    });
}

function update_price(onthis) {
    var cus_price = isNaN(parseFloat($(onthis).val())) ? 0 : parseFloat($(onthis).val());
    var id = $(onthis).attr("cart_id");
    var max_val = parseFloat($(onthis).attr("max"));
    var min_val = parseFloat($(onthis).attr("min"));
    
    if(cus_price >= min_val && cus_price <= max_val)
    {
        $(onthis).css("border-color", "#ccc");
        $(".btn_cart_order").attr("href","/payment");
        //Ajax
        $.ajax({
            type: "post",
            url: "/cart/updateprice",
            data: {cus_price: cus_price, id: id},
            success: function(html)
            {
                // console.log(html);
                var obj = JSON.parse(html);
                if(obj.status == "error")
                {
                    call_notify('Notification',obj.msg, "error");
                    $(onthis).val(obj.price);
                    return false;
                }
                // set value
                if(obj.total_show && obj.amount)
                {
                    $(onthis).parents("tr").find(".total_change").html(obj.total_show);
                    $(".amount_change").html(obj.amount);
                }

                if(obj.cart_data){
                    $("#cart_tax").text(obj.cart_data[1]);
                    $("#cart_discount_code_value").text(obj.cart_data[5]);
                    $("#cart_subtotal").text(obj.cart_data[2]);
                    $("#cart_payment_total").text(obj.cart_data[3]);
                }
            }
        });
    }else
    {
        $(onthis).css("border-color", "red");
        $(".btn_cart_order").removeAttr("href");
    }
}

function delItem(onthis) {
    var id = $(onthis).attr("cart_id");
    //Ajax
    $.ajax({
        type: "post",
        url: "/cart/delitem",
        data: {id: id},
        success: function(html)
        {
            // console.log(html);
            var obj = JSON.parse(html);

            // set value
            if(obj.amount)
            {
                // remove row
                $(onthis).parents("tr").remove();
                
                // change stt
                if($(".list_stt").length > 0)
                {
                    var i=1;
                    $(".list_stt").each(function(){
                        $(this).html("#"+i);
                        i++;
                    });
                }else
                {
                    $(".list-row tbody").html('<tr><td colspan="6"><div class="cart-empty">Cart empty...</div></td></tr>');
                }

                // set amount
                $(".amount_change").html(obj.amount);

                if(obj.cart_data){
                    $("#cart_tax").text(obj.cart_data[1]);
                    $("#cart_discount_code_value").text(obj.cart_data[5]);
                    $("#cart_subtotal").text(obj.cart_data[2]);
                    $("#cart_payment_total").text(obj.cart_data[3]);
                }
            }
        }
    });
}

function changeTimeByDate(input_date, typehtml)
{
    // check date time
    var splitDate = posFormat.split(",");//1,0,2
    // change time
    $.ajax({
        type:"post",
        url: "/book/change_time",
        data: {date: input_date},
        success: function(response)
        {
            // console.log(response);
            if(response)
            {
                var obj = JSON.parse(response);
                timeMorning = JSON.stringify(obj.time_morning);
                // convert time afternoon
                var afternoon_time = obj.time_afternoon;
                for(var x in afternoon_time)
                {
                    var listTime = afternoon_time[x].split(":");

                    if(listTime[0] >=1 && listTime[0] < 12)
                    {
                        var changeTime = parseInt(listTime[0])+12;
                        afternoon_time[x] = changeTime+":"+listTime[1];
                    }
                }
                
                timeAfternoon = JSON.stringify(afternoon_time);
                pushHtmlTime(input_date, typehtml);
            }
        }
    });
}

function applyDiscountCode()
{
    $("#loader_discount_code").show();
    $("#enter_discount_code").hide();
    $("#cart_discount_code").prop("disabled", true);

    let code =  $("#cart_discount_code").val();
    $.ajax({
        url: "/payment/discount_code/",
        data: {"code": code},
        dataType: "json",
        success: function(res){

            $("#loader_discount_code").hide();
            $("#enter_discount_code").show();
            $("#cart_discount_code").prop("disabled", false);

            if(res.status == 'ok')
            {
                $("#discount_code_input").hide();
                $("#discount_code_info").show();
                $("#cart_discount_code_text").text(res.code_data.code);
                $("#cart_discount_code_value").text(res.cart_data[5]);
                $("#cart_subtotal").text(res.cart_data[2]);
                $("#cart_payment_total").text(res.cart_data[3]);
                $("#cart_tax").text(res.cart_data[1]);
            }
            else
            {
                call_notify("Alert",res.msg,"error");
            }
        }
    })
}

function removeDiscountCode()
{
    $.ajax({
        url: "/payment/remove_code/",
        dataType: "json",
        success: function(res){
            if(res.status == 'ok')
            {
                $("#discount_code_input").show();
                $("#discount_code_info").hide();
                $("#cart_discount_code_text").text("");
                $("#cart_discount_code_value").text(res.cart_data[5]);
                $("#cart_subtotal").text(res.cart_data[2]);
                $("#cart_payment_total").text(res.cart_data[3]);
                $("#cart_tax").text(res.cart_data[1]);
            }
            else
            {
                call_notify("Alert",res.msg,"error");
            }
        }
    })
}

// Already create in app_script.js
if (typeof redirectUrl != 'function') {
    function redirectUrl ( url, target ) 
    {
        // Check target
        if ( typeof target == 'undefined' ) 
        {
            target = '_self';
        }

        // append element
        var redirect_url = 'redirect_url_' + new Date().getTime();
        $('body').append('<div style="display:none;"><a class="' + redirect_url + '" target="' + target + '">&nbsp;</a></div>');

        // Call event
        var redirect = $('.' + redirect_url);
            redirect.attr('href',url);
            redirect.attr('onclick',"document.location.replace('" + url + "'); return false;");
            redirect.trigger('click');
    }
}
// END FUNCITON

(function($) {
    'use strict';

    // Load Token
    $.ajax({
        type: "post",
        url: "/security/create",
        success: function(token)
        {
            $("form").each(function(){
                $(this).prepend("<input type='hidden' name='token' value='"+token+"' />");
            });
        }
    });
    // End Load Token

    // Auto Select
    $("select.auto_select").each(function(){
      var val_default = $(this).attr("defaultvalue");
      $(this).find("option[value='"+val_default+"']").prop("selected",true);
    });
    // End Auto Select

    // Mask Input
    var plholder = phoneFormat == "(000) 000-0000" ? "Phone (___) ___-____" : "Phone ____ ___ ____";
    $(".inputPhone").mask(phoneFormat, {placeholder: plholder});
    // End mask input

    // Validate Form
    $("#send_newsletter").validate({
        submit: {
            settings: {
                button: ".btn_send_newsletter",
                inputContainer: '.form-group',
                errorListClass: 'form-tooltip-error',
            },
            callback: {
                onSubmit: function (node, formdata) 
                {
                    var url_send = $(node).attr("action");
                    var email = $(node).find("input[name='newsletter_email']").val();
                    var token = $(node).find("input[name='token']").val();
                    var container = $(node).find("input[name='newsletter_container']").val();

                    $.ajax({
                        type: "post",
                        url: url_send,
                        data: {
                            newsletter_email: email, 
                            token: token
                        },
                        success: function(html)
                        {
                            var obj = JSON.parse(html);
                            call_notify("Notification", obj.message, obj.status);
                            $(node).find("input[name='newsletter_email']").val("");

                            // An form
                            if( obj.status == "success" )
                            {
                                $(container).html('<p>Thanks for subscribing!</p>');
                            }
                        }
                    });
                }
            }
        }
    });

    $("#send_newsletter_single").validate({
        submit: {
            settings: {
                button: ".btn_send_newsletter_single",
                inputContainer: '.form-group',
                errorListClass: 'form-tooltip-error',
            },
            callback: {
                onSubmit: function (node, formdata) 
                {
                    var url_send = $(node).attr("action");
                    var email = $(node).find("input[name='newsletter_email']").val();
                    var token = $(node).find("input[name='token']").val();
                    var container = $(node).find("input[name='newsletter_container']").val();

                    $.ajax({
                        type: "post",
                        url: url_send,
                        data: {
                            newsletter_email: email, 
                            token: token
                        },
                        success: function(html)
                        {
                            var obj = JSON.parse(html);
                            call_notify("Notification", obj.message, obj.status);
                            $(node).find("input[name='newsletter_email']").val("");

                            // An form
                            if( obj.status == "success" )
                            {
                                $(container).html('<p>Thanks for subscribing!</p>');
                            }
                        }
                    });
                }
            }
        }
    });

    $("#send_contact").validate({
        submit: {
            settings: {
                button: ".btn_contact",
                inputContainer: '.form-group',
                errorListClass: 'form-tooltip-error',
            }
        }
    });

    $("#send_booking").validate({
        submit: {
            settings: {
                button: ".btn_booking",
                inputContainer: '.input-box',
                errorListClass: 'form-tooltip-error',
            }
        }
    });

    $("#send_login").validate({
        submit: {
            settings: {
                button: "[type='submit']",
                inputContainer: '.form-group',
                errorListClass: 'form-tooltip-error',
            }
        }
    });

    $("#send_forgot_password").validate({
        submit: {
            settings: {
                button: "[type='submit']",
                inputContainer: '.form-group',
                errorListClass: 'form-tooltip-error',
            }
        }
    });

    $("#send_change_password").validate({
        submit: {
            settings: {
                button: "[type='submit']",
                inputContainer: '.form-group',
                errorListClass: 'form-tooltip-error',
            }
        }
    });

    $("#send_register").validate({
        submit: {
            settings: {
                button: "[type='submit']",
                inputContainer: '.form-group',
                errorListClass: 'form-tooltip-error',
            }
        }
    });
    // End Validate Form

    // Set date
    var today = new Date();
    var future = new Date();
    var set_date = parseInt(beforeDay) > 0 ? new Date(future.setDate(today.getDate()+beforeDay)) : (checktimebooking == 1 ? new Date() : new Date(future.setDate(today.getDate()+1))); 
        set_date = moment(set_date).format(dateFormatBooking);
    $('#datetimepicker_v1, .booking_date').datetimepicker({
        format: dateFormatBooking,
        minDate: set_date,
    });
    // End set date

    // Choose Date Appointent
    $("#send_booking").on("dp.change",".choose_date", function(){
        
        var typehtml = $(this).attr("typehtml");
        var date_choose = $(this).val();

        // change time by date choose
        changeTimeByDate(date_choose, typehtml);
        //data time
        // setTimeout(function(){ pushHtmlTime(date_choose, typehtml); }, 100);
    });
    // End Choose Date Appointent

    // Choose Service Booking
    $("#surveyForm").on("change",".list_service", function(){
        var service_id = $(this).val();
        var list_staff = $(this).find("option:selected").attr("staff");
        if(service_id)
        {
            $(this).css("border-color","#ccc");
            $(this).parent().find('.form-tooltip-error').remove();
        }else
        {
            $(this).css("border-color","red");
            $(this).parent().append('<div class="form-tooltip-error" data-error-list=""><ul><li>'+$(this).data('validation-message')+'</li></ul></div>');
        }
        var obj = JSON.parse(list_staff);
        var option = '<option value="">Service Provider</option>';
        for(var x in obj)
        {
            option += `<option value="`+obj[x].id+`" urlimg="`+obj[x].image+`">`+obj[x].name+`</option>`;
        }

        $(this).parents(".item-booking").find(".list_staff").html(option);

        // Save form
        saveForm();

    });
    // End Choose Service Booking

    // Choose Provider Booking
    $("#surveyForm").on("change",".list_staff", function(){
        // Save form
        saveForm();
    });
    // End Choose Provider Booking

    // Choose Date Booking
    $("#surveyForm").on("dp.change",".choose_date", function(){
        
        var typehtml = $(this).attr("typehtml");
        var date_choose = $(this).val();
        // set Html date
        setHtmldate(date_choose);
        // Save form
        saveForm();

        // change time by date choose
        changeTimeByDate(date_choose, typehtml);
        //data time
        // setTimeout(function(){ pushHtmlTime(date_choose, typehtml); }, 100);
    });
    // End Choose Date Booking

    // Button Search Booking
    $(".btn_action").click(function(){

        var num = $(".list_service").length;
        var info_staff = [];
        var info_staff2 = [];
        var temp = {};
        var i = 0;
        var check = true;

        $(".list_service").each(function(){
            var checkval = $(this).val();
            if(checkval) 
            { 
                $(this).css("border-color","#ccc");
                $(this).parent().find('.form-tooltip-error').remove();
            }
            else
            {
                check = false;
                $(this).css("border-color","red");
                $(this).parent().append('<div class="form-tooltip-error" data-error-list=""><ul><li>'+$(this).data('validation-message')+'</li></ul></div>');
            }
            temp.price = $('option:selected', this).attr('price');
            temp.service = $('option:selected', this).text();
            info_staff.push(temp);
            temp = {};
            i++;
        });
        
        var j = 0;
        $(".list_staff").each(function(){
            var checkval = $(this).val();
            temp.image = $('option:selected', this).attr('urlimg');
            temp.name = checkval ? $('option:selected', this).text() : "Any person";
            info_staff2.push(temp);
            temp = {};
            j++;
        });

        if(check == true)
        {   
            $(".box_detail_info").show();
            $("#box_person").html("Loading ...");
            var html_person = "";
            var j = 0;
            for(var x in info_staff)
            {
                var image = typeof(info_staff2[x].image) === "undefined" ? "custom/no-photo.png" : info_staff2[x].image;
                html_person += `
                <div class="staff_service_v1 col-sm-6 col-md-6">
                    <div class="col-xs-4 staff-avatar">
                        <div title="staff avatar">
                            <img src="`+image+`" alt="`+info_staff2[x].name+`">
                        </div>
                    </div>
                    <div class="col-xs-8">
                        <h4>`+info_staff2[x].name+`</h4>
                        <p>`+info_staff[x].service+`</p>
                        <p>Price: `+info_staff[x].price+`</p>
                    </div>
                </div>
                `;
            }

            // insert data
            $("#box_person").html(html_person);
            
            // Scroll
            scrollJumpto ( '#book-info', '.top-fixed' );
        }
        else
        {
            return false;
        }
    });
    // End Button Search Booking

    // Confirm Booking
    // $(document).ready(function(){
        $(".databooktime").on("click",".popup_login", function(){
            $.magnificPopup.open({
                type: 'inline',
                midClick: true,
                items: {
                      src: '#popup_login'
                    },
            });
            return false;
        });
        
        $("body").on("click",".open_booking", function(){
            // Check service
            var check = true;
            $(".list_service").each(function(){
                var checkval = $(this).val();
                if(checkval) 
                { 
                    $(this).css("border-color","#ccc");
                    $(this).parent().find('.form-tooltip-error').remove();
                }
                else
                {
                    check = false;
                    $(this).css("border-color","red");
                    $(this).parent().append('<div class="form-tooltip-error" data-error-list=""><ul><li>'+$(this).data('validation-message')+'</li></ul></div>');
                }
            });
            
            if(check == false)
            {
                return false;
            }
            
            var hours = $(this).attr("valhours");
            $.magnificPopup.open({
                type: 'inline',
                midClick: true,
                items: {
                  src: '#open_booking'
                },
                callbacks: {
                    beforeOpen: function() {
                        if($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '#name';
                        }
                        $("input[name='booking_hours']").val(hours);
                    }
                }
            });

            return false;
        });

        $(".btn_cancel").click(function(){
            $.magnificPopup.close();
        });
    // });
    // End Confirm Booking

    // Button Next Payment
    $(".btn_cart_order").click(function(){
        var obj = $(this);
        // return false;
        $(".list_price").each(function(){
            var check_val = isNaN(parseFloat($(this).val())) ? 0 : parseFloat($(this).val());
            var max_val = parseFloat($(this).attr("max"));
            var min_val = parseFloat($(this).attr("min"));
            if(check_val > max_val || check_val < min_val)
            {
                $(this).css("border-color", "red");
                obj.removeAttr("href");
                return false;
            }
        })
    });
    // End Button next payment

})(jQuery);

$(document).ready(function(){

    // Load List Gallery
    $("#filter li").click(function(e){
        var id = $(this).attr("itemprop");
        e.preventDefault();

        // set active class
        $('#filter li').removeClass('active');
        $(this).addClass('active');

        getGalleryByCat(id);
    });
    $("#filter li:first").trigger("click");

    $("select[name='filter_select']").change(function(){
        var id = $(this).val();
        getGalleryByCat(id);
    });
    $("select[name='filter_select']").trigger("change");
    // End Load List Gallery

    // Services Page
    var lid = $('input[name="lid"]').val();
        lid = $('ul.listcatser li[lid="'+lid+'"] a');
        if ( lid.length == 0 ) {
            lid = $("ul.listcatser li:first a");
        }
        lid.trigger("click");
    // End Service Page

});

$(document).ready(function () {
    // SOCIAL FAN PAGE
    $(window).on('load', function(){

        // use for load and resize
        function load_social ( social_block_width ) {

            // <!-- facebook fanpage -->
            if ( typeof facebook_id_fanpage != 'undefined' && facebook_id_fanpage ) {
                $('#fanpage_fb_container').html('<iframe src="https://www.facebook.com/plugins/page.php?href='+facebook_id_fanpage+'&width='+social_block_width+'&height='+( social_block_width + 70 )+'&tabs=timeline&hide_cover=false&show_facepile=true&hide_cta=false&small_header=true&adapt_container_width=false&appId" width="'+social_block_width+'" height="'+( social_block_width - 20 )+'" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>');
            }

            // <!-- google fanpage -->
            if ( typeof google_id_fanpage != 'undefined' && google_id_fanpage ) { 
                $('#fanpage_google_container').html('<div class="g-page" data-href="'+google_id_fanpage+'" data-width="'+social_block_width+'"></div><script src="https://apis.google.com/js/platform.js" async defer><\/script>');
            }

            // <!-- twitter fanpage -->
            $('#fanpage_twitter_container').html(''); // clear content
            if ( typeof twitter_id_fanpage != 'undefined' && twitter_id_fanpage ) { 
                twitter_id_fanpage = twitter_id_fanpage.split('/');
                for ( var i = twitter_id_fanpage.length - 1; i >= 0; i -= 1 ) {
                    if ( twitter_id_fanpage[i] != '' ) {
                        twitter_id_fanpage = twitter_id_fanpage[i];
                        break;
                    }
                }
                if ( typeof twttr != 'undefined' )
                {
                  twttr.widgets.createTweet(twitter_id_fanpage,document.getElementById('fanpage_twitter_container'),{width:social_block_width});
                }
            }
        }

        // calculator width
        var social_block_width = $('#social_block_width').width();
        if ( social_block_width > 450 ) { social_block_width = 450; }

        // load facebook and google fanpage
        load_social(social_block_width);

        // When resize then reload social
        $(window).on('resize', function(){

            // Firing resize event only when resizing is finished
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(function(){

                // re-calculator width
                var social_block_width = $('#social_block_width').width();
                if ( social_block_width > 450 ) { social_block_width = 450; }

                // re-load facebook and google fanpage
                load_social(social_block_width);
            }, 250);
            
            // console.log('on resize:'+social_block_width+'px');
        });
    });
    // END SOCIAL FAN PAGE
});


function scrollJumpto ( jumpto, headerfixed, redirect ) 
{
    // check exits element for jumpto
    if ( $(jumpto).length > 0 ) 
    {
        // Calculator position and call jumpto with effect
        jumpto = $(jumpto).offset().top;
        headerfixed = ( $(headerfixed).length > 0 ) ? $(headerfixed).height() : 0;

        $('html, body').animate({
            scrollTop: parseInt(jumpto - headerfixed) + 'px'
        }, 1000, 'swing');
    }
    // Check redirect if not exits element for jumpto
    else if ( redirect ) 
    {
        // Call redirect
        redirectUrl(redirect);
        return;
    }
    else
    {
        console.log(jumpto + ' Not found.');
    }
}

function stick_html(ele)
{
    $(ele).addClass('original').clone().insertAfter(ele).addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
    scrollIntervalID = setInterval(stickIt, 10);
}

function stickIt() 
{
  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               
  if ($(window).scrollTop() >= (orgElementTop)) 
  {    
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}