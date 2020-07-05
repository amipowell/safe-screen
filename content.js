//content.js



chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request, sender, sendResponse){
			if(request.message === "clicked_browser_action"){

				//redirect current tab and delete browsing history
				
					
				chrome.runtime.sendMessage({"message": "redirect_and_delete"});
				

			}
		}
	})