var Batman = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass( "dancer" ).addClass( "batmanYellow" ).attr('id', 'batman');
  this.$node.on('click', function(event){
    $(this).toggleClass('batmanBlack');
    });
};
Batman.prototype =  Object.create(Dancer.prototype);
Batman.prototype.constructor = Batman;

Batman.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var pounce = Math.floor(Math.random() *60);
  if(pounce%4 === 0){
    this.$node.animate({ "left": "+="+pounce+"px" }, "slow" );
  } else if(pounce%3 ===0){
    this.$node.animate({ "left": "-="+pounce+"px" }, "slow" );
  } else if(pounce%2 ===0){
    this.$node.animate({ "top": "-="+pounce+"px" }, "slow" );
  }else{
    this.$node.animate({ "top": "+="+pounce+"px" }, "slow" );
  }
};