chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    let nowText = $('#kouho').val();
    if (nowText === "") {
        $("#kouho").val(request.message);
    }
    else {
        $("#kouho").val(nowText + "\n" + request.message);
    }
    
    // an error will occur if not sendResponse
    sendResponse("");
});