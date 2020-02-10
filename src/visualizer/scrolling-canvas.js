// This person is a great human: https://stackoverflow.com/a/36233727
var ctx = canvas.getContext('2d');

var app = {};
// the total area of our drawings, can be very large now
app.WIDTH = 5000;
app.HEIGHT = 5000;

app.draw = function() {
  // reset everything (clears the canvas + transform + fillStyle + any other property of the context)
  canvas.width = canvas.width;

  // move our context by the inverse of our scrollbars' left and top property
  ctx.setTransform(1, 0, 0, 1, -app.scrollbars.left, -app.scrollbars.top);

  ctx.textAlign = 'center';
  // draw only the visible area
  var visibleLeft = app.scrollbars.left;
  var visibleWidth = visibleLeft + canvas.width;
  var visibleTop = app.scrollbars.top
  var visibleHeight = visibleTop + canvas.height;

  // you probably will have to make other calculations than these ones to get your drawings
  // to draw only where required
  for (var w = visibleLeft; w < visibleWidth + 50; w += 100) {
    for (var h = visibleTop; h < visibleHeight + 50; h += 100) {
      var x = Math.round((w) / 100) * 100;
      var y = Math.round((h) / 100) * 100;
      ctx.fillText(x + ',' + y, x, y);
    }
  }

  // draw our scrollbars on top if needed
  app.scrollbars.draw();
}

app.scrollbars = function() {
  var scrollbars = {};
  // initial position
  scrollbars.left = 0;
  scrollbars.top = 0;
  // a single constructor for both horizontal and vertical	
  var ScrollBar = function(vertical) {
    var that = {
      vertical: vertical
    };

    that.left = vertical ? canvas.width - 10 : 0;
    that.top = vertical ? 0 : canvas.height - 10;
    that.height = vertical ? canvas.height - 10 : 5;
    that.width = vertical ? 5 : canvas.width - 10;
    that.fill = '#dedede';

    that.cursor = {
      radius: 5,
      fill: '#bababa'
    };
    that.cursor.top = vertical ? that.cursor.radius : that.top + that.cursor.radius / 2;
    that.cursor.left = vertical ? that.left + that.cursor.radius / 2 : that.cursor.radius;

    that.draw = function() {
      if (!that.visible) {
        return;
      }
      // remember to reset the matrix
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      // you can give it any shape you like, all canvas drawings operations are possible
      ctx.fillStyle = that.fill;
      ctx.fillRect(that.left, that.top, that.width, that.height);
      ctx.beginPath();
      ctx.arc(that.cursor.left, that.cursor.top, that.cursor.radius, 0, Math.PI * 2);
      ctx.fillStyle = that.cursor.fill;
      ctx.fill();
    };
    // check if we're hovered
    that.isHover = function(x, y) {
      if (x >= that.left - that.cursor.radius && x <= that.left + that.width + that.cursor.radius &&
        y >= that.top - that.cursor.radius && y <= that.top + that.height + that.cursor.radius) {
        // we are so record the position of the mouse and set ourself as the one hovered
        scrollbars.mousePos = vertical ? y : x;
        scrollbars.hovered = that;
        that.visible = true;
        return true;
      }
      // we were visible last call and no wheel event is happening
      else if (that.visible && !scrollbars.willHide) {
        that.visible = false;
        // the app should be redrawn
        return true;
      }
    }

    return that;
  };

  scrollbars.horizontal = ScrollBar(0);
  scrollbars.vertical = ScrollBar(1);

  scrollbars.hovered = null;
  scrollbars.dragged = null;
  scrollbars.mousePos = null;
  // check both of our scrollbars
  scrollbars.isHover = function(x, y) {
    return this.horizontal.isHover(x, y) || this.vertical.isHover(x, y);
  };
  // draw both of our scrollbars
  scrollbars.draw = function() {
    this.horizontal.draw();
    this.vertical.draw();
  };
  // check if one of our scrollbars is visible
  scrollbars.visible = function() {
    return this.horizontal.visible || this.vertical.visible;
  };
  // hide it...
  scrollbars.hide = function() {
    // only if we're not using the mousewheel or dragging the cursor
    if (this.willHide || this.dragged) {
      return;
    }
    this.horizontal.visible = false;
    this.vertical.visible = false;
  };

  // get the area's coord relative to our scrollbar
  var toAreaCoord = function(pos, scrollBar) {
    var sbBase = scrollBar.vertical ? scrollBar.top : scrollBar.left;
    var sbMax = scrollBar.vertical ? scrollBar.height : scrollBar.width;
    var areaMax = scrollBar.vertical ? app.HEIGHT - canvas.height : app.WIDTH - canvas.width;

    var ratio = (pos - sbBase) / (sbMax - sbBase);

    return areaMax * ratio;
  };

  // get the scrollbar's coord relative to our total area
  var toScrollCoords = function(pos, scrollBar) {
    var sbBase = scrollBar.vertical ? scrollBar.top : scrollBar.left;
    var sbMax = scrollBar.vertical ? scrollBar.height : scrollBar.width;
    var areaMax = scrollBar.vertical ? app.HEIGHT - canvas.height : app.WIDTH - canvas.width;

    var ratio = pos / areaMax;

    return ((sbMax - sbBase) * ratio) + sbBase;
  }

  scrollbars.scroll = function() {
      // check which one of the scrollbars is active
      var vertical = this.hovered.vertical;
      // until where our cursor can go
      var maxCursorPos = this.hovered[vertical ? 'height' : 'width'];
      var pos = vertical ? 'top' : 'left';
      // check that we're not out of the bounds
      this.hovered.cursor[pos] = this.mousePos < 0 ? 0 :
        this.mousePos > maxCursorPos ? maxCursorPos : this.mousePos;

      // seems ok so tell the app we scrolled
      this[pos] = toAreaCoord(this.hovered.cursor[pos], this.hovered);
      // redraw everything
      app.draw();
    }
    // because we will hide it after a small time
  scrollbars.willHide;
  // called by the wheel event
  scrollbars.scrollBy = function(deltaX, deltaY) {
    // it's not coming from our scrollbars
    this.hovered = null;
    // we're moving horizontally
    if (deltaX) {
      var newLeft = this.left + deltaX;
      // make sure we're in the bounds
      this.left = newLeft > app.WIDTH - canvas.width ? app.WIDTH - canvas.width : newLeft < 0 ? 0 : newLeft;
      // update the horizontal cursor
      this.horizontal.cursor.left = toScrollCoords(this.left, this.horizontal);
      // show our scrollbar
      this.horizontal.visible = true;
    }
    if (deltaY) {
      var newTop = this.top + deltaY;
      this.top = newTop > app.HEIGHT - canvas.height ? app.HEIGHT - canvas.height : newTop < 0 ? 0 : newTop;
      this.vertical.cursor.top = toScrollCoords(this.top, this.vertical);
      this.vertical.visible = true;
    }
    // if we were called less than the required timeout
    clearTimeout(this.willHide);
    this.willHide = setTimeout(function() {
      scrollbars.willHide = null;
      scrollbars.hide();
      app.draw();
    }, 500);
    // redraw everything
    app.draw();
  };

  return scrollbars;
}();

