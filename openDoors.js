$(document).ready(function() {

  //Custom settings
  var style_in = 'easeOutBounce';
  var style_out = 'jswing';
  var speed_in = 1000;
  var speed_out = 300;  

  //Calculation for corners
  var neg = Math.round($('.qitem').width() / 2) * (-1); 
  var pos = neg * (-1); 
  var out = pos * 2;
  
  $('.qitem').each(function () {
  
    //grab the anchor and image path
    url = $(this).find('a').attr('href');
    img = $(this).find('img').attr('src');
    
    //remove the image
    $('img', this).remove();
    
    //append four corners/divs into it
    $(this).append('<div class="topLeft"></div><div class="topRight"></div><div class="bottomLeft"></div><div class="bottomRight"></div>');
    
    //set the background image to all the corners
    $(this).children('div').css('background-image','url('+ img + ')');

    //set the position of corners
    $(this).find('div.topLeft').css({top:0, left:0, width:pos , height:pos}); 
    $(this).find('div.topRight').css({top:0, left:pos, width:pos , height:pos});  
    $(this).find('div.bottomLeft').css({bottom:0, left:0, width:pos , height:pos}); 
    $(this).find('div.bottomRight').css({bottom:0, left:pos, width:pos , height:pos});  

  }).hover(function () {
  
    //animate the position
    $(this).find('div.topLeft').stop(false, true).animate({top:neg, left:neg}, {duration:speed_out, easing:style_out}); 
    $(this).find('div.topRight').stop(false, true).animate({top:neg, left:out}, {duration:speed_out, easing:style_out});  
    $(this).find('div.bottomLeft').stop(false, true).animate({bottom:neg, left:neg}, {duration:speed_out, easing:style_out}); 
    $(this).find('div.bottomRight').stop(false, true).animate({bottom:neg, left:out}, {duration:speed_out, easing:style_out});  
        
  },
  
  function () {

    //put corners back to the original position
    $(this).find('div.topLeft').stop(false, true).animate({top:0, left:0}, {duration:speed_in, easing:style_in}); 
    $(this).find('div.topRight').stop(false, true).animate({top:0, left:pos}, {duration:speed_in, easing:style_in});  
    $(this).find('div.bottomLeft').stop(false, true).animate({bottom:0, left:0}, {duration:speed_in, easing:style_in}); 
    $(this).find('div.bottomRight').stop(false, true).animate({bottom:0, left:pos}, {duration:speed_in, easing:style_in});  
  
  }).click (function () {
    
    //go to the url
    window.location = $(this).find('a').attr('href'); 
  });

});