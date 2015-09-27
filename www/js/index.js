/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getProjectList() {
    /* var data={};
     data.apiID="ro7i9i";
     $.get("http://business-platform.ru/api/get_projects.php", data, function (result) {
     console.log(result);
     for(var i in result){
     var obj=result[i];
     $('#content').append("<div class=\"titleimage\"><img src="+obj.img+"></div>");
     $('#content').append("<div class=\"pagetitle\"><span class=\"pagetitleText\">"+obj.pagetitle+"</span></div>");
     $('#content').append("<div class=\"Price\"><img src=\"img/price_ico.png\"><span class=\"PriceTitletext\">"+100000+"</span></div>");
     $('#content').append("<div class=\"Location\"><img src=\"img/location_ico.png\"><span class=\"LocationTitletext\">Город</span></div>");
     }
     }, "json");*/
    var od={};
    od.id = "getModel";
    od.year = "2000";
    od.marka = "ac";
    $.get("http://buzapchasti.ru/mobile/request.php?id=getModel", od, function (result) {
        console.log(result);
       
    }, "json");
}