export async function slugify(list) {
  list.map(item => {
    item.name = convert(item.name);
    item.group = item.group ? convert(item.group) : null;
  });
  const newList = await listVerifyNameDuplicate(list);
  return newList;
}

const convert = str => {
  str = str.replace(/^\s+|\s+$/g, "");

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  var from =
    "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to =
    "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  // Remove invalid chars
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    // Collapse whitespace and replace by -
    .replace(/\s+/g, "-")
    // Collapse dashes
    .replace(/-+/g, "-");

  let _camelCase = str.split("-");
  let _resul = "";
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

const listVerifyNameDuplicate = list => {
  const titles = [];
  list.map(item => {
    if (titles.indexOf(item.name) > -1) {
      item.name = slugifyParent(item);
    }
    titles.push(item.name);
  });
  return list;
};
const slugifyParent = item => {
  const newName = item.group + "_" + item.name;
  return newName;
};
