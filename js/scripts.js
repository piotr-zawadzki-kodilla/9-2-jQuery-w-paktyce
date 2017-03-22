$(document).ready(function() {
	$('span:even').css({'color': 'red'});

	var paragraphs = $('p');
	paragraphs.each(function(index, el) {
		var button = '<button class="btn" data-tmp="' + index +'">Kliknij mnie</button>';
		$(el).append(button);
	});

	$("button").click(function() {
		alert($(this).attr("data-tmp"));
	});
});
