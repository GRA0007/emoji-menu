import emoji from './emoji/emoji.js';

const form = document.getElementById('search');
const q = document.getElementById('q');
const main = document.querySelector('main');

let list = [];

const create_list = async () => {
	let observer;
	if ("IntersectionObserver" in window) {
		observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.src = entry.target.dataset.src;
					observer.unobserve(entry.target);
				}
			});
		});
	}

	emoji.forEach(e => {
		const em = `u${e[0]}_u${e[1]}`;
		const name = `${String.fromCodePoint(parseInt(e[0], 16))}\ufe0f + ${String.fromCodePoint(parseInt(e[1], 16))}\ufe0f`;
		const div = document.createElement('div');
		div.id = em;
		div.title = name;
		const img = document.createElement('img');
		if ("IntersectionObserver" in window && observer) {
			img.dataset.src = `./emoji/${em}.png`;
			img.src = "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E .e %7B font-size: 20px; %7D %3C/style%3E%3Ctext x='40' y='55' class='e'%3E⌛%3C/text%3E%3C/svg%3E";
			img.classList.add('loading');
			observer.observe(img);
		} else {
			img.src = `./emoji/${em}.png`;
		}
		img.alt = name;
		const label = document.createElement('label');
		label.appendChild(document.createTextNode(name));
		div.appendChild(img);
		div.appendChild(label);
		if (navigator.clipboard) {
			div.addEventListener('click', () => {
				fetch(`./emoji/${em}.png`)
					.then(res => res.blob())
					.then(blob => {
						navigator.clipboard.write([
							new ClipboardItem({
								'image/png': blob
							})
						]);
						div.classList.add('copied');
						window.setTimeout(() => div.classList.remove('copied'), 1000);
					})
					.catch(error => console.error(error))
			});
		}
		list.push({
			em: e,
			el: div,
		});
		main.appendChild(div);
	});

	// Set random favicon
	const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
	favicon.type = 'image/png';
	favicon.rel = 'icon';
	let icon = list[Math.floor(Math.random() * list.length)].em;
	favicon.href = `./emoji/u${icon[0]}_u${icon[1]}.png`;
	document.getElementsByTagName('head')[0].appendChild(favicon);
};

const update_list = async (query) => {
	const queries = Array.from(query.trim());
	let results = [];

	// Update url
	if (history.pushState) {
		const param = query && queries.length > 0 ? '?q='+encodeURIComponent(query) : '';
		const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + param;
		window.history.pushState({path:newurl},'',newurl);
	}

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

// Restore query from url
const urlParams = new URLSearchParams(window.location.search);
const urlQ = urlParams.get('q');
if (urlQ) {
	q.value = urlQ;
	update_list(urlQ);
}
