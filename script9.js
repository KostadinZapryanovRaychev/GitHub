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

const link4 = "the link is the most important thin";
const link5 = "http://wwww.facebook.com";

// configuring git on global scope

// git config --global user.name "Kostadin Raychev"
// git config --global user.email "k.raychev@abv.bg"
// git config --global --list // pokazva kak sme si setnali user.name and user.email
// git log // all the commits listed out
// git branch <name> // creates new branch for us
// git switch <name> // i se prehvurlqme na drugiq branch
// git switch -c <name> // pravim nov branch i otivame na nego direktno

const javascript = "Verry stuping thing";
