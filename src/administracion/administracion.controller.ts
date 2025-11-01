import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdministracionService } from './administracion.service';

@Controller('gestion')
export class AdministracionController {
  constructor(private readonly admiService: AdministracionService) {}
  @Get('turnos')
  getListarTurnos() {
    return this.admiService.getTurnos();
  }
  @Post('nuevo_turno')
  postNuevosTurnos(@Body() nuevaTurno: any) {
    return this.admiService.postAgendarTurno(nuevaTurno);
  }
  @Get('ficha')
  getHistorialMascotas() {
    return this.admiService.getHistorialDeMascota();
  }
  @Get('ficha/:id')
  getHistorialPorID(@Param('id') id: String) {
    return this.admiService.getHistorialPorID(id);
  }
  @Post('informe/:id')
  postAgregarInforme(@Param('id') id: string, @Body() informe: any) {
    return this.admiService.postAgregarInforme(id, informe);
  }
  @Get('chequeos_anuales')
  getChequeo() {
    return this.admiService.getMascotasChequeoAnual();
  }
}
