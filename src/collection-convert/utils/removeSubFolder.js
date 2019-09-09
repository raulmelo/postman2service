/**
 * @function
 * @description
 * Pega items que estação separado por pastas
 */
export async function removeSubFolder(list) {
	let breakList = list
		.map((folder, index) => {
			if (folder.item) {
				folder.item = createGroup(folder.item, list[index].name);
				return folder.item;
			} else {
				return folder;
			}
		})
		.flat(Infinity);
	const List = await loopSubfolders(breakList).then((resp) => resp);
	return List;
}

/**
 * @function
 * @description
 * Loop para verificar se ainda tem item dentro de pasta
 */
const loopSubfolders = (list) => {
	return new Promise((resolve) => {
		let newList = [];
		let subFolderExist = false;
		list.map((listItem) => {
			if (listItem._postman_isSubFolder) {
				listItem.item = createGroup(listItem.item, listItem.group);
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

const createGroup = (itemsFolder, name = '') => {
	itemsFolder.map((subItems) => {
		subItems.group = name;
		if (subItems._postman_isSubFolder) {
			subItems.group = subItems.name;
		}
	});
	return itemsFolder;
};
