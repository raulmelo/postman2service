export const verifyToken = list => {
  list.map(request => {
    request.nextProgress = null;
    if (request.event && request.event[0]) {
      request.nextProgress = findTokenExist(request.event[0]);
    }
  });
  return list;
};

/**
 * @function
 * @description
 * Verifica se existe ação do postman salvar uma variavel
 * global, se for token mandar ele pro login
 */
const findTokenExist = event => {
  let type = null;
  if (event.script.type === "text/javascript") {
    const paramsExecute = event.script.exec;
    const key = new RegExp("postman.setGlobalVariable");
    const IsLogin = new RegExp("token");
    const refreshToken = new RegExp("refresh");
    paramsExecute.map(item => {
      if (key.test(item)) {
        if (IsLogin.test(item)) {
          type = "APIService.LoginSuccess(resp)";
        }
        if (refreshToken.test(item)) {
          type = "refreshToken";
        }
      }
    });
  }
  return type;
};
