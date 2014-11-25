// if (document.URL.matches(/.*reddit\.com\/.*/)) {
// 	alert("is reddit");
// }

$(document).ready(function() {
	$('body *:contains("\uf8ff")').each(function (index, element) {
    var noMoreApple = $(element).html().replace(/\uF8FF[ ]*(watch|Watch|pay|Pay)/g, 'Apple $1');
    $(element).html(noMoreApple);
	});	
});
