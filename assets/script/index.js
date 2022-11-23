'use-strict';

/*
  Seth Vandenbos

  Alarm Clock
*/

// Utility Functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

function create(element, parent = document) {
  return parent.createElement(element);
}


const button = select('.create');
const color = select('.color');
const shape = select('.shape');
const output = select('.output');
const body = select('.factory-body');
let arr = [];
color.selectedIndex = 0;
shape.selectedIndex = 0;

class Shape {
  constructor(name, color) {
    this.name = name;
    this.setColor(color);
  }

  getShape() {
    this._name = this.name
    return this._name
  }

  setColor(color) {
    this._color = color;
  }

  getColor() {
    return this._color;
  }
  
  getInfo() {
    return `${this._color} ${this._name}`
  }
}

function createShape(shape, colour) {
  const newShape = new Shape(shape, colour);
  return newShape;
}

function info(self) {
  let number = self.getAttribute('data-number');
  let colorShape = self.getAttribute('name');
  output.innerText = `Item ${number}: ${colorShape}`;
}

function details(obj) {
  if (arr.length < 24) {
    let thisShape = create('div');
    if (obj.getShape() === 'circle') {
      thisShape.style.borderRadius = '50%';
    } else {
      thisShape.style.borderRadius = '6px';
    }
    let color = obj.getColor();
    switch (color) {
      case 'blue':
        thisShape.style.backgroundColor = `var(--app-blue)`
        break;
      case 'green':
        thisShape.style.backgroundColor = `var(--app-green)`
        break;
      case 'orange':
        thisShape.style.backgroundColor = `var(--app-orange)`
        break;
      case 'pink':
        thisShape.style.backgroundColor = `var(--app-pink)`
        break;
      case 'purple':
        thisShape.style.backgroundColor = `var(--app-purple)`
        break;
    }
    thisShape.setAttribute('name', obj.getInfo())
    thisShape.setAttribute('data-number', `${arr.length + 1}`)
    thisShape.setAttribute('onclick', 'info(this)')
    body.appendChild(thisShape)
    arr.push(thisShape)
  } else {
    output.innerText = 'Content full';
    setTimeout(() => {
      output.innerText = ''
    }, 2_000)
  }
}

onEvent('click', button, function() {
  if (shape.selectedIndex != 0 && color.selectedIndex != 0) {
    details(createShape(shape.value, color.value))
  } else {
    output.innerText = 'Please select shape and color'
    setTimeout(() => {
      output.innerText = ''
    }, 2_000)
  }
});