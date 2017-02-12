// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                // That fires when a page's URL contains 'facebook.com' ...
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'facebook.com' },
                    })
                ],
                // And shows the extension's page action.
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

var url = window.location.href;
// Get DIV
var msg = document.getElementById('span');

var div = document.getElementById("_6a_5u5j_6b");
var spans = div.getElementsByTagName("span");
var list = spans.getElementsByClassName("fcg");

for(i=0;i<list.length;i++)
{
    alert(list[i].innerHTML);
}