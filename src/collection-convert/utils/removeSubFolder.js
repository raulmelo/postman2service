/**
 * @function
 * @description
 * Pega items que estação separado por pastas
 */
export async function removeSubFolder(list) {
  let breakList = list
    .map((folder, index) => {
      if (folder.item) {
        folder.item.map(subItems => (subItems.group = list[index].name));
        return folder.item;
      } else {
        return folder;
      }
    })
    .flat(Infinity);
  const List = await loopSubfolders(breakList).then(resp => resp);
  return List;
}

/**
 * @function
 * @description
 * Loop para verificar se ainda tem item dentro de pasta
 */
const loopSubfolders = list => {
  return new Promise(resolve => {
    let newList = [];
    let subFolderExist = false;
    list.map(listItem => {
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
