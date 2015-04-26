export function configure(aurelia) {
	aurelia.use.standardConfiguration();
	aurelia.globalizeResources('output/zoltu-github-reposelector')
	aurelia.start().then(a => a.setRoot('output-sample/app', document.body));
}
