import { Cripto } from "./cripto";

export class Usuario {
    uid!: any;
    nombre!: string;
    email!: string;
    password?: string= '';
    foto!: string;
    tipo!: 'comprador' | 'vendedor'
    emailVerified!: boolean;
    approved=false;
    admin=false;
    cripto?:Cripto;
}