var Catwoman = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass( "dancer" ).addClass( "catwoman" );
};
Catwoman.prototype =  Object.create(Dancer.prototype);
Catwoman.prototype.constructor = Catwoman;

Catwoman.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var pounce = Math.floor(Math.random() *10);
  if(pounce%2 === 0){
    this.$node.animate({ "top": "+=30px" }, "slow" );
  } else{
    this.$node.animate({ "top": "-=30px" }, "slow" );
  }
};