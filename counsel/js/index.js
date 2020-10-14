document.getElementById("trigger").onclick = function() {
	open()
};

function open() {
	document.getElementById("menu").classList.toggle("header-menu_show");
	document.getElementById("lang").classList.toggle("header-lang_show");
	document.getElementById("header-menu").classList.toggle("header-menu_show");
}