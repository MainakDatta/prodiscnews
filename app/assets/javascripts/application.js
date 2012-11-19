// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
    var $isdisplayed = false;
    var $display = $("#display");
    $display.click(function() {
        if($isdisplayed == false){
        	var $button = $display.find(".btn-warning");
            $button.text("Hide");            
        	// $("<button class='btn-warning'>Hide</button>").appendTo($display); 
            $("<h1>HELP IS ON THE WAY!!</h1>").insertAfter($display);
            $("<img src='http://nyan-cat.com/images/nyan-cat.gif' />").
              insertAfter($display);
            $isdisplayed = true;
        }
        else{
            var $button = $display.find(".btn-warning");
            $button.text("Help");
            var $text = $display.next();
            $text.remove();
            var $other = $display.next();
            $other.remove();
            //$("<button class='btn-warning'>Help</button>").appendTo($display); 
            $isdisplayed = false;
        }                
    });
});
