$(function() {
    $("#datepicker_pop").datepicker({
        dateFormat: 'm/d(DD)',
        firstDay: 0,
        yearSuffix: '年',
        showMonthAfterYear: true,
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        dayNames: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
        minDate: new Date(),
        maxDate: '+12m',
        hideIfNoPrevNext: true,
        onSelect: function (dateText, inst) {
            let message;
            let time = $("#time").val();
            if(time === "") {
                message = dateText;
            }
            else {
                message = dateText + " " + time + "〜";
            }
    
            chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {message: message}, function(content){
                    // pass
                });
            });
        }
    });
});