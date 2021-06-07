//  book now



// Ajax code for Integrated Menu

// Start Main Integrated menu function
imenu();
var xmlHttp
function imenu() {
    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("Your browser does not support AJAX!"); return;
    }
    var time = Math.random();

    //  var url = RelativePath() + "/booknow.htm" + "?" + time;
    var url = "/booknow.htm" + "?" + time;
    xmlHttp.open("GET", url, true); xmlHttp.send(null); xmlHttp.onreadystatechange = stateChanged;
}
function stateChanged() {
    if (xmlHttp.readyState == 4) {
        var mynull = null;
        var TEmpEle = document.getElementById("imenu");
        if (mynull == TEmpEle) {
            alert("Div imenu not found. This alert is from code.js file. If imenu is not required then you can comment this alert. Programmers are requested to comment this alert only after moving the site on server.");
            return false;
        }
        TEmpEle.innerHTML = xmlHttp.responseText;

        $(document).ready(function () {

            $("#txtchin").click(function () {

                //            if($("#txtchin").val()=="")
                //            {
                //          
                //                $('#txtchin').datepicker().datepicker('setDate', new Date());
                // 
                //    $.datepicker.formatDate('MM dd, yy', new Date())
                //    var txtchinDate = $('#txtchin').datepicker('getDate');
                //    $("#txtchin").datepicker("option", "minDate", txtchinDate);
                //   
                //    var date = new Date(txtchinDate);
                //    var currentMonth = date.getMonth();
                //    var currentDate = date.getDate();
                //    var currentYear = date.getFullYear();
                //    $("#txtchin").datepicker("option", "maxDate", new Date(currentYear + 1, currentMonth, currentDate - 1));
                //   
                //    var txtchoutdate = new Date(txtchinDate);
                //    txtchoutdate.setDate(txtchoutdate.getDate() + 1);
                //    $('#txtchout').datepicker().datepicker('setDate', txtchoutdate);
                //    $("#txtchout").datepicker("option", "minDate", txtchoutdate);
                //    $("#txtchout").datepicker("option", "maxDate", new Date(currentYear + 1, currentMonth, currentDate - 1));
                //    $("#txtchin").focus();
                //    }
                setDropdown();
            });

            $("#txtchout").click(function () {

                setDropdown();
            });
            $("#grouparrivalEvent").click(function () {

                setDropdown();
            });


            $("#groupdepartureEvent").click(function () {
                setDropdown();
            });

            $("#alternativeEvent").click(function () {

                setDropdown();
            });


            $("#meetingdatesevent").click(function () {
                setDropdown();
            });





            setCalendarSettings();
            $("#nchild").select2({ minimumResultsForSearch: -1 });
            $("#nadult").select2({ minimumResultsForSearch: -1 });
            $("#nroom").select2({ minimumResultsForSearch: -1 });
            $("#txtEventType").select2({ minimumResultsForSearch: -1 });





        });

    }
}
$(window).resize(function () {
    setCalendarSettings();
});

