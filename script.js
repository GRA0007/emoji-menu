import emoji from './emoji/emoji.js';

const form = document.getElementById('search');
const q = document.getElementById('q');
const main = document.querySelector('main');

let list = [];

const create_list = async () => {
	emoji.forEach(e => {
		const em = `u${e[0]}_u${e[1]}`;
		const name = `${String.fromCodePoint(parseInt(e[0], 16))} + ${String.fromCodePoint(parseInt(e[1], 16))}`;
		const div = document.createElement('div');
		div.id = em;
		div.title = name;
		const img = document.createElement('img');
		img.src = `./emoji/${em}.png`;
		img.alt = name;
		const label = document.createElement('label');
		label.appendChild(document.createTextNode(name));
		div.appendChild(img);
		div.appendChild(label);
		list.push({
			em: e,
			el: div,
		});
		main.appendChild(div);
	});

	// Set random favicon
	const favicon = document.createElement('link');
	favicon.type = 'image/png';
	favicon.rel = 'icon';
	let icon = list[Math.floor(Math.random() * list.length)].em;
	favicon.href = `./emoji/u${icon[0]}_u${icon[1]}.png`;
	document.getElementsByTagName('head')[0].appendChild(favicon);
};

const update_list = async (query) => {
	const queries = Array.from(query.trim());
	let results = [];

	if (query && queries.length > 0) {
		for (let i = 0; i < list.length; i++) {
			if (queries.length > 1) {
				results[i] = queries.includes(String.fromCodePoint(parseInt(list[i].em[0], 16))) && queries.includes(String.fromCodePoint(parseInt(list[i].em[1], 16)));
			} else {
				results[i] = queries.includes(String.fromCodePoint(parseInt(list[i].em[0], 16))) || queries.includes(String.fromCodePoint(parseInt(list[i].em[1], 16)));
			}
		}

		for (let i = 0; i < list.length; i++) {
			if (results[i]) {
				list[i].el.classList.remove('hidden');
			} else {
				list[i].el.classList.add('hidden');
			}
		}
	} else {
		for (let i = 0; i < list.length; i++) {
			list[i].el.classList.remove('hidden');
		}
	}
};

form.addEventListener('submit', event => {
	event.preventDefault();

	update_list(q.value);
});

q.addEventListener('input', event => {
	update_list(q.value);
});

create_list();
