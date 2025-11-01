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
    return { mensaje: 'Listado de turnos', turnos: this.agendaDeTurnos };
  }
  postAgendarTurno(nuevoTurno: any) {
    if (!nuevoTurno || !nuevoTurno.fecha || !nuevoTurno.duenio) {
      return 'Se ingresó un valor inválido';
    }
    this.agendaDeTurnos.push(nuevoTurno);
    return {
      mensaje: `Se agendó el turno de ${nuevoTurno.duenio}`,
      turno: nuevoTurno,
    };
  }
  getHistorialDeMascota() {
    const mascotas = this.mascotasService.getMascotas();
    return {
      mensaje: 'Historial completo de mascotas',
      mascotas: mascotas.map((m) => ({
        nombre: m.nombre,
        duenio: m.duenio,
        diagnostico: m.diagnostico,
        vacunas: m.vacunas,
        tratamientos: m.tratamientos,
      })),
    };
  }
  getHistorialPorID(id: String) {
    const mascota = this.mascotasService.getMascotasId(id);
    if (!mascota) {
      return { mensaje: 'No se encontró la mascota' };
    }
    return {
      mensaje: `Historial de ${mascota.nombre}`,
      mascota: {
        id: mascota.id,
        nombre: mascota.nombre,
        duenio: mascota.duenio,
        diagnostico: mascota.diagnostico,
        vacunas: mascota.vacunas,
        tratamientos: mascota.tratamientos,
      },
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
      return { mensaje: 'Se ingreso un valor invalido' };
    }
    const mascotas = this.mascotasService
      .getMascotas()
      .find((m) => m.id === id);
    if (!mascotas) {
      return { mensaje: 'No se encontro mascota' };
    }
    if (informe.diagnostico) mascotas.diagnostico.push(...informe.diagnostico);
    if (informe.vacunas) mascotas.vacunas.push(...informe.vacunas);
    if (informe.tratamientos)
      mascotas.tratamientos.push(...informe.tratamientos);

    return {
      mensaje: `Se agregaron los informes al historial de ${mascotas.nombre}`,
    };
  }
  getMascotasChequeoAnual() {
    const mascotas = this.mascotasService.getMascotas();
    const resultado: any[] = [];
    for (const mascota of mascotas) {
      let tieneRevision = false;

      for (const diag of mascota.diagnostico) {
        if (diag.descripcion === 'Revision Anual') {
          tieneRevision = true;
          break;
        }
      }

      if (!tieneRevision) {
        resultado.push(mascota);
      }
    }

    return {
      mensaje: 'Mascotas que necesitan revisión anual',
      mascotas: resultado,
    };
  }
}
