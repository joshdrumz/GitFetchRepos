const inputValue = document.querySelector('#search');
const searchButton = document.querySelector('.searchButton');
const nameContainer = document.querySelector('.main__profile-name');
const unContainer = document.querySelector('.main__profile-username');
const reposContainer = document.querySelector('.main__profile-repos');
const urlContainer = document.querySelector('.main__profile-url');

const client_id = 'Iv1.873497ffb1d8b47d';
const client_secret = 'ffa308d82c28f5111fc830f641e78f38331338ba';

const fetchUsers = async (user) => {
	const api_call = await fetch(
		`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
	);

	const data = await api_call.json();
	return { data };
};

function showData() {
	fetchUsers(inputValue.value).then((res) => {
		// use clg to access data array
		// console.log(res);

		// calling 'innerHTML' dynamically inserts data into the program through JavaScript

		nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;

		unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;

		reposContainer.innerHTML = `Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;

		urlContainer.innerHTML = `Link: <span class="main__profile-value">${res.data.html_url}</span>`;
	});
}

searchButton.addEventListener('click', () => {
	// console.log('work');
	showData();
});
