$(function(){
 	$(".joblist li a").click(function(){
 		var parent=$(this).parent();
 		parent.toggleClass("toggle").siblings().removeClass("toggle");
 		if(parent.is(".toggle")){
 			parent.find(".infos").slideDown();
 			parent.siblings().find(".infos").hide();
 		}else{
 			parent.find(".infos").slideUp();
 		}

 	});
});