export const VARIABLE_API_DECLARE = (variables) => {
	return `
/**
* deixe sua variavel ${variables[0].key} dentro do .ENV
*/
const ${variables[0].key} = '${variables[0].value}'
`;
};

export const CLEAR_REQUEST = (list) => {
	let NewList = [];
	let item = {};
	/*
   * remove sub folder
   */
	let breakList = list.map((folder) => {
		if (folder.item) {
			return folder.item;
		} else {
			return folder;
		}
	});
	/* remove items UNDEFINED and array of object */
	const ClearList = breakList.filter((item) => !!item).flat(Infinity);
	flatSubFolders(ClearList).then((breakList) => {
		breakList.map((requestItem) => {
			item = {};
			item = {
				name: requestItem.name,
				methods: getMethod(requestItem),
				exampleParams: requestItem.request.body ? ParamsDataClear(requestItem.request.body.raw) : null,
				url: VariableToString(requestItem.request.url.raw, requestItem.request.url.host[0]),
				slug: slugify(requestItem.name)
			};
			NewList.push(item);
		});
	});

	/* Mounted new list formated */

	return NewList;
};

export const RESQUEST_API = (list) => {
	let endpoit = '';
	list.map((item) => {
		endpoit = `${endpoit}
    /* ${item.slug}
    ${item.exampleParams ? '* @param data ' + JSON.stringify(item.exampleParams) : ''}*/
    ${item.name}: (${item.exampleParams ? 'data' : ''}) => new Promise((resolve, reject) => {
        axios.${item.methods}(${item.url}${item.exampleParams ? ',data' : ''})
        .then(
            (resp) => {
              ${item.nextProgress ? item.nextProgress : ''}
              resolve(resp)
            },
            (error) => {
                APIService.ErrorAuth(error.response.status)
                reject(error.response)
            }
        )
    }),
    `;
	});
	return endpoit;
};

const VariableToString = (url, host) => {
	const paramsVerify = new RegExp('{{');
	if (paramsVerify.test(url)) {
		let path = url.split('}}')[1];
		let _host = host.replace('}}', '').replace('{{', '');
		return `${_host} + '${path}'`;
	}
	return `'${url}'`;
};

const getMethod = (request) => {
	debugger;
	return request.request.method.toLowerCase();
};

const ParamsDataClear = (params) => {
	let _params = null;
	const paramsVerify = new RegExp(':');
	if (paramsVerify.test(params)) {
		_params = JSON.parse(params);
		Object.keys(_params).map((index, item) => {
			_params[index] = typeof _params[index];
		});
	}
	return _params;
};

const slugify = (str) => {
	str = str.replace(/^\s+|\s+$/g, '');

	// Make the string lowercase
	str = str.toLowerCase();

	// Remove accents, swap ñ for n, etc
	var from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
	var to = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	// Remove invalid chars
	str = str
		.replace(/[^a-z0-9 -]/g, '')
		// Collapse whitespace and replace by -
		.replace(/\s+/g, '-')
		// Collapse dashes
		.replace(/-+/g, '-');

	let _camelCase = str.split('-');
	let _resul = '';
	if (_camelCase.length > 1) {
		_camelCase.map((item, index) => {
			if (index !== 0) {
				item = item.charAt(0).toLocaleUpperCase() + item.slice(1).toLowerCase();
			}
			_resul = _resul + item;
		});
	} else {
		_resul = str;
	}

	return _resul;
};

async function flatSubFolders(list) {
	const List = await loopSubfolders(list).then((resp) => resp);
	return List;
}

const loopSubfolders = (list) => {
	return new Promise((resolve, reject) => {
		let newList = [];
		let subFolderExist = false;
		list.map((listItem) => {
			if (listItem._postman_isSubFolder) {
				newList.push(...listItem.item);
				subFolderExist = true;
			} else {
				newList.push(listItem);
			}
		});
		if (subFolderExist) {
			loopSubfolders(newList);
		}
		resolve(newList);
	});
};
