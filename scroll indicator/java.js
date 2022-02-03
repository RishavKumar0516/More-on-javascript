/* when the user scroll the page, the function Execute. */
window.onscroll = function(){
    var winscroll = document.body.scrollTop||document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winscroll/height)*100;
    document.getElementById('mybar').style.width = scrolled + '%';
}


/* 
The documentElement property returns the documentElement of the document, as an Element object the document.
documentElement returns the <html> element. */

/* The scrollTop property sets or returns the number of pixels an element's content is scrolled vertically. */

/* The scrollHeight property returns the entire height of an element in pixels, including padding, but not the border, scrollbar or margin. */

/* The clientHeight property returns the viewable height of an element in pixels, including padding, but not the border, scrollbar or margin.

The reason why the "viewable" word is specified, is because if the element's content is taller than the actual height of the element, this property will only return the height that is visible (See "More Examples"). */