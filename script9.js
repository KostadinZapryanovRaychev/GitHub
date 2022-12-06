// Напишете функция която получава string imgur линк и го връща в обект по следния начин:

// Album линк: http://imgur.com/a/cjh4E => { id: “cjh4E”, type: “album” }
// Gallery линк: http://imgur.com/gallery/59npG => { id: “59npG”, type: “gallery” }
// Image линк: http://imgur.com/OzZUNMM => { id: “OzZUNMM”, type: “image” }
// Image (Direct) линк: http://i.imgur.com/altd8Ld.png => { id: “altd8Ld.png”, type: “image direct” }

let link1 = "Image линк: http://imgur.com/OzZUNMM";
let link2 = "Album линк: http://imgur.com/a/cjh4E";
let link3 = "Gallery линк: http://imgur.com/gallery/59npG";

function objConvertor(str) {
  let obj = {};
  let newStr = str.split(" ").join(",").split("/").join(",").split("//").join();
  let moreNewStr = newStr.split(",");
  let idParam = moreNewStr.pop();
  let typeParam = moreNewStr.shift();
  typeParam = typeParam.toLowerCase();
  let result = "id:" + typeParam;
  obj.id = idParam;
  obj.type = typeParam;
  console.log(obj);
}