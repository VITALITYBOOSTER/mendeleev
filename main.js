const mt = document.querySelector(".mendeleev-table");
addEmpty();
function addEmpty() {
  const structure = [
    `e . . . . . . . . . . . . . . . . . e
     e e . . . . . . . . . . . e e e e e e
     e e . . . . . . . . . . . e e e e e e
     e e . e e e e e e e e e e e e e e e e
     e e . e e e e e e e e e e e e e e e e
     e e e e e e e e e e e e e e e e e e e
     e e e e e e e e e e e e e e e e e e e`
  ][0].split(/\s+/g);

  structure.forEach(char => {
    if (char === ".") {
      mt.appendChild(document.createElement("span"));
    } else {
      mt.appendChild(document.createElement("div"));
    }
  });
}
const elements = [
  `H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc
    Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr
    Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Lu Hf
    Ta W Re Os Ir Pt Au Hg  Tl Pb Bi Po At Rn Fr Ra Ac Lr Rf
    Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og`
][0].split(/\s+/g);

//

const colors = [
  `#e94f4d #f09491 #e94f4d #ee8b2e #008b52 #62b243 #62b243 #62b243 #fac600 #f49089 #e94f4d #f7872c #008b52 #008b52 #62b243 #62b143
  #f9c800 #ec928b #e74e4e #ee8b2e #88adca
  #88adca #88adca #88adca #88adca #88adca #88adca #88adca #88adca #88adca #4b85c1 #008956 #008956 #61b241 #f8c502
  #f1958d #e94e52 #ee8b30 #8aafcc #8aafcc
  #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #4c88c4 #4c88c4 #008b52 #008b52 #fac600 #f1928a
  #e04c4b #ee8b2e #6cbeb0 #6cbeb0 #8aafcc
  #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #4c88c4 #4c88c4 #4c88c4 #4c88c4 #f8c502 #ee9891
  #e94f4d #ee8b2e #00a0aa #00a0aa #8aafcc
  #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #8aafcc #4c88c4 #4c88c4 #4c88c4 #4c88c4 #f9c801 #f19191`
][0].split(/\s+/g);

//

let divs = Array.prototype.slice
  .call(document.getElementsByClassName("mendeleev-table")[0].childNodes)
  .filter(item => item.nodeName == "DIV")
  .map((item, index) => {
    item.innerHTML = elements[index];
    item.classList.add("element");
    item.style.backgroundColor = colors[index];
  });

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let input = document.querySelector('.input');
console.log(input)

let num = document.getElementsByClassName("numbers")[0];
numbers.forEach(() => {
  num.appendChild(document.createElement("div"));
});
let innerdivs = [...document.querySelector(".numbers").childNodes].map(
  (el, i) => {
    el.innerHTML = numbers[i];
  }
);
console.log(innerdivs);
num.onclick = (e) => {
    if(e.target === num) {return;}
    input.innerHTML += e.target.innerHTML;
};
mt.onclick = (e) => {
    if(e.target === mt) {return;}
    input.innerHTML += e.target.innerHTML;
}