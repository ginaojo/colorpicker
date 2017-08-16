/* Exercise 2: Color picker */
function setPreviewColor(color) {
	$('.preview').css('background-color',color);
	$('.color-code').text($('.preview').css('background-color'));
};

$(document).on('keyup', '#color', function() {
		setPreviewColor($('#color').val());
});

function addBox(color) {
	$('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
};

$(document).on('click', '#add-to-favorite', function() {
	addBox($('#color').val());
	$('#color').val('');
	$('#color').focus();

	if ($('#colors .item').length > 16) {
	$('#colors .item').last().remove();
};

});

var colors = ['22ac5e', 'd68236', '770077'];

$(document).ready(function() {
	colors.forEach(function addBox(color) {
	$('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
});
});

$(document).ready(function() {
	var picked = colors[Math.floor(Math.random()*colors.length)];
	setPreviewColor(picked);
});

var previewColor;

$(document).on('mouseenter', '#colors .item', function() {
	previewColor = $('.preview').css('background-color');
	var col = $(this).css('background-color');
	setPreviewColor(col);
});

$(document).on('mouseleave', '#colors', function() {
	setPreviewColor(previewColor);
});