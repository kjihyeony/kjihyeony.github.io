import {
  GLManager
} from "./GLManager";
import {
  spring,
  parallel
} from "popmotion";
import {
  Grab
} from "./Grab";
import {
  reach
} from "./reach";

// onFullscreenStart
// onFullscreenFinish
// onZoomOutStart
// onZoomOutFinish
// onAciveIndexChange
// onIndexChange
function Showcase(data, options = {}) {
  this.GL = new GLManager(data);
  this.GL.createPlane();

  this.data = data;

  this.progress = 0;
  this.direction = 1;
  this.waveIntensity = 0;

  this.options = options;

  this.index = {
    target: 0,
    current: 0,
    initial: 0,
    scrollSize: window.innerHeight / 6,
    active: 0
  };

  this.follower = {
    x: 0,
    y: 0
  };

  this.followerSpring = null;

  this.slidesSpring = null;

  // this.slides = new Slides(data);

  this.grab = new Grab({
    onGrabStart: this.onGrabStart.bind(this),
    onGrabMove: this.onGrabMove.bind(this),
    onGrabEnd: this.onGrabEnd.bind(this)
  });
}

Showcase.prototype.mount = function (container) {
  this.GL.mount(container);
  // this.slides.mount(container);
  // container.appendChild(this.slidesContainer);
};
Showcase.prototype.render = function () {
  this.GL.render();
};

function clamp(num, min, max) {
  return Math.max(min, Math.min(num, max));
}

Showcase.prototype.onMouseMove = function (ev) {
  if (this.followerSpring) {
    this.followerSpring.stop();
    this.followerSpring = null;
    // this.follower.vx = 0;
    // this.follower.vy = 0;
  }

  this.followerSpring = reach({
    from: {
      x: this.follower.x,
      y: this.follower.y
    },
    to: {
      x: ev.clientX,
      y: ev.clientY
    },
    velocity: {
      x: this.follower.vx,
      y: this.follower.vy
    },
    stiffness: 500,
    damping: 50,
    mass: 1
  }).start({
    update: position => {
      const velocity = {
        x: position.x - this.follower.x,
        y: position.y - this.follower.y
      };
      this.GL.updateRgbEffect({
        position,
        velocity
      });
      this.follower = {
        x: position.x,
        y: position.y,
        vx: velocity.x,
        vy: velocity.y
      };
    },
    complete: () => {
      this.GL.updateRgbEffect({
        position: this.follower,
        velocity: {
          x: 0,
          y: 0
        }
      });
      this.follower.vx = 0;
      this.follower.vy = 0;
    }
  });
  // this.GL.updateRgbEffect({ position, velocity });
};

Showcase.prototype.onGrabMove = function (scroll) {
  this.index.target = clamp(
    this.index.initial + scroll.delta / this.index.scrollSize,
    -this.data.length + 0.51,
    0.49
  );

  const index = clamp(Math.round(-this.index.target), 0, this.data.length - 1);

  if (this.index.active !== index) {
    this.index.active = index;
    if (this.options.onActiveIndexChange) {
      this.options.onActiveIndexChange(this.index.active);
    }
    // this.slides.onActiveIndexChange(this.index.active);

    this.GL.updateTexture(index);
    if (this.textureProgressSpring) {
      this.textureProgressSpring.stop();
      this.textureProgressSpring = null;
    }
    this.textureProgressSpring = spring({
      from: 0,
      to: 1,
      stiffness: 400,
      damping: 30
    }).start(val => {
      this.GL.updateTexture(null, val);
    });
  }
};
Showcase.prototype.onGrabStart = function () {
  if (this.options.onZoomOutStart) {
    this.options.onZoomOutStart({
      activeIndex: this.index.active
    });
  }
  // this.slides.appear();
  this.index.initial = this.index.current;



  const waveIntensitySpring = spring({
    from: this.waveIntensity,
    to: 0.5,
    mass: 5,
    stiffness: 10,
    damping: 200
  });

};

Showcase.prototype.onGrabEnd = function () {


};

Showcase.prototype.onResize = function () {
  this.GL.onResize();
};
export {
  Showcase
};