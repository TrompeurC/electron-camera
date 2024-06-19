
class Drag {
  private x = 0;
  private y = 0;
  private docEle?: Document
  private isDrag = false

  constructor() {
    this.docEle = document
    this.docEle.addEventListener('mousedown', this.mouseDown.bind(this))
    this.docEle.addEventListener('mousemove', this.mouseMove.bind(this))
    this.docEle.addEventListener('mouseup', () => this.isDrag = false)
    this.docEle.addEventListener('mouseout', () => this.isDrag = false)
  }

  mouseDown(event: MouseEvent)  {
    this.isDrag = true;
    this.x = event.pageX;
    this.y = event.pageY;
  }
  mouseMove(event: MouseEvent) {
    if(this.isDrag) {
      const x = event.pageX - this.x
      const y = event.pageY - this.y
      window.api.move({x , y})
    }
  }
}

export default () => {
  new Drag()
}
