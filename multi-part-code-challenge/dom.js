$(function() {
	//will change to blockquotes in after 2 seconds.  requires jquery.
	setTimeout(function(){
		$("#contenteditable> p").contents().unwrap().wrap("<blockquote></blockquote>");
	},2000);
});
