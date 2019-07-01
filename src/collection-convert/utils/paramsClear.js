export const paramsClear = list => {
  list.map(request => {
    request.exampleParams = request.exampleParams
      ? convertTypeOf(request.exampleParams)
      : null;
  });
  return list;
};

const convertTypeOf = params => {
  let _params = null;
  const paramsVerify = new RegExp(":");
  if (paramsVerify.test(params)) {
    _params = JSON.parse(params);
    Object.keys(_params).map((index, item) => {
      _params[index] = typeof _params[index];
    });
  }
  return _params;
};
