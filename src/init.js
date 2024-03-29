$(document).ready(function(){
  window.dancers = [];
 /* window.looneyUrls = ['http://www.vgmuseum.com/rips/snes/bugs_run.gif', 'http://www.vgmuseum.com/rips/snes/elmer_slap.gif',
  "http://www.puppsfreestuff.com/files/MARVINBlink14fSM.gif", "http://www.vgmuseum.com/rips/snes/tas_run2.gif",
  "http://www.picgifs.com/disney-gifs/disney-gifs/daffy-duck/disney-graphics-daffy-duck-068038.gif","http://caccioppoli.com/Animated%20gifs/Cartoons/Daffy%20duck/0006.gif"];*/
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
$("#reposition").on("click", function(event){
  console.log($(this).hasClass("toTheLeft"));
  if($(this).hasClass("toTheLeft")){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineup();
      window.dancers[i].$node.css({ height: "20px",
                                    width: "20px"});
    }
    $(this).removeClass( "toTheLeft" ).addClass( "danceOn" );
    $(this).text("dance on");

  }else {
    for (var j = 0; j < window.dancers.length; j++) {
      window.dancers[j].setPosition(
        $("body").height() * Math.random(),
        $("body").width() * Math.random());
    }
    $(this).removeClass( "danceOn" ).addClass( "toTheLeft" );
    $(this).text("to the left");
  }
});
});