var mousedown = function(e) {
  // tell the browser we handle this
  e.preventDefault();
  // we're over one the scrollbars
  if (app.scrollbars.hovered) {
    // new promotion ! it becomes the dragged one
    app.scrollbars.dragged = app.scrollbars.hovered;
    app.scrollbars.scroll();
  }
};

var mousemove = function(e) {
  // check the coordinates of our canvas in the document
  var rect = canvas.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  // we're dragging something
  if (app.scrollbars.dragged) {
    // update the mouse position
    app.scrollbars.mousePos = app.scrollbars.dragged.vertical ? y : x;
    app.scrollbars.scroll();
  } else if (app.scrollbars.isHover(x, y)) {
    // something has changed, redraw to show or hide the scrollbar
    app.draw();
  }
  e.preventDefault();
};
var mouseup = function() {
  // we dropped it
  app.scrollbars.dragged = null;
};

var mouseout = function() {
  // we're out
  if (app.scrollbars.visible()) {
    app.scrollbars.hide();
    app.scrollbars.dragged = false;
    app.draw();
  }
};

var mouseWheel = function(e) {
  e.preventDefault();
  app.scrollbars.scrollBy(e.deltaX, e.deltaY);
};

canvas.addEventListener('mousemove', mousemove);
canvas.addEventListener('mousedown', mousedown);
canvas.addEventListener('mouseup', mouseup);
canvas.addEventListener('mouseout', mouseout);
canvas.addEventListener('wheel', mouseWheel);

range.onchange = function() {
  app.WIDTH = app.HEIGHT = this.value;
  app.scrollbars.left = 0;
  app.scrollbars.top = 0;
  app.draw();
};

// an initial drawing
app.draw();