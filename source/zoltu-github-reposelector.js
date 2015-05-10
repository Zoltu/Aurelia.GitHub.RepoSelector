import { customElement, useView, bindable, computedFrom, inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import 'bootstrap/css/bootstrap.css!';
import 'bootstrap';
import './zoltu-github-reposelector.css!';

@customElement('zoltu-github-reposelector')
@useView('./zoltu-github-reposelector.html')
@inject(HttpClient)
export class ZoltuGithubRepoSelector {
	constructor(httpClient) {
		this.httpClient = httpClient;
	}

	bind(bindingContext) {
		this.httpClient.configure(x => x.withHeader('Authorization', `token ${this.gitHubAuthToken}`));
	}

	@bindable gitHubAuthToken;
	@bindable selectionCallback: (repo: Repository) => void;
	@bindable queryFailureCallback: (response: HttpResponseMessage) => void;

	inputUser = '';
	inputRepo = '';
	repositories = [];
	@computedFrom('inputUser', 'inputRepo')
	get inputValidated() {
		return this.inputUser == '' && this.inputRepo == '';
	}

	constructQuery() {
		if (this.inputUser == '' && this.inputRepo == '')
			return '';
		else if (this.inputUser == '')
			return `${this.inputRepo}+in:name`;
		else if (this.inputRepo == '')
			return `user:${this.inputUser}`;
		else
			return `${this.inputRepo}+in:name+user:${this.inputUser}`
	}

	search() {
		this.httpClient.get(`https://api.github.com/search/repositories?q=${this.constructQuery()}`).then((httpResponseMessage) =>
		{
			this.repositories = httpResponseMessage.content.items;
		}, (httpResponseMessage) =>
		{
			this.queryFailureCallback(httpResponseMessage);
		});
	}

	repoSelected(repo) {
		this.selectionCallback(repo);
	}
}
