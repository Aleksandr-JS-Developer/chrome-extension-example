chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log('inject: request', request)
		sendResponse({
			msg: 'hi from inject!!'
		});
	}
);

const data = {
	name: 'Bob'
}

// chrome.runtime.sendMessage(data , (response) => {
// 	console.log(response);
// });