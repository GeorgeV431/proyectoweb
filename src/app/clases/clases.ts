import { Title } from '@angular/platform-browser';

export interface Usuario {
    rut?: number,
    nombres?: string,
    apellidos?: string,
    region?: string,
    comuna?: string,
    direccion?: string,
    correo?: string,
    contrasena?: string,
    tipo?: number
};

export interface Producto {
    id: number,
    nombre: string,
    stock: number,
    valor: number,
    categoria: string
}

export interface Comentarios {
    id?: number,
    producto?: number,
    usuario?: number,
    texto?: string
}

export interface Boleta {
    id?: number,
    usuario?: number,
    fecha?: Date,
    total?: number
}

export interface Detalle {
    id?: number,
    boleta?: number,
    producto?: number,
    cantidad?: number,
    subtotal?: number
}