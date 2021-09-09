// ==UserScript==
// @name         GH++ | Clickable Contributor Badges
// @namespace    https://github.com/NoahvdAa/GithubPlusPlus
// @version      1.0.0
// @description  Clickable Contributor Badges makes the contributor badges in pull requests and issues clickable. When clicked, the badge will redirect you to the contributions the user made.
// @author       NoahvdAa
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	Array.from(document.querySelectorAll('.timeline-comment-label')).forEach(label => {
		if (label.innerText !== 'Contributor') return;
		label.style.cursor = 'pointer';
		label.onclick = function () {
			const repoBaseURL = document.querySelector('[data-pjax="#js-repo-pjax-container"]').href;
			const contributor = label.parentElement.parentElement.querySelector('.author').innerText;

			console.log(label.parentElement.parentElement);
			window.location = `${repoBaseURL}/commits?author=${contributor}`;
		};
	});
})();