function setCalendarSettings() {

    var pageWidth = $(window).width();
    var No_OfMonth = 1;

    if (pageWidth > 786) {
        No_OfMonth = 2;
    } else {
        No_OfMonth = 1;
    }

    //alert("No_OfMonth" + No_OfMonth)

    var isDateSelect = "0";
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var StartDateDay;
    var StartMonth;
    var EndDateDay;
    var EndMonth;

    var datett = new Date();
    var currentMonthtt = datett.getMonth();
    var currentDatett = datett.getDate();
    var currentYeartt = datett.getFullYear();

    //-----------------Top calendar        
    $('#txtchin').datepicker({
        changeMonth: true,
        changeYear: true,

        showButtonPanel: false,
        newLeft: 20,
        newTop: 10,
        minDate: new Date(),
        maxDate: new Date(currentYeartt + 1, currentMonthtt, currentDatett - 1),
        beforeShowDay: function (date) {




            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchin").val());
            var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchout").val());
            var className;
            if (startDate && (date.getTime() == startDate.getTime())) {
                if (isDateSelect == "1") {
                    className = "start-date"
                }
                else
                    className = "";
            }
            else if (endDate && (date.getTime() == endDate.getTime())) {
                if (isDateSelect == "1") {
                    className = "end-date";
                }
                else
                    className = "";
            }
            else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                if (isDateSelect == "1") {
                    className = "between-date";
                }
                else
                    className = "";
            }
            else {
                className = "";
            }

            return [true, className];

        },
        onSelect: function (dateText, inst) {
            isDateSelect = "1";
            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchin").val());
            var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchout").val());
            var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
            if (!startDate || endDate) {
                $("#txtchin").val(dateText);
                $("#txtchout").val("");
                $(this).datepicker();
            } else if (selectedDate < startDate) {
                $("#txtchout").val($("#txtchin").val());
                $("#txtchin").val(dateText);
                $(this).datepicker();
            } else {
                $("#txtchout").val(dateText);
                $(this).datepicker();
            }
            if ($('#txtchin').val().length != "0") {

                $('#txtchout').datepicker({
                    changeMonth: true,
                    changeYear: true,
                    //numberOfMonths: No_OfMonth,
                    showButtonPanel: true,
                    newLeft: 150,
                    newTop: 10,

                    beforeShowDay: function (date) {
                        var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchin").val());
                        var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchout").val());
                        var className;
                        if (startDate && (date.getTime() == startDate.getTime())) {
                            className = "start-date"
                        }
                        else if (endDate && (date.getTime() == endDate.getTime())) {
                            className = "end-date";
                        }
                        else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                            className = "between-date";
                        }
                        else {
                            className = "";
                        }

                        return [true, className];
                    },

                    onClose: function (selectedDate) {
                        // $('#txtchin').datepicker("option", "maxDate", selectedDate);
                    }
                });
            }
            var choutdate = new Date(selectedDate);
            choutdate.setDate(choutdate.getDate() + 1);

            $('#txtchout').datepicker("option", "minDate", choutdate);
            $('#txtchout').datepicker().datepicker('setDate', choutdate);
        }
    });

    $('#txtchin1').datepicker({
        changeMonth: true,
        changeYear: true,

        showButtonPanel: false,
        newLeft: 20,
        newTop: 10,
        minDate: new Date(),
        maxDate: new Date(currentYeartt + 1, currentMonthtt, currentDatett - 1),
        beforeShowDay: function (date) {




            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchin1").val());
            var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchout1").val());
            var className;
            if (startDate && (date.getTime() == startDate.getTime())) {
                if (isDateSelect == "1") {
                    className = "start-date"
                }
                else
                    className = "";
            }
            else if (endDate && (date.getTime() == endDate.getTime())) {
                if (isDateSelect == "1") {
                    className = "end-date";
                }
                else
                    className = "";
            }
            else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                if (isDateSelect == "1") {
                    className = "between-date";
                }
                else
                    className = "";
            }
            else {
                className = "";
            }

            return [true, className];

        },
        onSelect: function (dateText, inst) {
            isDateSelect = "1";
            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchin1").val());
            var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchout1").val());
            var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
            if (!startDate || endDate) {
                $("#txtchin1").val(dateText);
                $("#txtchout1").val("");
                $(this).datepicker();
            } else if (selectedDate < startDate) {
                $("#txtchout1").val($("#txtchin1").val());
                $("#txtchin1").val(dateText);
                $(this).datepicker();
            } else {
                $("#txtchout1").val(dateText);
                $(this).datepicker();
            }
            if ($('#txtchin1').val().length != "0") {

                $('#txtchout1').datepicker({
                    changeMonth: true,
                    changeYear: true,
                    //numberOfMonths: No_OfMonth,
                    showButtonPanel: true,
                    newLeft: 150,
                    newTop: 10,

                    beforeShowDay: function (date) {
                        var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchin1").val());
                        var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#txtchout1").val());
                        var className;
                        if (startDate && (date.getTime() == startDate.getTime())) {
                            className = "start-date"
                        }
                        else if (endDate && (date.getTime() == endDate.getTime())) {
                            className = "end-date";
                        }
                        else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                            className = "between-date";
                        }
                        else {
                            className = "";
                        }

                        return [true, className];
                    },

                    onClose: function (selectedDate) {
                        // $('#txtchin1').datepicker("option", "maxDate", selectedDate);
                    }
                });
            }
            var choutdate = new Date(selectedDate);
            choutdate.setDate(choutdate.getDate() + 1);

            $('#txtchout1').datepicker("option", "minDate", choutdate);
            $('#txtchout1').datepicker().datepicker('setDate', choutdate);
        }
    });

    //-----------------Meeting group arrival calendar 
    $('#grouparrivalEvent').datepicker({
        changeMonth: true,
        changeYear: true,

        showButtonPanel: false,
        newLeft: 20,
        newTop: 10,
        minDate: new Date(),
        maxDate: new Date(currentYeartt + 1, currentMonthtt, currentDatett - 1),
        beforeShowDay: function (date) {

            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#grouparrivalEvent").val());
            var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#groupdepartureEvent").val());
            var className;
            if (startDate && (date.getTime() == startDate.getTime())) {
                if (isDateSelect == "1") {
                    className = "start-date"
                }
                else
                    className = "";
            }
            else if (endDate && (date.getTime() == endDate.getTime())) {
                if (isDateSelect == "1") {
                    className = "end-date";
                }
                else
                    className = "";
            }
            else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                if (isDateSelect == "1") {
                    className = "between-date";
                }
                else
                    className = "";
            }
            else {
                className = "";
            }

            return [true, className];

        },
        onSelect: function (dateText, inst) {
            isDateSelect = "1";
            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#grouparrivalEvent").val());
            var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#groupdepartureEvent").val());
            var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
            if (!startDate || endDate) {
                $("#grouparrivalEvent").val(dateText);
                $("#groupdepartureEvent").val("");
                $(this).datepicker();
            } else if (selectedDate < startDate) {
                $("#groupdepartureEvent").val($("#grouparrivalEvent").val());
                $("#grouparrivalEvent").val(dateText);
                $(this).datepicker();
            } else {
                $("#groupdepartureEvent").val(dateText);
                $(this).datepicker();
            }
            if ($('#grouparrivalEvent').val().length != "0") {

                $('#groupdepartureEvent').datepicker({
                    changeMonth: true,
                    changeYear: true,
                    //numberOfMonths: No_OfMonth,
                    showButtonPanel: true,
                    newLeft: 150,
                    newTop: -20,

                    beforeShowDay: function (date) {
                        var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#grouparrivalEvent").val());
                        var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#groupdepartureEvent").val());
                        var className;
                        if (startDate && (date.getTime() == startDate.getTime())) {
                            className = "start-date"
                        }
                        else if (endDate && (date.getTime() == endDate.getTime())) {
                            className = "end-date";
                        }
                        else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                            className = "between-date";
                        }
                        else {
                            className = "";
                        }

                        return [true, className];
                    },

                    onClose: function (selectedDate) {
                        // $('#grouparrivalEvent').datepicker("option", "maxDate", selectedDate);
                    }
                });
            }
            var choutdate = new Date(selectedDate);
            choutdate.setDate(choutdate.getDate() + 1);

            $('#groupdepartureEvent').datepicker("option", "minDate", choutdate);
            $('#groupdepartureEvent').datepicker().datepicker('setDate', choutdate);
        }
    });



    //Meeting group arrival calendar 




    //Meeting alternative dates calendar 
    $('#alternativeEvent').datepicker({
        changeMonth: true,
        changeYear: true,

        showButtonPanel: false,
        newLeft: 20,
        newTop: 10,
        minDate: new Date(),
        maxDate: new Date(currentYeartt + 1, currentMonthtt, currentDatett - 1),
        beforeShowDay: function (date) {

            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#alternativeEvent").val());
            var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#meetingdatesevent").val());
            var className;
            if (startDate && (date.getTime() == startDate.getTime())) {
                if (isDateSelect == "1") {
                    className = "start-date"
                }
                else
                    className = "";
            }
            else if (endDate && (date.getTime() == endDate.getTime())) {
                if (isDateSelect == "1") {
                    className = "end-date";
                }
                else
                    className = "";
            }
            else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                if (isDateSelect == "1") {
                    className = "between-date";
                }
                else
                    className = "";
            }
            else {
                className = "";
            }

            return [true, className];

        },
        onSelect: function (dateText, inst) {
            isDateSelect = "1";
            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#alternativeEvent").val());
            var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#dummy").val());
            var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
            if (!startDate || endDate) {
                $("#alternativeEvent").val(dateText);
                $("#dummy").val("");
                $(this).datepicker();
            } else if (selectedDate < startDate) {
                $("#dummy").val($("#alternativeEvent").val());
                $("#alternativeEvent").val(dateText);
                $(this).datepicker();
            } else {
                $("#dummy").val(dateText);
                $(this).datepicker();
            }
            if ($('#alternativeEvent').val().length != "0") {

                $('#dummy').datepicker({
                    changeMonth: true,
                    changeYear: true,
                    //numberOfMonths: No_OfMonth,
                    showButtonPanel: true,
                    newLeft: 150,
                    newTop: 10,

                    beforeShowDay: function (date) {
                        var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#alternativeEvent").val());
                        var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#dummy").val());
                        var className;
                        if (startDate && (date.getTime() == startDate.getTime())) {
                            className = "start-date"
                        }
                        else if (endDate && (date.getTime() == endDate.getTime())) {
                            className = "end-date";
                        }
                        else if ((startDate && endDate) && (startDate < date && date < endDate)) {
                            className = "between-date";
                        }
                        else {
                            className = "";
                        }

                        return [true, className];
                    },

                    onClose: function (selectedDate) {
                        // $('#grouparrivalEvent').datepicker("option", "maxDate", selectedDate);
                    }
                });
            }
            var choutdate = new Date(selectedDate);
            choutdate.setDate(choutdate.getDate() + 1);

            $('#dummy').datepicker("option", "minDate", choutdate);
            $('#dummy').datepicker().datepicker('setDate', choutdate);
        }
    });



    //Meeting alternative dates calendar 




    //Meeting alternative dates calendar 
    $('#rfpcheckin').datepicker({
        changeMonth: true,
        changeYear: true,

        showButtonPanel: false,
        newLeft: 20,
        newTop: 10,
        minDate: new Date(),
        maxDate: new Date(currentYeartt + 1, currentMonthtt, currentDatett - 1),
        beforeShowDay: function (date) {

            var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#rfpcheckin").val());
           
                className = "";
           

            return [true, className];

        },
        onSelect: function (dateText, inst) {
         
        }
    });



    //Meeting alternative dates calendar 



    $(document).ready(function () {
        $(".submenulink").on("click", function () {
            $(".nav-toggle").click();

        });
    });
    //-------------Footoer calendar-------------------------------------------------------//

    $.datepicker.setDefaults({
        numberOfMonths: No_OfMonth
    });

}

