// Click "more options" button
setTimeout(function() {
    document.getElementsByClassName('sc-29427738-0 sc-65824775-0 nFISH feLpIY sc-9a637e94-1 kSESLX sc-b193fe69-1 cZCRsp')[2].click();
}, 500);

// Click "Refresh Metdata" option
setTimeout(function() {
    document.getElementsByClassName('sc-b267fe84-0 cRVARX sc-29427738-0 sc-630fc9ab-0 sc-d03d110-0 bBUaNU jSPhMX jveAwS')[0].click();
}, 1000);

// Navigate to the next url
setTimeout(function() {
    window.location.href = "[link]" + (parseInt(window.location.href.split("/").pop()) + 1);
}, 2000);