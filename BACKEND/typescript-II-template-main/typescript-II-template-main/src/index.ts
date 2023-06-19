/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

import { TUserAdmin, TUserNormal, USER_ROLES } from "./types";

const userAdmin:TUserAdmin={
    id:1,
    name:"Admin",
    email:"admin@exemplo.com",
    password:"admin",
    account:"00009181818",
    permission:USER_ROLES.ADMIN,
}
const userNormal:TUserNormal={
    id:1,
    name:"Normal",
    email:"fulano@exemplo.com",
    password:"normal",
    account:"00009181818",
    permission:USER_ROLES.NORMAL,
}
const userAdmin_2:TUserAdmin={
    id:2,
    name:"Admin2",
    email:"admin2@exemplo.com",
    password:"admin2",
    account:"000091818182",
    permission:USER_ROLES.ADMIN,
}
const userNormal_2:TUserNormal={
    id:2,
    name:"Normal2",
    email:"fulano2@exemplo.com",
    password:"normal2",
    account:"000091818182",
    permission:USER_ROLES.NORMAL,
}

const usersAdmin:TUserAdmin[] = []


usersAdmin.push(userAdmin)
usersAdmin.push(userAdmin_2)

console.table(usersAdmin);











/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 
