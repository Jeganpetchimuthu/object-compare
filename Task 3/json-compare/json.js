function compareObj(json1, json2) {
  let obj1 = JSON.stringify(json1, Object.keys(json1).sort());
  let obj2 = JSON.stringify(json2, Object.keys(json2).sort());

  return obj1 === obj2;
}
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

console.log(compareObj(obj1, obj2));
