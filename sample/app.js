export class App {
	repoSelected = (repo) => {
		this.chosenRepo = repo;
	}

	queryFailure = (httpResponseMessage) => {
		this.errorHttpResponseMessage = httpResponseMessage;
		console.log(httpResponseMessage)
	}
}
