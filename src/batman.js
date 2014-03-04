var Batman = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="batmanYellow"></span>');
};
Batman.prototype =  Object.create(Dancer.prototype);
Batman.prototype.constructor = Batman;

Batman.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('batmanBlack');

};