export const disableBrowserBackBtn = () => {
	window.history.pushState(null, '', window.location.href)
	window.onpopstate = function () {
		window.history.go(1)
	}
}
