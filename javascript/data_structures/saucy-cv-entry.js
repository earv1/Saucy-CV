var HashMap = function(){
    this.values = {};

//    return values;
};
HashMap.prototype.peek = function(index){
    return this.values[index]!==undefined;// ? true : false;
};
HashMap.prototype.getVal = function(index){
    return this.values[index]!==undefined ? this.values[index] : undefined;
};

HashMap.prototype.setVal = function(index, value){
    this.values[index] = value;

};
HashMap.prototype.forEach = function(functor){
    for (var key in this.values){
        var value = this.values[key];
        functor(key,value);
    }
};
HashMap.prototype.toString= function(){
    var output = 'Hash: ';
    this.forEach(
        function(key,value){
            output+='{'+ key + ', '+value+'}';
        }
    );
    return output;
};



var Tags = function(){
    this.roles = new HashMap();
    this.skills = new HashMap();
};
//tag.roles = new HashMap();
//tag.skills= new HashMap();
var tag = new Tags();
//console.log('Hashmap test ' + tag['roles']);

var Entry = function(){
  var entry =
  {
    type:null,
    parentEntry:null,
    tags:new Tags(),
    element:null
  };
  entry.getRelevantHash=prototypeGetRelevantHash;
  return entry;
};

var prototypeGetRelevantHash = function(unprocessed_tag){
  var tagName = unprocessed_tag.trim();
  var tagType = tagName.charAt(0);
  var currentHashMap =[];
  switch(tagType){
    case '$': return this.tags.roles;
//      break;
    case '#': return this.tags.skills;
//      break;
  }
  return currentHashMap;

};
// var eTest = Entry.bind({});
// e = {}       // generic object
// e.foo = 1
// e["bar"] = 2    // name specified at runtime
var CvEntry = function(){
  var cvEntry = new Entry();
  cvEntry.type ='CvEntry';
  //cvEntry.categories=[];
  //cvEntry.roles=[];


  return cvEntry;
};

var Header = function(){
  var header = new Entry();
  header.type='Header';
  header.parentEntry = null;

  return header;
};

var htest = new Header();
console.log('inheritence test:' +htest.type);

var test = {};
test.lies = '42';

console.log('variable test:' + test.lies);
