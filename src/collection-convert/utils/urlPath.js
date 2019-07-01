export const urlPath = list => {
  list.map(request => {
    request.url = convert(request.url);
  });
  return list;
};

const convert = url => {
  const host = url.host[0];
  let requestUrl = `${url.raw}`;
  if (host) {
    const variable = host.replace("}}", "").replace("{{", "");
    const path = url.raw.replace(host, "");
    requestUrl = `${variable} + '${path}'`;
  }
  return requestUrl;
};
