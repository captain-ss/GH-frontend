export const utils = (function () {

	document.addEventListener('viewChanged', function (e) {
		console.log('view Changed fired');
		window.scrollTo(0, 0);
	}, false);

})();