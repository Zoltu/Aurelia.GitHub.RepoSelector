System.register(['aurelia-framework', 'aurelia-http-client', 'bootstrap/css/bootstrap.css!', 'bootstrap', './zoltu-github-reposelector.css!'], function (_export) {
	var customElement, useView, bindable, computedFrom, inject, HttpClient, _classCallCheck, _createDecoratedClass, ZoltuGithubRepoSelector;

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

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

			ZoltuGithubRepoSelector = (function () {
				var _instanceInitializers = {};

				function ZoltuGithubRepoSelector(httpClient) {
					_classCallCheck(this, _ZoltuGithubRepoSelector);

					this.gitHubAuthToken = _instanceInitializers.gitHubAuthToken.call(this);
					this.selectionCallback = _instanceInitializers.selectionCallback.call(this);
					this.queryFailureCallback = _instanceInitializers.queryFailureCallback.call(this);
					this.inputUser = '';
					this.inputRepo = '';
					this.repositories = [];

					this.httpClient = httpClient;
				}

				var _ZoltuGithubRepoSelector = ZoltuGithubRepoSelector;

				_createDecoratedClass(_ZoltuGithubRepoSelector, [{
					key: 'gitHubAuthToken',
					decorators: [bindable],
					initializer: function () {},
					enumerable: true
				}, {
					key: 'selectionCallback',
					decorators: [bindable],
					initializer: function () {},
					enumerable: true
				}, {
					key: 'queryFailureCallback',
					decorators: [bindable],
					initializer: function () {},
					enumerable: true
				}, {
					key: 'bind',
					value: function bind(bindingContext) {
						var _this = this;

						this.httpClient.configure(function (x) {
							return x.withHeader('Authorization', 'token ' + _this.gitHubAuthToken);
						});
					}
				}, {
					key: 'inputUser',
					value: undefined,
					enumerable: true
				}, {
					key: 'inputRepo',
					value: undefined,
					enumerable: true
				}, {
					key: 'repositories',
					value: undefined,
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
						if (this.inputUser == '' && this.inputRepo == '') {
							return '';
						} else if (this.inputUser == '') {
							return '' + this.inputRepo + '+in:name';
						} else if (this.inputRepo == '') {
							return 'user:' + this.inputUser;
						} else {
							return '' + this.inputRepo + '+in:name+user:' + this.inputUser;
						}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvbHR1LWdpdGh1Yi1yZXBvc2VsZWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtpSEFTYSx1QkFBdUI7Ozs7cUNBVDNCLGFBQWE7K0JBQUUsT0FBTztnQ0FBRSxRQUFRO29DQUFFLFlBQVk7OEJBQUUsTUFBTTs7bUNBQ3RELFVBQVU7Ozs7Ozs7OztBQVFOLDBCQUF1Qjs7O0FBS3hCLGFBTEMsdUJBQXVCLENBS3ZCLFVBQVUsRUFBRTs7O1VBSmQsZUFBZSx5QkFBZixlQUFlO1VBQ2YsaUJBQWlCLHlCQUFqQixpQkFBaUI7VUFDakIsb0JBQW9CLHlCQUFwQixvQkFBb0I7VUFVOUIsU0FBUyxHQUFHLEVBQUU7VUFDZCxTQUFTLEdBQUcsRUFBRTtVQUNkLFlBQVksR0FBRyxFQUFFOztBQVRoQixTQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM3Qjs7bUNBUFcsdUJBQXVCOzs7O2tCQUNsQyxRQUFROzs7OztrQkFDUixRQUFROzs7OztrQkFDUixRQUFROzs7OztZQU1MLGNBQUMsY0FBYyxFQUFFOzs7QUFDcEIsVUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2NBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLGFBQVcsTUFBSyxlQUFlLENBQUc7T0FBQSxDQUFDLENBQUE7TUFDOUY7Ozs7Ozs7Ozs7Ozs7OztrQkFLQSxZQUFZLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztVQUNyQixZQUFHO0FBQ3BCLGFBQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7TUFDcEQ7OztZQUVhLDBCQUFHO0FBQ2hCLFVBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFO0FBQy9DLGNBQU8sRUFBRSxDQUFDO2FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUU7QUFDNUIsbUJBQVUsSUFBSSxDQUFDLFNBQVMsY0FBVzthQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRTtBQUM1Qix3QkFBZSxJQUFJLENBQUMsU0FBUyxDQUFHOztBQUVoQyxtQkFBVSxJQUFJLENBQUMsU0FBUyxzQkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBRTtPQUFBO01BQzFEOzs7WUFFSyxrQkFBRzs7O0FBQ1IsVUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLG1EQUFpRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxtQkFBbUIsRUFDdEg7QUFDQyxjQUFLLFlBQVksR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO09BQ3RELEVBQUUsVUFBQyxtQkFBbUIsRUFDdkI7QUFDQyxjQUFLLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7T0FDL0MsQ0FBQyxDQUFDO01BQ0g7OztZQUVXLHNCQUFDLElBQUksRUFBRTtBQUNsQixVQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDN0I7OztBQTVDVywyQkFBdUIsR0FEbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLHVCQUF1QixLQUF2Qix1QkFBdUI7QUFBdkIsMkJBQXVCLEdBRm5DLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUUvQix1QkFBdUIsS0FBdkIsdUJBQXVCO0FBQXZCLDJCQUF1QixHQUhuQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FHOUIsdUJBQXVCLEtBQXZCLHVCQUF1QjtXQUF2Qix1QkFBdUI7OztzQ0FBdkIsdUJBQXVCIiwiZmlsZSI6InpvbHR1LWdpdGh1Yi1yZXBvc2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCB1c2VWaWV3LCBiaW5kYWJsZSwgY29tcHV0ZWRGcm9tLCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLmNzcyEnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICcuL3pvbHR1LWdpdGh1Yi1yZXBvc2VsZWN0b3IuY3NzISc7XG5cbkBjdXN0b21FbGVtZW50KCd6b2x0dS1naXRodWItcmVwb3NlbGVjdG9yJylcbkB1c2VWaWV3KCcuL3pvbHR1LWdpdGh1Yi1yZXBvc2VsZWN0b3IuaHRtbCcpXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgWm9sdHVHaXRodWJSZXBvU2VsZWN0b3Ige1xuXHRAYmluZGFibGUgZ2l0SHViQXV0aFRva2VuO1xuXHRAYmluZGFibGUgc2VsZWN0aW9uQ2FsbGJhY2s7XG5cdEBiaW5kYWJsZSBxdWVyeUZhaWx1cmVDYWxsYmFjaztcblxuXHRjb25zdHJ1Y3RvcihodHRwQ2xpZW50KSB7XG5cdFx0dGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcblx0fVxuXG5cdGJpbmQoYmluZGluZ0NvbnRleHQpIHtcblx0XHR0aGlzLmh0dHBDbGllbnQuY29uZmlndXJlKHggPT4geC53aXRoSGVhZGVyKCdBdXRob3JpemF0aW9uJywgYHRva2VuICR7dGhpcy5naXRIdWJBdXRoVG9rZW59YCkpXG5cdH1cblxuXHRpbnB1dFVzZXIgPSAnJztcblx0aW5wdXRSZXBvID0gJyc7XG5cdHJlcG9zaXRvcmllcyA9IFtdO1xuXHRAY29tcHV0ZWRGcm9tKCdpbnB1dFVzZXInLCAnaW5wdXRSZXBvJylcblx0Z2V0IGlucHV0VmFsaWRhdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmlucHV0VXNlciA9PSAnJyAmJiB0aGlzLmlucHV0UmVwbyA9PSAnJztcblx0fVxuXG5cdGNvbnN0cnVjdFF1ZXJ5KCkge1xuXHRcdGlmICh0aGlzLmlucHV0VXNlciA9PSAnJyAmJiB0aGlzLmlucHV0UmVwbyA9PSAnJylcblx0XHRcdHJldHVybiAnJztcblx0XHRlbHNlIGlmICh0aGlzLmlucHV0VXNlciA9PSAnJylcblx0XHRcdHJldHVybiBgJHt0aGlzLmlucHV0UmVwb30raW46bmFtZWA7XG5cdFx0ZWxzZSBpZiAodGhpcy5pbnB1dFJlcG8gPT0gJycpXG5cdFx0XHRyZXR1cm4gYHVzZXI6JHt0aGlzLmlucHV0VXNlcn1gO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBgJHt0aGlzLmlucHV0UmVwb30raW46bmFtZSt1c2VyOiR7dGhpcy5pbnB1dFVzZXJ9YFxuXHR9XG5cblx0c2VhcmNoKCkge1xuXHRcdHRoaXMuaHR0cENsaWVudC5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPSR7dGhpcy5jb25zdHJ1Y3RRdWVyeSgpfWApLnRoZW4oKGh0dHBSZXNwb25zZU1lc3NhZ2UpID0+XG5cdFx0e1xuXHRcdFx0dGhpcy5yZXBvc2l0b3JpZXMgPSBodHRwUmVzcG9uc2VNZXNzYWdlLmNvbnRlbnQuaXRlbXM7XG5cdFx0fSwgKGh0dHBSZXNwb25zZU1lc3NhZ2UpID0+XG5cdFx0e1xuXHRcdFx0dGhpcy5xdWVyeUZhaWx1cmVDYWxsYmFjayhodHRwUmVzcG9uc2VNZXNzYWdlKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlcG9TZWxlY3RlZChyZXBvKSB7XG5cdFx0dGhpcy5zZWxlY3Rpb25DYWxsYmFjayhyZXBvKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9