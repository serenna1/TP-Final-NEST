import { MascotasService } from 'src/mascotas/mascotas.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdministracionService {
  agendaDeTurnos: any = [];
  constructor(private readonly mascotasService: MascotasService) {
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
  getHistorialDeMascota() {
    const mascotas = this.mascotasService.getMascotas();
    return mascotas.map((m) => ({
      nombre: m.nombre,
      duenio: m.duenio,
      diagnostico: m.diagnostico,
      vacunas: m.vacunas,
      tratamientos: m.tratamientos,
    }));
  }
  getHistorialPorID(id: String) {
    const mascota = this.mascotasService.getMacotasId(id);
    if (!mascota) {
      return 'No se encontro el paciente';
    }
    return {
      id: mascota.id,
      nombre: mascota.nombre,
      duenio: mascota.duenio,
      diagnosticos: mascota.diagnosticos,
      vacunas: mascota.vacunas,
      tratamientos: mascota.tratamientos,
    };
  }
  postAgregarInforme(id: string, informe: any) {
    if (
      !informe ||
      !informe.diagnostico ||
      !informe.duenio ||
      !informe.vacunas ||
      !informe.tratamientos
    ) {
      return 'Se ingresó un valor inválido';
    }
    const mascotas = this.mascotasService
      .getMascotas()
      .find((m) => m.id === id);
    if (!mascotas) {
      return 'No se encontro mascota';
    }
    if (informe.diagnostico) mascotas.diagnostico.push(...informe.diagnostico);
    if (informe.vacunas) mascotas.vacunas.push(...informe.vacunas);
    if (informe.tratamientos)
      mascotas.tratamientos.push(...informe.tratamientos);

    return `Se agrego al historial de ${mascotas.nombre}`;
  }
  getMascotasChequeoAnual() {
    const mascota = this.mascotasService.getMascotas();
    const resultado: any[] = [];
    for (let i = 0; i < mascota.length; i++) {
      for (let j = 0; j < mascota[i].diagnostico.length; j++) {
        if (mascota[i].diagnostico[j].descripcion === 'Revision anual') {
          resultado.push(mascota[i]);
          break;
        }
      }
    }
  }
}
