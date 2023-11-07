/* Bubblesort */
function CreateNavBar() {
  let slider = document.createElement("input");
  slider.type = "range";
  slider.setAttribute("class", "slider");
  slider.min = 10;
  slider.max = 100;
  slider.value = 1;
  slider.step = 1;
  document.querySelector(".nav-bar").appendChild(slider);

  let sliderDelay = document.createElement("input");
  sliderDelay.type = "range";
  sliderDelay.setAttribute("class", "delay-duration");
  sliderDelay.min = 0.001;
  sliderDelay.max = 100;
  sliderDelay.value = 0.001;
  sliderDelay.step = 0.001;
  document.querySelector(".nav-bar").appendChild(sliderDelay);
  let outputDelay = document.createElement("p");
  outputDelay.setAttribute("class", "output-delay");
  document.querySelector(".nav-bar").appendChild(outputDelay);
  let output = document.createElement("p");
  output.setAttribute("class", "output");
  document.querySelector(".nav-bar").appendChild(output);
}
let index = 0;

CreateNavBar();

let collection = [];

document.querySelector(".slider").oninput = () => {
  for (let i = 0; i < collection.length; i++) {
    let box = document.querySelector(`.box${i}`);
    box.remove();
  }

  document.querySelector(".output").innerText =
    document.querySelector(".slider").value;

  collection = [];
  for (let i = 0; i < document.querySelector(".slider").value; i++) {
    let random = Math.floor(
      Math.random() * document.querySelector(".slider").value
    );
    let box = document.createElement("div");
    let sliderValue = document.querySelector(".slider").value;
    collection.push(box);
    box.setAttribute("class", `box${i}`);
    let randomValue = `${(random / sliderValue + 0.02) * 90}%`;
    box.style.height = randomValue;
    box.value = randomValue;
    document.querySelector(".boxes").appendChild(box);
    document.querySelector(
      ".boxes"
    ).style.gridTemplateColumns = `repeat(${sliderValue},1fr )`;
  }
  return collection;
};
function delay(delayDuration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("delayed");
    }, delayDuration);
  });
}
async function BubbleSort(collection) {
  for (let i = 0; i < collection.length; i++) {
    for (let l = 0; l < collection.length - 1; l++) {
      let box1 = document.querySelector(`.box${l}`).style.height;
      let box2 = document.querySelector(`.box${l + 1}`).style.height;
      if (box2.length)
        if (+box1.replace("%", "") > +box2.replace("%", "")) {
          let temp = box2;

          document.querySelector(`.box${l + 1}`).style.height = box1;
          document.querySelector(`.box${l}`).style.height = temp;
        }
      const result = await delay(
        document.querySelector(".delay-duration").value
      );
      console.log(result);
    }
  }
}

/* QuickSort */

/* async function quickSort(collection) {
  if (collection.length <= 1) {
    return collection;
  }
  let pivot = collection[0];
  pivot.style.backgroundColor = "green";
  let collectionLeft = [];
  let collectionRight = [];
  console.log({ pivot: pivot });
  for (let i = 1; i < collection.length; i++) {
    let next = collection[i];
    if (
      +pivot.style.height.replace("%", "") > +next.style.height.replace("%", "")
    ) {
      next.style.backgroundColor = "red";
      collectionLeft.push(next);
      console.log({ leftarray: collectionLeft });
    } else {
      collectionRight.push(next);
      console.log({ rightarray: collectionRight });
    }
  }
  console.log({ array: collection });
  pivot.style.backgroundColor = "blue";

  const returnValue = await delay(delay(quickSort(collectionLeft)).concat(
    pivot,
     delay(quickSort(collectionRight))));

  return  
  );
}
 */
let sort = document.querySelector(".start-sort");
document.querySelector(".delay-duration").oninput = () => {
  document.querySelector(".output-delay").innerText =
    document.querySelector(".delay-duration").value;
};
function mergeSort(collection) {
  let pivot = Math.floor(collection.length / 2);
  let left = collection.slice(0, pivot);
  let right = collection.slice(pivot, collection.length);

  return mergeArrays(mergeSort(left), mergeSort(right));
}
function mergeArrays(left, right) {
  let result = [];
  while(left.lenght && right.lenght){

    if(+left[i].style.height.replace("%","") > +right[i].style.height.replace("%",""))
    {

    } else 

  }
    
  
}
sort.onclick = () => {
  collection = mergeSort(collection);
  console.log({ ende: collection });
};
