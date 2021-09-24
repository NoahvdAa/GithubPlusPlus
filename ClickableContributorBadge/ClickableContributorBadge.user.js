// ==UserScript==
// @name         GH++ | Clickable Contributor Badges
// @namespace    https://github.com/NoahvdAa/GithubPlusPlus
// @version      1.1.0
// @description  Clickable Contributor Badges makes the contributor badges in pull requests and issues clickable. When clicked, the badge will redirect you to the contributions the user made.
// @author       NoahvdAa
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js
// @updateURL    https://github.com/NoahvdAa/GithubPlusPlus/raw/master/ClickableContributorBadge/ClickableContributorBadge.user.js
// ==/UserScript==

(function () {
	'use strict';

	document.arrive('.timeline-comment-label', apply);
	Array.from(document.querySelectorAll('.timeline-comment-label')).forEach(apply);

	function apply(label) {
		if (label.innerText !== 'Contributor' || label.ghpp_clickable) return;
		label.ghpp_clickable = true;
		label.style.cursor = 'pointer';
		label.onclick = function () {
			const repoBaseURL = document.querySelector('[data-pjax="#js-repo-pjax-container"]').href;
			const contributor = label.parentElement.parentElement.querySelector('.author').innerText;

			window.location = `${repoBaseURL}/commits?author=${contributor}`;
		};
	}
})();