$(document).ready(function () {
    /* ---- */
    /* FORM */
    /* ---- */
    $('.dropdown')
		.click(
			function () {
			    $(this).children('ul').slideToggle(150);

			    if ($(this).hasClass('open')) {
			        $(this).removeClass('open');
			        return false;
			    } else {
			        $(this).addClass('open');
			        return false;
			    }

			    return false;
			})

		.hover(
			function () {

			},
			function () {
			    $(this).children('ul').slideUp(150);
			    $(this).removeClass('open');
			});

    $('.dropdown ul li')
		.click(
			function () {
			    var sitem = $(this).html();
			    var sid = $(this).attr('id');

			    $(this).siblings('li').removeClass('selected');
			    $(this).addClass('selected');
			    $(this).parent('ul').siblings('span.selected').html(sitem);
			    $(this).parent('ul').siblings('input').val(sid);
			});


});

function setDropdown() {
    $('.dropdown')
		.click(
			function () {
			    $(this).children('ul').slideToggle(150);

			    if ($(this).hasClass('open')) {
			        $(this).removeClass('open');
			        return false;
			    } else {
			        $(this).addClass('open');
			        return false;
			    }

			    return false;
			})

		.hover(
			function () {

			},
			function () {
			    $(this).children('ul').slideUp(150);
			    $(this).removeClass('open');
			});

    $('.dropdown ul li')
		.click(
			function () {
			    var sitem = $(this).html();
			    var sid = $(this).attr('id');

			    $(this).siblings('li').removeClass('selected');
			    $(this).addClass('selected');
			    $(this).parent('ul').siblings('span.selected').html(sitem);
			    $(this).parent('ul').siblings('input').val(sid);
			});

}

function GetXmlHttpObject() {
    var xmlHttp = null;
    try { // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try
        { xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e)
        { xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    }
    return xmlHttp;
}

// End of Main Integrated menu function

// end book now




