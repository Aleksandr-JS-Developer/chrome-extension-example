const data = {
	msg: 'hi from popup'
};

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	chrome.tabs.sendMessage(tabs[0].id, data, function (response) {
		console.log('popup: response', response);
	});
});