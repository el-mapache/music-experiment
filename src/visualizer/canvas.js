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
    this.el.width = this.el.offsetWidth * PIXEL_RATIO;
    this.el.height = this.el.offsetHeight * PIXEL_RATIO;
    ctx.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);
      
    this.props.onDraw(ctx, canvas.offsetWidth, canvas.offsetHeight);
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
