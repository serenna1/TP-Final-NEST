import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  registroDeMascotas: any = [];
  constructor() {
    let mascota = {
      id: '1',
      nombre: 'Firulais',
      raza: 'caniche toy',
      edad: '3',
      vacunas: '0',
      tratamiento: 'antibioticos',
      diagnostico: 'Infeccion Urinaria',
      duenio: 'Juan Perez',
      telefono: '555-1234',
    };
    this.registroDeMascotas.push(mascota);
    mascota = {
      id: '2',
      nombre: 'Fauto',
      raza: 'caniche toy',
      edad: '9',
      vacunas: '4',
      tratamiento: 'antibioticos',
      diagnostico: 'Infeccion de piel',
      duenio: 'Raul Sanchez',
      telefono: '535-1294',
    };
    this.registroDeMascotas.push(mascota);
    mascota = {
      id: '3',
      nombre: 'Lola',
      raza: 'Labrador Retriever',
      edad: '2',
      vacunas: '3',
      tratamiento: 'ninguno',
      diagnostico: 'revision anual',
      duenio: 'Julia Martinez',
      telefono: '555-1354',
    };
    this.registroDeMascotas.push(mascota);
  }
  getMascotas() {
    return this.registroDeMascotas;
  }
  getMacotasId(id: String) {
    for (let i = 0; i < this.registroDeMascotas.length; i++) {
      if (this.registroDeMascotas[i].id == id) {
        return this.registroDeMascotas[i];
      }
    }
    return 'No se encontro el paciente';
  }

  postIngresarMascota(nuevaMascota: any) {
    if (!nuevaMascota || !nuevaMascota.nombre || !nuevaMascota.duenio) {
      return 'Se ingresó un valor inválido';
    }
    const nuevoId = (this.registroDeMascotas.length + 1).toString();
    nuevaMascota.id = nuevoId;

    this.registroDeMascotas.push(nuevaMascota);
    return `Mascota ${nuevaMascota.nombre} registrada con éxito.`;
  }
}
