System.register(['aurelia-framework'], function (_export) {
  var customElement, useView, _classCallCheck, ZoltuGithubRepoSelector;

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      ZoltuGithubRepoSelector = (function () {
        function ZoltuGithubRepoSelector() {
          _classCallCheck(this, _ZoltuGithubRepoSelector);
        }

        var _ZoltuGithubRepoSelector = ZoltuGithubRepoSelector;
        ZoltuGithubRepoSelector = useView('./zoltu-github-reposelector.html')(ZoltuGithubRepoSelector) || ZoltuGithubRepoSelector;
        ZoltuGithubRepoSelector = customElement('zoltu-github-reposelector')(ZoltuGithubRepoSelector) || ZoltuGithubRepoSelector;
        return ZoltuGithubRepoSelector;
      })();

      _export('ZoltuGithubRepoSelector', ZoltuGithubRepoSelector);
    }
  };
});