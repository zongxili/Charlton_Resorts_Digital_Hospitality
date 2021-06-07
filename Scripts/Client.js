




function BookHotel() {


    var arrDateString = document.getElementById("txtchin").value;
    var arrDate = document.getElementById("txtchin").value.substring(3, 5);
    var arrDateMonth = document.getElementById("txtchin").value.substring(0, 2);
    var arrDateYear = document.getElementById("txtchin").value.substring(6, 10);


    var depDateString = document.getElementById("txtchout").value;
    var depDate = document.getElementById("txtchout").value.substring(3, 5);
    var depDateMonth = document.getElementById("txtchout").value.substring(0, 2);
    var depDateYear = document.getElementById("txtchout").value.substring(6, 10);


    var arrDateMonthNew = arrDateMonth - 1;
    var depDateMonthNew = depDateMonth - 1;


    var adults = document.getElementById("nadult").value;
    var children = document.getElementById("nchild").value;
  //  var childs = getObj("nchild").value;
   // var rooms = getObj("nrooms").value;
    today = arrDateYear + "-" + arrDateMonth + "-" + arrDate;
    nextday = depDateYear + "-" + depDateMonth + "-" + depDate;

    iRet = window.open("https://www.bestwestern.com/en_US/book/hotel-rooms.37078.html?ssob=IN3707843G"
        + "&checkIn=" + arrDateYear + "-" + arrDateMonth + "-" + arrDate
        + "&checkOut=" + depDateYear + "-" + depDateMonth + "-" + depDate
        + "&adults=" + adults
        + "&children=" + children
        //  + "&rateCode=" + rateCode
        + "&cid=IN3707843G:IWS:37078:");

 
    
    var ua = navigator.userAgent;
    if ((ua.match(/iPhone|iPod/i) || ua.match(/Blackberry/i) || ua.match(/Android/i) || ua.match(/Windows Phone/i)) && !window.location.href.match(/fullsite=true/i)) {

        // window.open(bookingStr);
        SendMail(0);
    }
    else if (ua.match(/iPad/i)) {

        //  window.open(bookingStr);
        SendMail(2);
    }
    else {

        //  window.open(bookingStr);
        SendMail(1);
    }
}





  var XmlHttp;    
     //Creating and setting the instance of appropriate XMLHTTP Request object to a “XmlHttp” variable  
     function CreateXmlHttp()
     {
           //netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");

	      //Creating object of XMLHTTP in IE
	      try
	      {
		    XmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
	      }
	      catch(e) 
	      {
		    try
		    {
			    XmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		    } 
		    catch(oc)
		    {
		        XmlHttp = null;
		    }
	      }
	      //Creating object of XMLHTTP in Mozilla and Safari 
	      if(!XmlHttp && typeof XMLHttpRequest != "undefined") 
	      {
		    XmlHttp = new XMLHttpRequest();
	      }
      }

      function RelativePath() {

          // Remove any frames
          //    if (top.location != self.location) {
          //      top.location = self.location;
          //    }


          var url = self.location.href;
          url = url.toLowerCase();
          var path = '';

          // determine the server   
          var local = 'localhost';
          var server = 'server/';
          var live = 'bwsaddleback.com/';

          if (url.lastIndexOf(local) > 1) {
              var res = url.substring(17, 22);
              var localhostURL = "http://localhost:" + res+"/";

              path = localhostURL;
          }
          else if (url.lastIndexOf(live) > 1)
              path = "https://www.bwsaddleback.com/";

          return path;



      }

      function SendMail(path) {


          $.ajax({
              type: "POST",
              data: { path: path },
              url: "/BookAjax/BookNow",
              success: function (result) {
              }
          });
      }




      



    function HandleResponseSendMail()
   { 
	// To make sure receiving response data from server is completed	
	if(XmlHttp.readyState == 4)
	{	 // To make sure valid response is received from the server, 200 means response received is OK
		if(XmlHttp.status == 200)
		{		  // alert('Thank you for contacting Perimeter Reservations'); 
 	    }
		else
		{
		  alert("There was a problem retrieving data from the server." );
		}
	 }
    }
    
//    function calendarPosPageright(){			 
//         var pageWidth = jQuery('#mainWrapper').width();      	
//        var Ojbtxtchout = getObj("txtchout");
//        if(pageWidth < 480){
          
//            popUpCalendarUser(Ojbtxtchout, 'txtDateTo','English','100');
//            //varCalendarPos = "-5px";
//         } else if(pageWidth < 768){ 
//            popUpCalendarUser(Ojbtxtchout, 'txtDateTo','English','250');
//            //varCalendarPos = "50px";
//         }  else if(pageWidth < 1000){ 
//             popUpCalendarUser(Ojbtxtchout, 'txtDateTo','English','0');
//            //varCalendarPos = "100px";
//         }  else {  
//            popUpCalendarUser(Ojbtxtchout, 'txtDateTo','English','150');
//           // varCalendarPos = "200px";
//         }
         
//}
//function calendarPosPageleft(){			 
//         var pageWidth = jQuery('#mainWrapper').width();      	
//        var Ojbttxtchin = getObj("txtchin");
//        if(pageWidth < 480){
          
//            popUpCalendarUser(Ojbttxtchin, 'txtDateFr','English','100');
//            //varCalendarPos = "-5px";
//         } else if(pageWidth < 768){   
//            popUpCalendarUser(Ojbttxtchin, 'txtDateFr','English','0');
//            //varCalendarPos = "50px";
//         }  else if(pageWidth < 1000){    
//             popUpCalendarUser(Ojbttxtchin, 'txtDateFr','English','0');
//            //varCalendarPos = "100px";
//         }  else {    
//            popUpCalendarUser(Ojbttxtchin, 'txtDateFr','English','150');
//           // varCalendarPos = "200px";
//         }
//}