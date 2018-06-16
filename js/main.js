/*global $, jQuery, alert*/
$(document).ready(function ()
{

	'use strict';



	$('.carousel').carousel({
		interval: 4000
	});


	//Show Color option when click on the gear 

	$(".gear_check").click(function()
	{
		$(".color_option").fadeToggle();

	});

	// Change Color On Click
	var colorLi = $(".color_option ul li") ;

	colorLi
	.eq(0).css("backgroundColor","#E41817").end()
	.eq(1).css("backgroundColor","#FB0397").end()
	.eq(2).css("backgroundColor","#1fa7b9fc").end()
	.eq(3).css("backgroundColor","#c35106");

	colorLi.click(function()
	{
		$("link[href*='theme']").attr("href",$(this).attr("data-value") );
		//console.log( $(this).attr("data-value") )
	});



	$(window).on("scroll",function(){
        
        
        if($(this).scrollTop()>=700)
            {
                
               $(".scroll-top").fadeIn(1000);
               $("body").css("overflow-x","hidden");
                
            }
        else 
        {
            $(".scroll-top").fadeOut(1000);
            
        }
         
    });
    
    $(".scroll-top").on("click",function(){
        
        $("body,html").animate({"scrollTop":"0"},600);
        
        
    })
    
});






$(window).on("load",function()
{
    $(".loading .sk-circle, .loading h1 ").fadeOut(2000,
  	function()
  	{
  		$("body").css("overflow","auto");
       $(".loading").slideUp(1000,function(){ $(this).remove() })
      }) ; 
});

