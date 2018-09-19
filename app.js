function Bird() {
    this.y = width / 2;
    this.x = height / 2;

    this.gravity = 0.5;
    this.speed = 0;
    this.lift = -20;

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }
    this.update = function () {
        this.speed += this.gravity
        this.y += this.speed

        if (this.y > height) {
            this.y = height;
            this.speed = 0;
        } else if (this.y < 0) {
            this.y = 0;
              this.speed = 0;
        } else {

        }
    }

    this.up = function () {
        this.speed += this.lift;
    }
}