System.register(['aurelia-framework', 'bootstrap/css/bootstrap.css!', 'bootstrap', './zoltu-github-reposelector.css!'], function (_export) {
	var customElement, useView, bindable, _classCallCheck, _createDecoratedClass, ZoltuGithubRepoSelector;

	return {
		setters: [function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
			useView = _aureliaFramework.useView;
			bindable = _aureliaFramework.bindable;
		}, function (_bootstrapCssBootstrapCss) {}, function (_bootstrap) {}, function (_zoltuGithubReposelectorCss) {}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

			ZoltuGithubRepoSelector = (function () {
				var _instanceInitializers = {};

				function ZoltuGithubRepoSelector() {
					_classCallCheck(this, _ZoltuGithubRepoSelector);

					this.gitHubAuthToken = _instanceInitializers.gitHubAuthToken.call(this);
				}

				var _ZoltuGithubRepoSelector = ZoltuGithubRepoSelector;

				_createDecoratedClass(_ZoltuGithubRepoSelector, [{
					key: 'gitHubAuthToken',
					decorators: [bindable],
					initializer: function () {},
					enumerable: true
				}], null, _instanceInitializers);

				ZoltuGithubRepoSelector = useView('./zoltu-github-reposelector.html')(ZoltuGithubRepoSelector) || ZoltuGithubRepoSelector;
				ZoltuGithubRepoSelector = customElement('zoltu-github-reposelector')(ZoltuGithubRepoSelector) || ZoltuGithubRepoSelector;
				return ZoltuGithubRepoSelector;
			})();

			_export('ZoltuGithubRepoSelector', ZoltuGithubRepoSelector);
		}
	};
});