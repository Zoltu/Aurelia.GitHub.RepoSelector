System.register([], function (_export) {
	_export('install', install);

	function install(aurelia) {
		aurelia.globalizeResources('./zoltu-github-reposelector');
	}

	return {
		setters: [],
		execute: function () {
			'use strict';
		}
	};
});