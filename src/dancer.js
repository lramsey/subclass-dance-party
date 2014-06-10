// Creates and returns a new dancer object that can step

var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  /*var newSprite = window.looneyUrls[Math.floor(Math.random()*window.looneyUrls.length)];
    this.$node.css({
      "background-image": 'url('+newSprite+')' });  */
  this.step();
  this.collision();

};

  Dancer.prototype.lineup = function(){
    var styleSettings = {
      left: "0px"
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(function(){
      that.step();
    }, this._timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.collision = function(){
    for (var i = 0; i < window.dancers.length; i++) {
      var topFriend = parseInt(window.dancers[i].$node.css('top'),10);
      var topThis = parseInt(this.$node.css('top'),10);
      var leftFriend = parseInt(window.dancers[i].$node.css('left'), 10);
      var leftThis = parseInt(this.$node.css('left'), 10);
      if(this !== window.dancers[i]){
        if(Math.pow(topFriend - topThis, 2) + Math.pow(leftFriend - leftThis,2) < 500){
          if(topThis < 300){
            this.$node.css({
              height: "+=5px",
              width: "+=5px"
            });
          }
        }
      }
    }
    var that = this;
    setTimeout(function(){
      that.collision();
    }, 100);
  };