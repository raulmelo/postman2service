export const getdataParams = (list) => {
	let newList = [];
	let item = {};
	list.map((requestItem) => {
		if (requestItem.request) {
			item = {};
			item = {
				group: requestItem.group,
				event: requestItem.event ? requestItem.event : [],
				name: requestItem.name,
				methods: getMethods(requestItem),
				exampleParams: requestItem.request.body ? requestItem.request.body.raw : null,
				url: requestItem.request.url,
				slug: requestItem.name
			};
			newList.push(item);
		}
	});
	return newList.sort((a, b) => (a.event < b.event ? 1 : -1));
	// .sort((a, b) => a.group > b.group);
};

// requestItem.request.method.toLowerCase();

const getMethods = (requestItem) => {
	const { request } = requestItem;
	if (request && request.method) {
		const name = request.method.toLowerCase();

		return name;
	}
	return 'Metodo indefinido';
	// TODO: insert metodo indefinido
};
