
$(document).ready(function(){
    
   //console.log($( ".buttons-container button"));
    $( ".buttons-container button").hover(function() {
        var va = $(this).attr("id");
        $('body').removeClass().addClass(va);
      //  console.log($(this), va, $('body'));
  });


    $(".buttons-container button").click(function () {
        $(".arena-selector").html('<h1>Select Players</h1><div class="dropdown1"><select id ="player1" class="player" target="player11"><option value="">Select Ninja</option><option value="donny">Donny</option><option value="leo">Leo</option><option value="mikey">Mikey</option><option value="raphael">Raphael</option></select></div><div class="dropdown2"><select id ="player2" class="player" target="player22"><option value="select">Select Ninja</option><option value="donny">Donny</option><option value="leo">Leo</option><option value="mikey">Mikey</option><option value="raphael">Raphael</option></select></div>');
 
        $(".player").change(function () {
            var op = $(this).children("option:selected").val();
            var ele = $(this).attr("target");
            $("#"+ele).html("<img src =  'images/"+ op + ".png'>")
            console.log(op,ele );

        });
        
    });



  });