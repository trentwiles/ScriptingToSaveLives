// Add more items here:
var data = {
  "Support Yale New Haven Hospital " :"https://ynhh.everydayhero.com/us/scripting-to-save-lives",
  "Folding at home: Dedicate your cpu to help find a coronavirus cure. Try it ":"https://foldingathome.org/",
  "The world health organization is helping fight the coronavirus. Donate ":"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
}
// https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
function randomKey(obj) {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
};
var curNumber = 0;
function loopThrough(){
  curNumber ++;
  var pos = curNumber % Object.keys(data).length;
  var curKey = Object.keys(data)[pos];
  var curValue = data[curKey];
  $(".take-action").slideUp("fast",function(){
    $(".take-action").html(curKey+" <a style=\"inherit\" class=\"whitetext\"href=\""+curValue+"\">here.</a>");
    $(".take-action").slideDown("slow",function(){
      setTimeout(loopThrough, 7500)
    })
    
  })
}
loopThrough();