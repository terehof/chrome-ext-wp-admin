chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "openWPDashboard",
        "title": "Open WP Dashboard",
        "contexts": ["page"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "openWPDashboard") {
        var newURL = new URL(tab.url);
        newURL.pathname = "/wp-admin/";
        chrome.tabs.create({ url: newURL.href });
    }
});