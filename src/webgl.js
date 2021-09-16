class GradientAnimation {
    constructor() {
      this.cnv        = document.querySelector(`#webglcanvas`);
      this.ctx        = this.cnv.getContext(`2d`);

      this.circlesNum = 9;
      this.minRadius  = 400;
      this.maxRadius  = 400;
      this.speed      = .005;
      
      (window.onresize = () => {
        this.setCanvasSize();
        this.createCircles();
      })();
      this.drawAnimation();
  
    }
    setCanvasSize() {
      this.w = this.cnv.width  = innerWidth * devicePixelRatio;
      this.h = this.cnv.height = innerHeight * devicePixelRatio;
      this.ctx.scale(devicePixelRatio, devicePixelRatio)
    }
    createCircles() {
      this.circles = [];
      for (let i = 0 ; i < this.circlesNum ; ++i) {
        this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
      }
    }
    drawCircles() {
      this.circles.forEach(circle => circle.draw(this.ctx, this.speed));
    }
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.w, this.h); 
    }
    drawAnimation() {
      this.clearCanvas();
      this.drawCircles();
      window.requestAnimationFrame(() => this.drawAnimation());
    }
  }
  
  class Circle {
    constructor(w, h, minR, maxR) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.angle  = Math.random() * Math.PI * 2;
      this.radius = Math.random() * (maxR - minR) + minR;
      this.color  = `hsla(234, ${(Math.random() * 7) + 20}%, ${(Math.random() * 7) + 20}%, 1)`;
    }
    draw(ctx, speed) {
      this.angle += speed;
      const x = this.x + Math.cos(this.angle) * 200;
      const y = this.y + Math.sin(this.angle) * 200;
  
      ctx.globalCompositeOperation = `overlay`;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2);
      ctx.filter = 'blur(300px)'
      ctx.fill(); 
    }
  }
  
export const startWebGL = () => {
    new GradientAnimation();
}