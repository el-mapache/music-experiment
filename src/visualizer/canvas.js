const instances = new Map();

class Canvas {
  constructor({ el, pixelRatio }) {
    this.el = el;
    this.pixelRatio = pixelRatio;

    this.scaleForDevice = this.scaleForDevice.bind(this);
    window.addEventListener('resize', this.scaleForDevice);
  }

  deconstruct() {
    window.removeEventListener('resize', this.scaleForDevice);
    instances.delete(el);
  }

  get context() {
    return this.el.getContext('2d');
  }

  scaleForDevice() {  
    this.el.width = this.el.offsetWidth * this.pixelRatio;
    this.el.height = this.el.offsetHeight * this.pixelRatio;
    ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
  }

  draw() {

  }
}

const factory = ({ el, pixelRatio }) => {
  if (instances.has(el)) {
    return instances.get(el);
  }

  instances.set(el, new Canvas({ el, pixelRatio }));

  return instances.get(el);
};

export default factory;
