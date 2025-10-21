import { Injectable } from '@nestjs/common';

@Injectable()
export class AdministracionService {
  agendaDeTurnos: any = [];
  constructor() {
    let turno = {
      telefono: '555-1234', //voy a usar el telefono como si fuese el id
      duenio: 'Juan Perez',
      nombreMascota: 'Firulais',
      fecha: '20-11-25',
      hora: '16:00',
    };
    this.agendaDeTurnos.push(turno);
    turno = {
      telefono: '535-1294', //voy a usar el telefono como si fuese el id
      duenio: 'Raul Sanchez',
      nombreMascota: 'Fauto',
      fecha: '20-11-25',
      hora: '16:30',
    };
    this.agendaDeTurnos.push(turno);
  }

  getTurnos() {
    return this.agendaDeTurnos;
  }
  postAgendarTurno(nuevoTurno: any) {
    if (!nuevoTurno || !nuevoTurno.fecha || !nuevoTurno.duenio) {
      return 'Se ingresó un valor inválido';
    }
    this.agendaDeTurnos.push(nuevoTurno);
    return `Se agendo el truno de ${nuevoTurno.duenio}`;
  }
}
