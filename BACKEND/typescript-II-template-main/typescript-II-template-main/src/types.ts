export enum USER_ROLES{
    ADMIN = "admin",
    NORMAL= "normal"
}

export type TPerson={
    id:string|number,
    name:string,
    email:string,
    password:string,
}

export type TAdminAccount={
    account:string,
    permission:USER_ROLES.ADMIN,
}
export type TNormalAccount={
    account:string,
    permission:USER_ROLES.NORMAL,
}

export type TUserAdmin = TPerson&TAdminAccount
export type TUserNormal = TPerson&TNormalAccount

//==============exercício 1=====================

export type TCorPessoal={
    nome:string,
    idade:number,
    corFavorita:string
}

export enum CORES_ARCO_IRIS{
    VERMELHA="vermelha",
    LARANJA="laranja",
    AMARELA="amarela",
    VERDE="verde",
    AZUL="azul",
    ANIL="anil",
    VIOLETA="violeta",
}

//===============exercício 2==================

export type TPost={
    autor:string,
    texto:string
}