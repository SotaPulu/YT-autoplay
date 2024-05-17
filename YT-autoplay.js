// ==UserScript==
// @name         YT autoplay
// @namespace    http://tampermonkey.net/
// @version      2024-05-17
// @description  dead-simple script to bypass that annoying "Are you still watching?" popup. Is it optimized? no. Does it work? Sometimes. Did I hack it together in literally 2 minutes? absolutely.
// @author       SotaPulu
// @match        https://www.youtube.com/watch?v=VA69HxJW23E&list=PLNaR09R2UF4zqGS3CGLC3V_UWviSZVMY0&index=8
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    setInterval(() => {
        let yesButton = document.getElementById("confirm-button");
        if (yesButton) {
            yesButton.click();
        }
    }, 100);
})();