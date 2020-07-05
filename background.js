//background

chrome.browserAction.onClicked.addListener(function(tab){
	//send a message to the active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	});
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.message === "redirect_and_delete"){
			

			chrome.tabs.update({url: "https://www.youtube.com/watch?v=FtSd844cI7U"});

			

		}
	}
);