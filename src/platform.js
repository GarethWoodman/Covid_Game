export default class Platform {
  constructor(image, x, y, height, width, movingSpeed){
    this.height = height
    this.width = width
    this.position = {x: x, y: y}
    this.image = new Image();
    this.image.src = image
    this.movingSpeed = movingSpeed
  }

  draw(ctx){
    this.update()
    return ctx.drawImage(this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(){
    this.top    = this.position.y
    this.bottom = this.position.y + this.height
    this.left   = this.position.x
    this.right  = this.position.x + this.width
  }

  move(){
    if(this.movingSpeed) { this.position.x += this.movingSpeed }
  }
}