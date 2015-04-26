import { customElement, useView, bindable } from 'aurelia-framework';
import 'bootstrap/css/bootstrap.css!';
import 'bootstrap';
import './zoltu-github-reposelector.css!';

@customElement('zoltu-github-reposelector')
@useView('./zoltu-github-reposelector.html')
export class ZoltuGithubRepoSelector {
	@bindable gitHubAuthToken;
}
