export interface Cart {
    
}

export interface Boleta{
    id_usuario:string,
    fecha:Date,
    total:number
}

export interface Detalle {
    id_boleta:number,
    id_usuario:string,
    cantidad:number,
    subtotal:number
}
export interface Producto {
    id:number,
    nombre:string,
    stock:number,
    valor:number,
    categoria:string
}
export interface Comentario{
    correo:string,
    comentario:string,
    calificacion:number
}

export interface Usuario {
    nombre: string,
    apellido: string,
    rut: string,
    direccion: string,
    comuna: string,
    region: string,
    correo: string,
    password: string
  }
