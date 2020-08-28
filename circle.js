function circle (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  circle.prototype.isOverlapped = function (circle_) {
    var dist = Math.sqrt((this.x - circle_.x) * (this.x - circle_.x) + (this.y - circle_.y) * (this.y - circle_.y));
    var check =  dist - (this.radius + circle_.radius);
    if(dist === 0 && check < 0) return 1;
    if(check > 0) return 1;
    else if(check < 0)  return -1;
    else return 0;
  }
  module.exports = circle;