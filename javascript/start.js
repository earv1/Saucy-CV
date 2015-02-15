/*
TODO Design Goals
Make the html simple to understand and use
Make it flexible enough that it can have anything a normal cv would have



TODO
Create way to display time. Time should be next to block of text.
Find another way to get height right rather than multiplying by 1.3
Figure out how to do subsections. Recursive code will solve the backend problems. Probably need to adjust the css a little bit.
Figure out how to auto number and bullet sections. wrapping them in ul ol and li tags should solve the problem but might look messy.

I also need to figure out a way to put in lists and other html stuff. I don't like mixing so one or the other should be better.





*/
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui nisi, porttitor ut luctus vel, iaculis eu risus. Vestibulum sit amet turpis lobortis, malesuada dolor eu, consectetur nisi. In hac habitasse platea dictumst. Etiam scelerisque ligula eu metus efficitur aliquam. Nam rhoncus justo ac odio mollis consectetur. Morbi consequat viverra urna, non accumsan neque convallis non. In luctus a mi in suscipit. Cras tristique, felis at facilisis laoreet, nisl nulla bibendum dui, et placerat ipsum dolor vitae urna. Cras volutpat hendrerit libero, quis accumsan quam condimentum varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin condimentum sollicitudin dapibus. Nulla porta lacinia dolor, in posuere nisi condimentum id. Nulla ipsum ex, molestie vitae condimentum vel, commodo eget tellus. ';
$(document).ready(function(){prepare();});

//existing elements
var containerTag, categoryContainer, contentTag;

//generated elements
var saucySeen,tmpContainer;

//data structures
var categoryHashMap,roleHashMap;
function prepare(){//main/ start wanted to give this a better name
    //existing elements //TODO change all to use jquery tags from the beginning

    var config ={
      $dynamicCvContainer : $('#cv-container'),
      $regularCvContainer : $('#cv-main-content'),
      $buttonContainer  : $('#button-container'),
      $contentContainer : $('#main-content')

    };
    // $('#button-container').html('go');
    var reorganizer = new Reorganizer(config);

    // reorganizer.parseElements();


    // containerTag = '#cv-container';
    // contentTag = '#main-content';//
    // $categoryContainer = $('#category-container');



    // insertCategorybuttons();
}
