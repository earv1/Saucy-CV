//The outer level should never be divs, it should be a saucy-cv element.
//I already set the parent element of each saucy-cv-entry
//I now need to keep track of the parent elements and insert
//new ones to their relevent parent element.

//-Keeping Track
//I can do this with a hashmap/dictionary.
//I can do this by keeping a current parent and making the reorganize function recursive.
//The second way is probably the best but it may be better to change the data structure to suit it
//Heading->SubHeaders
//       ->entries
//       ->sub-section
//A subsection can hold headings
//Headings must always be available, if there isn't one at the beggining
//A blank one needs to be generated.
//TODO
//Remove hashmaps and instead use a tree like structure.
//a saucy subsection should be used which will list all its children.


//class
function Reorganizer(config){
    this.$__tmpContainer = $('<div></div>');
    this.$__flagSeen = $('<saucy-seen></saucy-seen>');//✔

    //existing elements/ container
    this.$contentContainer = config.$contentContainer;
    this.$dynamicCvContainer = config.$dynamicCvContainer;
    this.$regularCvContainer = config.$regularCvContainer;
    this.$buttonContainer    = config.$buttonContainer;

    this.cvHeaderRegex = new RegExp('saucy-cv-header','i');
    this.cvEntryRegex = new RegExp('saucy-cv-entry','i');
    this.cvSubsectionRegex = new RegExp('saucy-cv-sub-section','i');
    // this.$regularCvContainer.html('test');


    console.log("constructor loaded");

    this.rootEntry = this.parseElements(this.$regularCvContainer);
    this.insertCategorybuttons();
}
/*TODO
Either take out parentElement and Entries or put them in for the container elements
 */

Reorganizer.prototype.parseElements = function(containerElement){

  //var containerEntry = this.parseSaucyElement(containerElement,null,null);

  var _class = this;
  console.log("parse start, parent: " + containerElement.getTag());
  var containerElementChildren = containerElement.children();

  var currentHeader = null;

  containerElementChildren.each(function(childElement){

  console.log("parseSaucyElementBeforePasss "+ $(this).getTag());

    if(_class.cvEntryRegex.test($(this).getTag())){
      _class.parseSaucyElement($(this),currentHeader, containerElement);
    }
    else if(_class.cvHeaderRegex.test($(this).getTag())){//regex search for saucy-cv-header
      console.log($(this));
      currentHeader= ($(this));
    }else if(_class.cvSubsectionRegex.test($(this).getTag())){
       _class.parseElements($(this));

    }
  });
  return containerEntry;
};

Reorganizer.prototype.parseSaucyElement = function(currentElement,headerElement,parentEntry){
  var _class = this;

  console.log("parseSaucyElement: "+ currentElement.getTag());
  var saucyTagsString = $(currentElement).attr('saucy-tags');
  var saucyTags = saucyTagsString.split(';');

  $.each(saucyTags, function(id, val){

    console.log(val);

    var currentHashMap = parentEntry.getRelevantHash(val);
    var saucyTag = _class.getTagName(val);
    var entry = new CvEntry();
    entry.element = currentElement;
    entry.headerElement = headerElement;
    entry.parentEntry = parentEntry;

    if(!currentHashMap.peek(saucyTag)){
      var elementArray = [];

      elementArray.push(entry);
      currentHashMap.setVal(saucyTag,elementArray);
    }
    else{
      currentHashMap.getVal(saucyTag).push(entry);
    }
  });
};

Reorganizer.prototype.getRelevantHash = function(unprocessed_tag){
  var saucyTag = unprocessed_tag.trim();
  var tagType = saucyTag.charAt(0);

  var currentHashMap =[];
  switch(tagType){
    case '$': return tag.roles;
//      break;
    case '#': return tag.skills;
//      break;
  }
  return currentHashMap;

};
Reorganizer.prototype.getTagName = function(unprocessed_tag){//the getRelevantHash method and this could be more efficient but trimming each time allows less complex looking code.
    var saucyTag = unprocessed_tag.trim().toLowerCase();
    return  saucyTag.substring(1);
};

Reorganizer.prototype.insertCategorybuttons=function(){
  var _class = this;
  var buttonBase = $("<button class = 'simple-button'></button>");
  //  onclick ='reorganize("#Communication")'>Communication</button>

  console.log("categories");
  this.rootEntry.getRelevantHash('#').forEach(function(key,value){
    var newButton = buttonBase.clone();
    newButton.click(function(){_class.startShowEntriesWithTag('#'+key);});
    newButton.html(key);

    _class.$buttonContainer.append(newButton);
    console.log(key);
  });
};

Reorganizer.prototype.appendEntries = function(containerElement, children){

};

Reorganizer.prototype.startShowEntriesWithTag = function(tag){
  this.showEntriesWithTag(this.rootEntry,tag);
};
Reorganizer.prototype.showEntriesWithTag = function(parentEntry, tag){
  var _class = this;

  console.log("reorganize start");
     var currentHash = parentEntry.getRelevantHash(tag);
     console.log("current hash: " + currentHash);
     var tag = this.getTagName(tag);
     console.log("tag: " +tag);
    var elementsWithTag = currentHash.getVal(tag);
    console.log("Array in hash: " +elementsWithTag);

    this.resetColor(this.$regularCvContainer);

    this.$__tmpContainer.html('');
    this.$dynamicCvContainer.html('');
    //There might be a better way to do this.

    var lastHeader = null;
    var newContents = '';

    $.each(elementsWithTag, function(id, entry){
       console.log("header element: " + entry.headerElement);
       if(entry.headerElement!==null && entry.headerElement != lastHeader){
          lastHeader = entry.headerElement;

          var headerElementCopy= entry.headerElement.clone();
          _class.$__tmpContainer.append(headerElementCopy);

       }
       _class.$__tmpContainer.append('<br/>');

       var elementCopy = entry.element.clone();
       if(entry.element.attr("seen")!=='true'){
         entry.element.attr("seen",true);
         entry.element.append(_class.$__flagSeen.clone());
       }

       _class.$__tmpContainer.append(elementCopy);

       entry.element.css('color','grey') ;
    });
    this.$dynamicCvContainer.smoothAppendElement(this.$__tmpContainer);
    console.log("before height: " + this.$__tmpContainer.height());
    console.log("after height: " + this.$__tmpContainer.height());
};

Reorganizer.prototype.resetColor = function(containerElement){
  containerElement.children().each(function(value){
    $(this).css('color','black') ;
  });
};
