export const getdataParams = list => {
  let newList = [];
  let item = {};
  list.map(requestItem => {
    item = {};
    item = {
      group: requestItem.group,
      event: requestItem.event ? requestItem.event : [],
      name: requestItem.name,
      methods: requestItem.request.method.toLowerCase(),
      exampleParams: requestItem.request.body
        ? requestItem.request.body.raw
        : null,
      url: requestItem.request.url,
      slug: requestItem.name
    };
    newList.push(item);
  });
  return newList.sort((a, b) => (a.event < b.event ? 1 : -1));
  // .sort((a, b) => a.group > b.group);
};
