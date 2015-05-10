System.register(['aurelia-framework', 'aurelia-http-client', 'bootstrap/css/bootstrap.css!', 'bootstrap', './zoltu-github-reposelector.css!'], function (_export) {
	var customElement, useView, bindable, computedFrom, inject, HttpClient, ZoltuGithubRepoSelector;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
			useView = _aureliaFramework.useView;
			bindable = _aureliaFramework.bindable;
			computedFrom = _aureliaFramework.computedFrom;
			inject = _aureliaFramework.inject;
		}, function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}, function (_bootstrapCssBootstrapCss) {}, function (_bootstrap) {}, function (_zoltuGithubReposelectorCss) {}],
		execute: function () {
			'use strict';

			ZoltuGithubRepoSelector = (function () {
				var _instanceInitializers = {};

				function ZoltuGithubRepoSelector(httpClient) {
					_classCallCheck(this, _ZoltuGithubRepoSelector);

					_defineDecoratedPropertyDescriptor(this, 'gitHubAuthToken', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'selectionCallback', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'queryFailureCallback', _instanceInitializers);

					this.inputUser = '';
					this.inputRepo = '';
					this.repositories = [];

					this.httpClient = httpClient;
				}

				var _ZoltuGithubRepoSelector = ZoltuGithubRepoSelector;

				_createDecoratedClass(_ZoltuGithubRepoSelector, [{
					key: 'bind',
					value: function bind(bindingContext) {
						var _this = this;

						this.httpClient.configure(function (x) {
							return x.withHeader('Authorization', 'token ' + _this.gitHubAuthToken);
						});
					}
				}, {
					key: 'gitHubAuthToken',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'selectionCallback',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'queryFailureCallback',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'inputValidated',
					decorators: [computedFrom('inputUser', 'inputRepo')],
					get: function () {
						return this.inputUser == '' && this.inputRepo == '';
					}
				}, {
					key: 'constructQuery',
					value: function constructQuery() {
						if (this.inputUser == '' && this.inputRepo == '') return '';else if (this.inputUser == '') return '' + this.inputRepo + '+in:name';else if (this.inputRepo == '') return 'user:' + this.inputUser;else return '' + this.inputRepo + '+in:name+user:' + this.inputUser;
					}
				}, {
					key: 'search',
					value: function search() {
						var _this2 = this;

						this.httpClient.get('https://api.github.com/search/repositories?q=' + this.constructQuery()).then(function (httpResponseMessage) {
							_this2.repositories = httpResponseMessage.content.items;
						}, function (httpResponseMessage) {
							_this2.queryFailureCallback(httpResponseMessage);
						});
					}
				}, {
					key: 'repoSelected',
					value: function repoSelected(repo) {
						this.selectionCallback(repo);
					}
				}], null, _instanceInitializers);

				ZoltuGithubRepoSelector = inject(HttpClient)(ZoltuGithubRepoSelector) || ZoltuGithubRepoSelector;
				ZoltuGithubRepoSelector = useView('./zoltu-github-reposelector.html')(ZoltuGithubRepoSelector) || ZoltuGithubRepoSelector;
				ZoltuGithubRepoSelector = customElement('zoltu-github-reposelector')(ZoltuGithubRepoSelector) || ZoltuGithubRepoSelector;
				return ZoltuGithubRepoSelector;
			})();

			_export('ZoltuGithubRepoSelector', ZoltuGithubRepoSelector);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvbHR1LWdpdGh1Yi1yZXBvc2VsZWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt5RUFTYSx1QkFBdUI7Ozs7Ozs7Ozs7cUNBVDNCLGFBQWE7K0JBQUUsT0FBTztnQ0FBRSxRQUFRO29DQUFFLFlBQVk7OEJBQUUsTUFBTTs7bUNBQ3RELFVBQVU7Ozs7O0FBUU4sMEJBQXVCOzs7QUFDeEIsYUFEQyx1QkFBdUIsQ0FDdkIsVUFBVSxFQUFFOzs7Ozs7Ozs7VUFZeEIsU0FBUyxHQUFHLEVBQUU7VUFDZCxTQUFTLEdBQUcsRUFBRTtVQUNkLFlBQVksR0FBRyxFQUFFOztBQWJoQixTQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM3Qjs7bUNBSFcsdUJBQXVCOzs7O1lBSy9CLGNBQUMsY0FBYyxFQUFFOzs7QUFDcEIsVUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2NBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLGFBQVcsTUFBSyxlQUFlLENBQUc7T0FBQSxDQUFDLENBQUM7TUFDL0Y7OztrQkFFQSxRQUFROzs7OztrQkFDUixRQUFROzs7OztrQkFDUixRQUFROzs7OztrQkFLUixZQUFZLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztVQUNyQixZQUFHO0FBQ3BCLGFBQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7TUFDcEQ7OztZQUVhLDBCQUFHO0FBQ2hCLFVBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQy9DLE9BQU8sRUFBRSxDQUFDLEtBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFDNUIsWUFBVSxJQUFJLENBQUMsU0FBUyxjQUFXLEtBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQzVCLGlCQUFlLElBQUksQ0FBQyxTQUFTLENBQUcsS0FFaEMsWUFBVSxJQUFJLENBQUMsU0FBUyxzQkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBRTtNQUMxRDs7O1lBRUssa0JBQUc7OztBQUNSLFVBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxtREFBaUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFHLENBQUMsSUFBSSxDQUFDLFVBQUMsbUJBQW1CLEVBQ3RIO0FBQ0MsY0FBSyxZQUFZLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztPQUN0RCxFQUFFLFVBQUMsbUJBQW1CLEVBQ3ZCO0FBQ0MsY0FBSyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO09BQy9DLENBQUMsQ0FBQztNQUNIOzs7WUFFVyxzQkFBQyxJQUFJLEVBQUU7QUFDbEIsVUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO01BQzdCOzs7QUE1Q1csMkJBQXVCLEdBRG5DLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTix1QkFBdUIsS0FBdkIsdUJBQXVCO0FBQXZCLDJCQUF1QixHQUZuQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FFL0IsdUJBQXVCLEtBQXZCLHVCQUF1QjtBQUF2QiwyQkFBdUIsR0FIbkMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBRzlCLHVCQUF1QixLQUF2Qix1QkFBdUI7V0FBdkIsdUJBQXVCOzs7c0NBQXZCLHVCQUF1QiIsImZpbGUiOiJ6b2x0dS1naXRodWItcmVwb3NlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgdXNlVmlldywgYmluZGFibGUsIGNvbXB1dGVkRnJvbSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0ICdib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5jc3MhJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnLi96b2x0dS1naXRodWItcmVwb3NlbGVjdG9yLmNzcyEnO1xuXG5AY3VzdG9tRWxlbWVudCgnem9sdHUtZ2l0aHViLXJlcG9zZWxlY3RvcicpXG5AdXNlVmlldygnLi96b2x0dS1naXRodWItcmVwb3NlbGVjdG9yLmh0bWwnKVxuQGluamVjdChIdHRwQ2xpZW50KVxuZXhwb3J0IGNsYXNzIFpvbHR1R2l0aHViUmVwb1NlbGVjdG9yIHtcblx0Y29uc3RydWN0b3IoaHR0cENsaWVudCkge1xuXHRcdHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XG5cdH1cblxuXHRiaW5kKGJpbmRpbmdDb250ZXh0KSB7XG5cdFx0dGhpcy5odHRwQ2xpZW50LmNvbmZpZ3VyZSh4ID0+IHgud2l0aEhlYWRlcignQXV0aG9yaXphdGlvbicsIGB0b2tlbiAke3RoaXMuZ2l0SHViQXV0aFRva2VufWApKTtcblx0fVxuXG5cdEBiaW5kYWJsZSBnaXRIdWJBdXRoVG9rZW47XG5cdEBiaW5kYWJsZSBzZWxlY3Rpb25DYWxsYmFjazogKHJlcG86IFJlcG9zaXRvcnkpID0+IHZvaWQ7XG5cdEBiaW5kYWJsZSBxdWVyeUZhaWx1cmVDYWxsYmFjazogKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2VNZXNzYWdlKSA9PiB2b2lkO1xuXG5cdGlucHV0VXNlciA9ICcnO1xuXHRpbnB1dFJlcG8gPSAnJztcblx0cmVwb3NpdG9yaWVzID0gW107XG5cdEBjb21wdXRlZEZyb20oJ2lucHV0VXNlcicsICdpbnB1dFJlcG8nKVxuXHRnZXQgaW5wdXRWYWxpZGF0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXRVc2VyID09ICcnICYmIHRoaXMuaW5wdXRSZXBvID09ICcnO1xuXHR9XG5cblx0Y29uc3RydWN0UXVlcnkoKSB7XG5cdFx0aWYgKHRoaXMuaW5wdXRVc2VyID09ICcnICYmIHRoaXMuaW5wdXRSZXBvID09ICcnKVxuXHRcdFx0cmV0dXJuICcnO1xuXHRcdGVsc2UgaWYgKHRoaXMuaW5wdXRVc2VyID09ICcnKVxuXHRcdFx0cmV0dXJuIGAke3RoaXMuaW5wdXRSZXBvfStpbjpuYW1lYDtcblx0XHRlbHNlIGlmICh0aGlzLmlucHV0UmVwbyA9PSAnJylcblx0XHRcdHJldHVybiBgdXNlcjoke3RoaXMuaW5wdXRVc2VyfWA7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGAke3RoaXMuaW5wdXRSZXBvfStpbjpuYW1lK3VzZXI6JHt0aGlzLmlucHV0VXNlcn1gXG5cdH1cblxuXHRzZWFyY2goKSB7XG5cdFx0dGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9JHt0aGlzLmNvbnN0cnVjdFF1ZXJ5KCl9YCkudGhlbigoaHR0cFJlc3BvbnNlTWVzc2FnZSkgPT5cblx0XHR7XG5cdFx0XHR0aGlzLnJlcG9zaXRvcmllcyA9IGh0dHBSZXNwb25zZU1lc3NhZ2UuY29udGVudC5pdGVtcztcblx0XHR9LCAoaHR0cFJlc3BvbnNlTWVzc2FnZSkgPT5cblx0XHR7XG5cdFx0XHR0aGlzLnF1ZXJ5RmFpbHVyZUNhbGxiYWNrKGh0dHBSZXNwb25zZU1lc3NhZ2UpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVwb1NlbGVjdGVkKHJlcG8pIHtcblx0XHR0aGlzLnNlbGVjdGlvbkNhbGxiYWNrKHJlcG8pO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=