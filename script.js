const net = new brain.NeuralNetwork();
let data = [
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  {
    input: {
      r: 0.9635139263655921,
      g: 0.07530711745171725,
      b: 0.7951467253174382,
    },
    output: [1],
  },
  {
    input: {
      r: 0.31905895908922477,
      g: 0.16709705484020643,
      b: 0.08111947015098808,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7863143641900145,
      g: 0.7904685846653188,
      b: 0.04098225078282103,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9483856199821068,
      g: 0.7358818374742284,
      b: 0.1897930494702067,
    },
    output: [0],
  },
  {
    input: {
      r: 0.41374622523930626,
      g: 0.7812519750969975,
      b: 0.9510107425126402,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7269267256565095,
      g: 0.06655218167368937,
      b: 0.725216039794484,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5842846917178721,
      g: 0.42613831215405806,
      b: 0.6863558698418049,
    },
    output: [1],
  },
  {
    input: {
      r: 0.54977194132489,
      g: 0.00035430636483946287,
      b: 0.6619690832966025,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4248926367806767,
      g: 0.8699700958190077,
      b: 0.36340259735190306,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4204883464061733,
      g: 0.5553093815873793,
      b: 0.7383214647689935,
    },
    output: [1],
  },
  {
    input: {
      r: 0.044441726195046494,
      g: 0.9802875875435675,
      b: 0.9215536240919857,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7180739225830828,
      g: 0.33763134960904995,
      b: 0.33097478236232525,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7936395155233353,
      g: 0.5098639862099732,
      b: 0.3907854769625416,
    },
    output: [1],
  },
  {
    input: {
      r: 0.900493025798278,
      g: 0.9600062925865969,
      b: 0.3915403445712087,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7424847110709629,
      g: 0.4507662846253939,
      b: 0.7875140928316684,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6994564579511291,
      g: 0.855832532752119,
      b: 0.9663207081480061,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8857007989613797,
      g: 0.8055803607695378,
      b: 0.4369403437532273,
    },
    output: [1],
  },
  {
    input: {
      r: 0.639359952089946,
      g: 0.7435415322808043,
      b: 0.6727786892126013,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9766206631325309,
      g: 0.34557057093398336,
      b: 0.7167178490455852,
    },
    output: [1],
  },
  {
    input: {
      r: 0.07858812579738417,
      g: 0.20035905399414333,
      b: 0.653548657941474,
    },
    output: [1],
  },
  {
    input: {
      r: 0.04348738451877798,
      g: 0.7333390823682757,
      b: 0.1549351717499079,
    },
    output: [1],
  },
  {
    input: {
      r: 0.20758976371975169,
      g: 0.2937859714598501,
      b: 0.8575512941921535,
    },
    output: [1],
  },
  {
    input: {
      r: 0.020882557097498866,
      g: 0.6218630382262627,
      b: 0.6454587277664867,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6109773695493217,
      g: 0.05398967327997051,
      b: 0.9072546334843496,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9466329923696595,
      g: 0.5083547347255208,
      b: 0.5686946967048438,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5987109592886533,
      g: 0.8553011203873753,
      b: 0.6445625902600836,
    },
    output: [1],
  },
  {
    input: {
      r: 0.84066863765701,
      g: 0.017339284656169296,
      b: 0.41350838291249237,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9359142194513361,
      g: 0.9657233289805982,
      b: 0.05713869165833518,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5650127424120286,
      g: 0.044886301027737385,
      b: 0.9248279887702677,
    },
    output: [1],
  },
];

net.train(data);

const colorE1 = document.getElementById("color");
const guessE1 = document.getElementById("guess");
const whiteBtn = document.getElementById("white-button");
const blackBtn = document.getElementById("black-button");
const printBtn = document.getElementById("print-button");
// const text = document.getElementById("result");
// const input = document.getElementById("input");
// const inputBtn = document.getElementById("input-button");

let color;
randomColor();

whiteBtn.addEventListener("click", () => {
  chooseColor(1);
});

blackBtn.addEventListener("click", () => {
  chooseColor(0);
});

printBtn.addEventListener("click", print);

// inputBtn.addEventListener("click", submit);

// function submit() {
//   data = JSON.parse(input.value);
// }

function print() {
  console.log(JSON.stringify(data));
}

function chooseColor(val) {
  data.push({
    input: color,
    output: [val],
  });
  randomColor();
}

function randomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0];
  console.log(guess);
  guessE1.style.color = guess > 0.5 ? "white" : "black";
  colorE1.style.backgroundColor = `rgba(${color.r * 255},${color.g * 255},${
    color.b * 255
  } )`;
}

// net.train([
//   {
//     input: [0, 0],
//     output: [0],
//   },
//   {
//     input: [1, 0],
//     output: [1],
//   },
//   {
//     input: [0, 1],
//     output: [1],
//   },
//   {
//     input: [1, 1],
//     output: [0],
//   },
// ]);

const diagram = document.getElementById("diagram");
diagram.innerHTML = brain.utilities.toSVG(net);

// console.log(net.run({ r: 1, g: 0, b: 1 }), "==> output=0");
// console.log(net.run({ r: 1, g: 1, b: 1 }), "==> output=0");
// console.log(net.run({ r: 0, g: 0, b: 0 }), "==> output=1");
