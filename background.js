let contextMenuItem = {
    "id": "open-wp-dashboard",
    "title": "Open WordPress Dashboard",
    "contexts": ["page"]
};
chrome.contextMenus.create(contextMenuItem);

let currUrl = window.location.href;
console.log(currUrl);
console.log(window.location)

// chrome.contextMenus.onClicked.addListener(function(clickData) {
//     console.log(clickData);
//     console.log(OnClickData.menuItemId);
//     alert(OnClickData.menuItemId);
// })
function contextItemClicked() {
    console.log('clicked')
}
chrome.contextMenus.onClicked.addListener({
    callback: contextItemClicked()
})

// chrome.contextMenus.create({title: 'My menu', id: 'my_menu'});
//
// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//     if (info.menuItemId = 'my_menu') {
//         console.log(info);
//     }
// })