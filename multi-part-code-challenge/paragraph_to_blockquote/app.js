window.onload = function() {
	var editableDivs = document.querySelectorAll("div[contenteditable='true'");
	var numDivs = editableDivs.length;
	var currDiv;

	// change paragraphs to blockquotes on all content editable divs
	for (var i = 0; i < numDivs; i++) {
		currDiv = editableDivs[i];
		changePgh(currDiv.children);
	}

	// change any paragraphs in element list to blockquotes, starting at bottommost children
	function changePgh(elems) {
		var numElems = elems.length;
		var currElem;
		for (var i = 0; i < numElems; i++) {
			currElem = elems[i];
			
			// iterate over children first
			var children = currElem.children;
			if (children.length > 0) {
				changePgh(children);
			}

			// create new blockquote with the same inner html, add to parent, then remove paragraph
			if (currElem.tagName == 'P') {
				var bq = document.createElement('blockquote');
				bq.innerHTML = currElem.innerHTML;
				currElem.parentNode.insertBefore(bq, currElem);
				currElem.parentNode.removeChild(currElem);
			}	
		}
	}
}


