function Bird() {
    this.y = width/2;
    this.x = height/2;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);

    }
    this.update = function() {
        background(0);
        bird.show();
    }




}