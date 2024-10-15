console.log("hiiiiiiii");
console.log("byee");

setTimeout(() => {
  console.log("I am inside settimeout");
}, 2000);

console.log("I am outside settimeout");

const fn=()=>{
    console.log("first")
}
const callback = (arg) => {
  console.log(arg);
  fn()
};
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("xyz",fn);
  document.head.appendChild(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)