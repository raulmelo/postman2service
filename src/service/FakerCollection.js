const testeCollection = {
  "info": {
    "_postman_id": "1ea29606-6670-4150-b560-801da42849b0",
    "name": "SejaVip HML",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Grupo",
      "item": [
        {
          "name": "Criar",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"G 2\",\n\t\"active\": true\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/group",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "group"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Editar",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"G2\",\n\t\"active\": true\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/group/2",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "group",
                "2"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Excluir",
          "request": {
            "method": "DELETE",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"G2\",\n\t\"active\": true\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/group/9",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "group",
                "9"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/group",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "group"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar Usuarios de grupo",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/group/getUsersGroup/10",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "group",
                "getUsersGroup",
                "10"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar Grupos por evento",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/group/getGroupEvent/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "group",
                "getGroupEvent",
                "1"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/group/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "group",
                "1"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Banner",
      "item": [
        {
          "name": "Criar",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"active\": true,\n\t\"image\": \"data:image/png;base64,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\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/banner",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "banner"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Editar",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"active\": true,\n\t\"image\": \"data:image/png;base64,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\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/banner/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "banner",
                "1"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Excluir",
          "request": {
            "method": "DELETE",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"G2\",\n\t\"active\": true\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/banner/2",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "banner",
                "2"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/banner",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "banner"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/banner/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "banner",
                "1"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "User",
      "item": [
        {
          "name": "Criar",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "",
                "disabled": true
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "\n\n{\n\t\"name\":\"WALAKS MESSIAS ALVES DA SILVA\",\n\t\"email\":\"walaks.alves@gmail.com\",\n\t\"password\":\"123456\",\n\t\"group_id\":10,\n\t\"data\":{\n\t\t\"active\":1,\n\t\t\"birth_date\":\"1990-10-13\",\n\t\t\"cpf\":\"038.126.351-41\",\n\t\t\"phone\":\"(61) 99172-0651\",\n\t\t\"cep\":\"72545-509\",\n\t\t\"neighborhood\":\"santa\",\n\t\t\"address\":\"Brasília\"\n\t\t\n\t},\n\t\"perfil_id\":2,\n\t\"direct_link\": 0\n\t\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/user",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Salvar deviceid",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"platform\":\"android\",\n\t\"deviceid\":\"dOqbrWB6_kw:APA91bGrnZEgLgh37-Miu42_61_dHocvY__DUEnY-OQiMfAYPlWWPyQSu06byg5VAvphCKTkycn17El27dI5QDE8cBtj9cihFbDs-nc72J4wGlnhQv5XQsxCFiuHuu6dsSsa3WDLsb1O\"\n}\n"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/user/saveDeviceid",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user",
                "saveDeviceid"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Editar",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\"id\":5973,\n\"name\":\"Admin\",\n\"email\":\"walaks.alves@gmail.com\",\n\"perfil_id\":1,\n\"data_id\":6288,\n\"group_id\":10,\n\"deleted_at\":null,\n\"created_at\":\"2018-07-15 04:47:17\",\n\"updated_at\":\"2018-08-07 02:35:01\",\n\"data\":{\n\"id\":6288,\n\"active\":1,\n\"birth_date\":\"1992-01-30 00:00:00\",\n\"cpf\":\"03712635141\",\n\"phone\":\"(61) 91909-7813\",\n\"cep\":\"72025-015\",\n\"neighborhood\":\"Taguatinga Sul (Taguatinga)\",\n\"address\":\"CSE 1\",\n\"created_at\":\"2018-07-15 04:29:24\",\n\"updated_at\":\"2018-07-15 04:29:24\",\n\"moip_id\":null,\n\"date_exipiry_signature\":\"2018-08-15 00:00:00\"\n}\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/user/5973",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user",
                "5973"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Excluir",
          "request": {
            "method": "DELETE",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"G2\",\n\t\"active\": true\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/user/5",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user",
                "5"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/user/",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user",
                ""
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar email pelo CPF",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "",
                "disabled": true
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/getEmail/03392145114",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "getEmail",
                "03392145114"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Ativar e desativar usuario",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/user/changeUser/5971/0",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user",
                "changeUser",
                "5971",
                "0"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar Senha",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "",
                "disabled": true
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/resetpassword/03712635141",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "resetpassword",
                "03712635141"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Adicionar grupo a usuario",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/user/1/2",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user",
                "1",
                "2"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Adicionar grupo a usuario pelo cpf",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/user/addGroup/10/324523452345",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user",
                "addGroup",
                "10",
                "324523452345"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/user",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "user"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Eventos",
      "item": [
        {
          "name": "Listar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/event",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar copy",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/event/megroup",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event",
                "megroup"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Eventos passados",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/events/lastevents",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "events",
                "lastevents"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Meus eventos",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/event/megroup",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event",
                "megroup"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar eventos de grupo",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/event/getEventsGroup/10",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event",
                "getEventsGroup",
                "10"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Excluir",
          "request": {
            "method": "DELETE",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/event/3",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event",
                "3"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Criar",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"Evento com chave\",\n    \"active\": true,\n    \"d_date\": \"2018-07-10\",\n    \"h_date\": \"22:00:00\",\n    \"producer\": \"Seja Vip\",\n    \"local\": \"Parque da Cidade\",\n    \"free\": true,\n    \"price\": \"0.00\",\n    \"companion\": true,\n    \"num_companion\": 2,\n    \"general\": 1,\n    \"created_at\": \"2018-07-03 17:05:59\",\n    \"updated_at\": \"2018-07-03 17:05:59\",\n    \"groups\": [10],\n    \"img_main\": \"data:image/png;base64,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\",\n    \"img_secondary\": \"\"\n\t\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/event",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Atualizar grupos de eventos",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n    \"groups\": [56]\n\t\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/event/updateGroups/3",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event",
                "updateGroups",
                "3"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Editar",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"Funn Festival edit\",\n    \"active\": true,\n    \"d_date\": \"2018-07-10\",\n    \"h_date\": \"22:00:00\",\n    \"producer\": \"Seja Vip\",\n    \"local\": \"Parque da Cidade\",\n    \"img_main\": \"home.png\",\n    \"img_secondary\": \"home2.png\",\n    \"created_at\": \"2018-07-03 17:05:59\",\n    \"updated_at\": \"2018-07-03 17:05:59\",\n    \"groups\": [1]\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/event/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event",
                "1"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/event/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "event",
                "1"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Perfil",
      "item": [
        {
          "name": "Listar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/perfil",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "perfil"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/perfil/4",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "perfil",
                "4"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Excluir",
          "request": {
            "method": "DELETE",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/perfil/3",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "perfil",
                "3"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Criar",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"Teste\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/perfil",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "perfil"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Editar",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"teste update\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/perfil/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "perfil",
                "1"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Incrição",
      "item": [
        {
          "name": "Listar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar usuarios incritos",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/getUsers/191",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "getUsers",
                "191"
              ]
            }
          },
          "response": []
        },
        {
          "name": "relatorio listar usuarios incritos",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/relatory/6",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "relatory",
                "6"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Salvar presença",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"code\" : \"vip5b9986665be0c3.68859223\",\n    \"key_event\" : \"9985g9\",\n    \"cpf\" : \"03712635141\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/user/checkDataPresence",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "user",
                "checkDataPresence"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Remover presença",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"code\" : \"vip5b6a6924ab5890.02945942\",\n    \"key_event\" : \"123456\",\n    \"cpf\" : \"03712635141\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/user/removeDataPresence",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "user",
                "removeDataPresence"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar inscrição por code",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/user/getSubscriptionForCode/vip5b6a6924ab5890.02945942",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "user",
                "getSubscriptionForCode",
                "vip5b6a6924ab5890.02945942"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/5",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "5"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar Inscrições de usuario",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/users",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "users"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Verificar se já exite inscrição",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/check/88519/12",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "check",
                "88519",
                "12"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Alterar ativação de incrição",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/change/5971/3/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "change",
                "5971",
                "3",
                "1"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Alterar status de todas as incrições",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/changeall/1/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "changeall",
                "1",
                "1"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar incrições por evento",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/1/users",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "1",
                "users"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar incrições por evento Mobile",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/mobile/event/getUsers/136",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "mobile",
                "event",
                "getUsers",
                "136"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Excluir",
          "request": {
            "method": "DELETE",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/x-www-form-urlencoded"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/perfil/3",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "perfil",
                "3"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Criar",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"event_id\": 14,\n    \"user_id\": 5971\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/subscription",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Upload de arquivo.",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"image\": \"data:image/png;base64,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\",\n    \"event_id\": 1\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/upload",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "upload"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Editar",
          "request": {
            "method": "PUT",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\": \"teste update\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/perfil/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "perfil",
                "1"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Pagamento",
      "item": [
        {
          "name": "-",
          "event": [
            {
              "listen": "test",
              "script": {
                "type": "text/javascript",
                "exec": [
                  "var data = JSON.parse(responseBody);",
                  "",
                  "postman.setGlobalVariable(\"customer\", data);"
                ]
              }
            }
          ],
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URLBase}}/api/web/payment",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Recuperar Usuario pelo moip_id",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/payment/CUS-2B2OJX7N8LHK",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "CUS-2B2OJX7N8LHK"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Salvar Moip ID",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URLBase}}/api/web/payment/savemoipid/2/ORD-QMJ7B925L16H",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "savemoipid",
                "2",
                "ORD-QMJ7B925L16H"
              ]
            }
          },
          "response": []
        },
        {
          "name": "---",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n    \"customer\": {\n    \t\"fullname\": \"Fulano de Tal\",\n    \t\"email\": \"fulano@email.com\",\n    \t\"birthDate\": \"1988-12-30\",\n    \t\"taxDocument\": {\n\t        \"type\": \"CPF\",\n\t        \"number\": \"22222222222\"\n\t    },\n\t\t    \"phone\": {\n\t        \"countryCode\": \"55\",\n\t        \"areaCode\": \"11\",\n\t        \"number\": \"66778899\"\n\t    },\n\t    \"addresses\": {\n\t    \t\"zipCode\": \"01234567\",\n\t        \"street\": \"Rua de teste do SHIPPING\",\n\t        \"streetNumber\": \"123\",\n\t        \"complement\": \"8\",\n\t        \"city\": \"Sao Paulo\",\n\t        \"district\": \"Bairro do SHIPPING\",\n\t        \"state\": \"SP\",\n\t        \"country\": \"BRA\"\n\t    }\n    },\n   \"order\": {\n   \t\t\"event\": \"Festa 01\",\n   \t\t\"amount\": 1,\n   \t\t\"value\": 30\n   },\n   \"hol\": false,\n   \"holder\": {\n   \t\t\"fullname\": \"Fulano de Tal\",\n    \t\"email\": \"fulano@email.com\",\n    \t\"birthDate\": \"1988-12-30\",\n    \t\"taxDocument\": {\n\t        \"type\": \"CPF\",\n\t        \"number\": \"22222222222\"\n\t    },\n\t\t    \"phone\": {\n\t        \"countryCode\": \"55\",\n\t        \"areaCode\": \"11\",\n\t        \"number\": \"66778899\"\n\t    },\n\t    \"addresses\": {\n\t    \t\"zipCode\": \"01234567\",\n\t        \"street\": \"Rua de teste do SHIPPING\",\n\t        \"streetNumber\": \"123\",\n\t        \"complement\": \"8\",\n\t        \"city\": \"Sao Paulo\",\n\t        \"district\": \"Bairro do SHIPPING\",\n\t        \"state\": \"SP\",\n\t        \"country\": \"BRA\"\n\t    }\n   },\n   \"payment\": {\n   \t\t\"cardExpirationMonth\": 5,\n            \"cardExpirationYear\": 2018,\n            \"cardNumber\": \"4012001037141112\",\n            \"cardCVC\": \"123\",\n            \"cardFullName\": \"Jose Portador da Silva\",\n            \"cardBirthDate\": \"1988-12-30\",\n            \"cardCPF\": \"33333333333\",\n            \"phone\": {\n\t\t        \"countryCode\": \"55\",\n\t\t        \"areaCode\": \"11\",\n\t\t        \"number\": \"66778899\"\n\t\t    }\n   }\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/order",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "order"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Acesso Porteiro",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n    \"key_event\" : \"761081\",\n    \"cpf_concierge\" : \"123456\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/accessConcierge",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "accessConcierge"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PROD - Pagamento de evento com cartão de crédito",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n   \"event_id\": 3,\n   \"hol\": false,\n   \"holder\": {\n   \t\t\"fullname\": \"Fulano de Tal\",\n    \t\"email\": \"fulano@email.com\",\n    \t\"birthDate\": \"1988-12-30\",\n    \t\"taxDocument\": {\n\t        \"type\": \"CPF\",\n\t        \"number\": \"22222222222\"\n\t    },\n\t\t    \"phone\": {\n\t        \"countryCode\": \"55\",\n\t        \"areaCode\": \"11\",\n\t        \"number\": \"66778899\"\n\t    },\n\t    \"addresses\": {\n\t    \t\"zipCode\": \"01234567\",\n\t        \"street\": \"Rua de teste do SHIPPING\",\n\t        \"streetNumber\": \"123\",\n\t        \"complement\": \"8\",\n\t        \"city\": \"Sao Paulo\",\n\t        \"district\": \"Bairro do SHIPPING\",\n\t        \"state\": \"SP\",\n\t        \"country\": \"BRA\"\n\t    }\n   },\n   \"payment\": {\n   \t\t\"cardExpirationMonth\": 12,\n            \"cardExpirationYear\": 21,\n            \"cardNumber\": \"4012001037141112\",\n            \"cardCVC\": \"123\",\n            \"cardFullName\": \"Jose Portador da Silva\",\n            \"cardBirthDate\": \"1988-12-30\",\n            \"cardCPF\": \"33333333333\",\n            \"phone\": {\n\t\t        \"countryCode\": \"55\",\n\t\t        \"areaCode\": \"11\",\n\t\t        \"number\": \"66778899\"\n\t\t    }\n   }\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/event/creditcard",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "event",
                "creditcard"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PROD - Pagamento de assinatura com cartão de crédito",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n   \"plan_id\": 1,\n   \"hol\": false,\n   \"holder\": {\n   \t\t\"fullname\": \"Fulano de Tal\",\n    \t\"email\": \"fulano@email.com\",\n    \t\"birthDate\": \"1988-12-30\",\n    \t\"taxDocument\": {\n\t        \"type\": \"CPF\",\n\t        \"number\": \"22222222222\"\n\t    },\n\t\t    \"phone\": {\n\t        \"countryCode\": \"55\",\n\t        \"areaCode\": \"11\",\n\t        \"number\": \"66778899\"\n\t    },\n\t    \"addresses\": {\n\t    \t\"zipCode\": \"01234567\",\n\t        \"street\": \"Rua de teste do SHIPPING\",\n\t        \"streetNumber\": \"123\",\n\t        \"complement\": \"8\",\n\t        \"city\": \"Sao Paulo\",\n\t        \"district\": \"Bairro do SHIPPING\",\n\t        \"state\": \"SP\",\n\t        \"country\": \"BRA\"\n\t    }\n   },\n   \"payment\": {\n   \t\t\"cardExpirationMonth\": 12213342134,\n            \"cardExpirationYear\": 21,\n            \"cardNumber\": \"4012001037141112\",\n            \"cardCVC\": \"123\",\n            \"cardFullName\": \"Jose Portador da Silva\",\n            \"cardBirthDate\": \"1988-12-30\",\n            \"cardCPF\": \"33333333333\",\n            \"phone\": {\n\t\t        \"countryCode\": \"55\",\n\t\t        \"areaCode\": \"11\",\n\t\t        \"number\": \"66778899\"\n\t\t    }\n   }\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/signature/creditcard",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "signature",
                "creditcard"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PROD - Pagamento de evento com boleto",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n    \"event_id\": 3\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/event/boleto",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "event",
                "boleto"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PROD - Pagamento de assinatura com boleto",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n    \"plan_id\": 1\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/signature/boleto",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "signature",
                "boleto"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Salvar dados de compra com cartão de crédito",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n    \"payment_type\": \"CREDIT_CARD\",\n\t\"payment_id\": \"PAY-20TEHEQ0D0BI\",\n\t\"status\": \"IN_ANALYSIS\",\n\t\"event_id\": 1,\n    \"user_id\": 1,\n    \"price\": 30.50,\n    \"signature\": false\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/save",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "save"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Salvar dados de compra com boleto",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n    \"paid\": false,\n    \"payment_type\": \"BOLETO\",\n\t\"payment_id\": \"PAY-20TEHEQ0D0BI\",\n\t\"status\": \"WAITING\",\n\t\"event_id\": 1,\n    \"user_id\": 1,\n    \"price\": 30.50,\n    \"signature\": false,\n    \"linkBoleto\": \"https://checkout-sandbox.moip.com.br/boleto/PAY-BHD7L9NO9HXG/print\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/save",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "save"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar pagamentoss",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/payment/mepayments",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "mepayments"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Delete retorno moip",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/payment/deleteurl/NPR-F75RT23RIQBX",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "deleteurl",
                "NPR-F75RT23RIQBX"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Verificar Pagamento de evento",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URLBase}}/api/web/payment/check/1/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "check",
                "1",
                "1"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar URl de retorno moip",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URLBase}}/api/web/payment/listurl",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "listurl"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Criar url de retorno",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"url\": \"https://sejavipbrasilia.com.br/sejavipback/public/api/web/payment/return\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/createurl",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "createurl"
              ]
            }
          },
          "response": []
        },
        {
          "name": "teste de retorno MOIP Pagamento Cancelado",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}",
                "disabled": true
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{  \n   \"date\":\"\",\n   \"env\":\"\",\n   \"event\":\"PAYMENT.CANCELLED\",\n   \"resource\":{  \n      \"payment\":{  \n         \"_links\":{  \n            \"order\":{  \n               \"href\":\"https:\\/\\/api.moip.com.br\\/v2\\/orders\\/ORD-RMYC92T7M6HO\",\n               \"title\":\"ORD-RMYC92T7M6HO\"\n            },\n            \"self\":{  \n               \"href\":\"https:\\/\\/api.moip.com.br\\/v2\\/payments\\/PAY-Z68VX60B1MJG\"\n            }\n         },\n         \"acquirerDetails\":{  \n            \"authorizationNumber\":\"N\\/A\",\n            \"taxDocument\":{  \n               \"number\":\"16501555000157\",\n               \"type\":\"CNPJ\"\n            }\n         },\n         \"amount\":{  \n            \"currency\":\"BRL\",\n            \"fees\":0,\n            \"gross\":3000,\n            \"liquid\":3000,\n            \"refunds\":0,\n            \"total\":3000\n         },\n         \"cancellationDetails\":{  \n            \"cancelledBy\":\"ACQUIRER\",\n            \"code\":\"12\",\n            \"description\":\"Pol\\u00edtica de seguran\\u00e7a do Banco Emissor\"\n         },\n         \"createdAt\":\"2018-05-08T17:16:15.034-03\",\n         \"delayCapture\":false,\n         \"events\":[  \n            {  \n               \"createdAt\":\"2018-05-08T17:16:37.708-03\",\n               \"type\":\"PAYMENT.CANCELLED\"\n            },\n            {  \n               \"createdAt\":\"2018-05-08T17:16:15.109-03\",\n               \"type\":\"PAYMENT.CREATED\"\n            }\n         ],\n         \"fees\":[  \n            {  \n               \"amount\":0,\n               \"type\":\"TRANSACTION\"\n            }\n         ],\n         \"fundingInstrument\":{  \n            \"creditCard\":{  \n               \"brand\":\"MASTERCARD\",\n               \"first6\":\"529285\",\n               \"holder\":{  \n                  \"birthDate\":\"1991-04-04\",\n                  \"birthdate\":\"1991-04-04\",\n                  \"fullname\":\"Maria Clara Rubinger de Sousa\",\n                  \"taxDocument\":{  \n                     \"number\":\"04045026100\",\n                     \"type\":\"CPF\"\n                  }\n               },\n               \"last4\":\"8707\",\n               \"store\":false\n            },\n            \"method\":\"CREDIT_CARD\"\n         },\n         \"id\":\"PAY-ISL6B5VBUEBB\",\n         \"installmentCount\":3,\n         \"receivers\":[  \n            {  \n               \"amount\":{  \n                  \"currency\":\"BRL\",\n                  \"fees\":0,\n                  \"refunds\":0,\n                  \"total\":3000\n               },\n               \"feePayor\":true,\n               \"moipAccount\":{  \n                  \"fullname\":\"In9ve Marketing Digital Eireli\",\n                  \"id\":\"MPA-ED2B4C858D71\",\n                  \"login\":\"alanioribeiro@hotmail.com\"\n               },\n               \"type\":\"PRIMARY\"\n            }\n         ],\n         \"statementDescriptor\":\"Seja VIP\",\n         \"status\":\"CANCELLED\",\n         \"updatedAt\":\"2018-05-08T17:16:37.708-03\"\n      }\n   }\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/return",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "return"
              ]
            }
          },
          "response": []
        },
        {
          "name": "teste de retorno MOIP Pagamento autorizado",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}",
                "disabled": true
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{  \n   \"date\":\"\",\n   \"env\":\"\",\n   \"event\":\"PAYMENT.AUTHORIZED\",\n   \"resource\":{  \n      \"payment\":{  \n         \"_links\":{  \n            \"order\":{  \n               \"href\":\"https:\\/\\/api.moip.com.br\\/v2\\/orders\\/ORD-FL70BKDIWEB7\",\n               \"title\":\"ORD-FL70BKDIWEB7\"\n            },\n            \"self\":{  \n               \"href\":\"https:\\/\\/api.moip.com.br\\/v2\\/payments\\/PAY-FFMR601COS09\"\n            }\n         },\n         \"acquirerDetails\":{  \n            \"authorizationNumber\":\"035893\",\n            \"taxDocument\":{  \n               \"number\":\"01027058000191\",\n               \"type\":\"CNPJ\"\n            }\n         },\n         \"amount\":{  \n            \"currency\":\"BRL\",\n            \"fees\":384,\n            \"gross\":3000,\n            \"liquid\":2616,\n            \"refunds\":0,\n            \"total\":3000\n         },\n         \"createdAt\":\"2018-05-08T17:15:24.000-03\",\n         \"delayCapture\":false,\n         \"events\":[  \n            {  \n               \"createdAt\":\"2018-05-08T17:15:53.936-03\",\n               \"type\":\"PAYMENT.AUTHORIZED\"\n            },\n            {  \n               \"createdAt\":\"2018-05-08T17:15:46.000-03\",\n               \"type\":\"PAYMENT.IN_ANALYSIS\"\n            },\n            {  \n               \"createdAt\":\"2018-05-08T17:15:24.000-03\",\n               \"type\":\"PAYMENT.CREATED\"\n            }\n         ],\n         \"fees\":[  \n            {  \n               \"amount\":234,\n               \"type\":\"TRANSACTION\"\n            },\n            {  \n               \"amount\":150,\n               \"type\":\"PRE_PAYMENT\"\n            }\n         ],\n         \"fundingInstrument\":{  \n            \"creditCard\":{  \n               \"brand\":\"MASTERCARD\",\n               \"first6\":\"520405\",\n               \"holder\":{  \n                  \"birthDate\":\"1952-11-01\",\n                  \"birthdate\":\"1952-11-01\",\n                  \"fullname\":\"Francisca Maria da Silva Freitas \",\n                  \"taxDocument\":{  \n                     \"number\":\"37614673115\",\n                     \"type\":\"CPF\"\n                  }\n               },\n               \"last4\":\"9743\",\n               \"store\":false\n            },\n            \"method\":\"CREDIT_CARD\"\n         },\n         \"id\":\"PAY-G83MGJISZVI0\",\n         \"installmentCount\":3,\n         \"receivers\":[  \n            {  \n               \"amount\":{  \n                  \"currency\":\"BRL\",\n                  \"fees\":384,\n                  \"refunds\":0,\n                  \"total\":3000\n               },\n               \"feePayor\":true,\n               \"moipAccount\":{  \n                  \"fullname\":\"In9ve Marketing Digital Eireli\",\n                  \"id\":\"MPA-ED2B4C858D71\",\n                  \"login\":\"alanioribeiro@hotmail.com\"\n               },\n               \"type\":\"PRIMARY\"\n            }\n         ],\n         \"statementDescriptor\":\"Seja VIP\",\n         \"status\":\"AUTHORIZED\",\n         \"updatedAt\":\"2018-05-08T17:15:53.936-03\"\n      }\n   }\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/payment/return",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "payment",
                "return"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Plan",
      "item": [
        {
          "name": "Listar",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/plan",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "plan"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Email",
      "item": [
        {
          "name": "Contato",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\" : \"Walaks Silva\",\n\t\"phone\" : \"(61) 99172-0651\",\n\t\"email\" : \"walaks@hotmail.com\",\n\t\"comment\" : \"Hello\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/contato",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "contato"
              ]
            }
          },
          "response": []
        },
        {
          "name": "teste",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"name\" : \"Walaks Silva\",\n\t\"phone\" : \"(61) 99172-0651\",\n\t\"email\" : \"walaks@hotmail.com\",\n\t\"comment\" : \"Hello\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/contato",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "contato"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Acompanhante",
      "item": [
        {
          "name": "Salvar acompanhantes",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"event_id\" : 4,\n\t\"names\": [\"Walaks Silva\", \"Aghara Silva\"]\n}\n"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/subscription/companions",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "subscription",
                "companions"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Eventos passados",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "url": {
              "raw": "{{URLBase}}/api/web/events/lastevents",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "events",
                "lastevents"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Home",
      "item": []
    },
    {
      "name": "Portaria",
      "item": [
        {
          "name": "Acesso de portaria",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n    \"key_event\" : \"9985g9\",\n    \"cpf_concierge\" : \"03712635141\"\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/accessConcierge",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "accessConcierge"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Mensagem",
      "item": [
        {
          "name": "Criar mensagem",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json",
                "type": "text"
              },
              {
                "key": "Authorization",
                "value": "{{BearerApi}}",
                "type": "text"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"title\": \"Boa noite meninas!\",\n\t\"text\": \"Não percam os melhores eventos de Brasília.\",\n\t\"all\": false,\n\t\"groups\": [49, 50, 51, 52, 54, 55],\n\t\"events\": [],\n\t\"users\": []\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/message",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "message"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Filtar",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"user\": \"walaks\",\n\t\"events\": [],\n\t\"groups\": []\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/message/filtrar",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "message",
                "filtrar"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Listar",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/message",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "message"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Total de mensagens",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/message/count",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "message",
                "count"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Marcar leitura",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/message/check/1",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "message",
                "check",
                "1"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Dados do filtro",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/message/filtro",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "message",
                "filtro"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Convite",
      "item": [
        {
          "name": "Pesquisar usuario",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/invite/filtrar/04044281181",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "invite",
                "filtrar",
                "04044281181"
              ]
            }
          },
          "response": []
        },
        {
          "name": "eventos",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/invite/events",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "invite",
                "events"
              ]
            }
          },
          "response": []
        },
        {
          "name": "lista",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": ""
            },
            "url": {
              "raw": "{{URLBase}}/api/web/invite/",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "invite",
                ""
              ]
            }
          },
          "response": []
        },
        {
          "name": "Criar convite",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "type": "text",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "type": "text",
                "value": "{{BearerApi}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n\t\"event_id\": 12,\n\t\"user_id\": 5971\n}"
            },
            "url": {
              "raw": "{{URLBase}}/api/web/invite",
              "host": [
                "{{URLBase}}"
              ],
              "path": [
                "api",
                "web",
                "invite"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "login",
      "event": [
        {
          "listen": "test",
          "script": {
            "id": "8fbff62f-286c-43e9-989c-9c34842a0dec",
            "exec": [
              "var data = JSON.parse(responseBody);",
              "",
              "postman.setGlobalVariable(\"BearerApi\", \"Bearer \" + data.token);",
              ""
            ],
            "type": "text/javascript"
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "type": "text"
          }
        ],
        "body": {
          "mode": "urlencoded",
          "urlencoded": [
            {
              "key": "email",
              "value": "walaks.alves@gmail.com",
              "type": "text"
            },
            {
              "key": "password",
              "value": "secret",
              "type": "text"
            }
          ]
        },
        "url": {
          "raw": "{{URLBase}}/api/auth/login",
          "host": [
            "{{URLBase}}"
          ],
          "path": [
            "api",
            "auth",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "me",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "{{BearerApi}}"
          }
        ],
        "url": {
          "raw": "{{URLBase}}/api/auth/me",
          "host": [
            "{{URLBase}}"
          ],
          "path": [
            "api",
            "auth",
            "me"
          ]
        }
      },
      "response": []
    },
    {
      "name": "URL",
      "event": [
        {
          "listen": "test",
          "script": {
            "type": "text/javascript",
            "exec": [
              "postman.setGlobalVariable(\"URLBase\", \"http://127.0.0.1:8000\");",
              ""
            ]
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "formdata",
          "formdata": []
        },
        "url": {
          "raw": "{{URLBase}}/api/web/",
          "host": [
            "{{URLBase}}"
          ],
          "path": [
            "api",
            "web",
            ""
          ]
        }
      },
      "response": []
    },
    {
      "name": "refresh token login",
      "event": [
        {
          "listen": "test",
          "script": {
            "id": "dc21eff0-4628-4944-8b45-b62961f83748",
            "exec": [
              "var data = JSON.parse(responseBody);",
              "",
              "postman.setGlobalVariable(\"BearerApi\", \"Bearer \" + data.token);",
              ""
            ],
            "type": "text/javascript"
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          },
          {
            "key": "Authorization",
            "value": "{{BearerApi}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "formdata",
          "formdata": []
        },
        "url": {
          "raw": "{{URLBase}}/api/auth/refresh",
          "host": [
            "{{URLBase}}"
          ],
          "path": [
            "api",
            "auth",
            "refresh"
          ]
        },
        "description": "novo"
      },
      "response": []
    }
  ],
  "event": [
    {
      "listen": "prerequest",
      "script": {
        "id": "a14f76c2-225c-46c4-bc86-b19b9205a95f",
        "type": "text/javascript",
        "exec": [
          ""
        ]
      }
    },
    {
      "listen": "test",
      "script": {
        "id": "9c68c04c-ef1c-4c33-8b90-bfd1b56f3709",
        "type": "text/javascript",
        "exec": [
          ""
        ]
      }
    }
  ],
  "variable": [
    {
      "id": "ba1679bd-b5fd-47b3-b3ff-80d32854b000",
      "key": "URLBase",
      "value": "http://sejavip.esy.es/sejavipback/public",
      "type": "string"
    }
  ]
};

export default testeCollection;
