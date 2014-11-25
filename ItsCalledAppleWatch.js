// if (document.URL.matches(/.*reddit\.com\/.*/)) {
// 	alert("is reddit");
// }

$(document).ready(function() {
	$('body *:contains("\uf8ff")').each(function (idx, elem) {
    var changed = $(elem).html().replace(/\uF8FF[ ]*(watch|Watch|pay|Pay)/g, 'Apple $1');
    $(elem).html(changed);
	});	
});
