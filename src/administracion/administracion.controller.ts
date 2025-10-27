import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdministracionService } from './administracion.service';

@Controller('administracion')
export class AdministracionController {
  constructor(private readonly admiService: AdministracionService) {}
  @Get('turnos')
  getListarTurnos() {
    return this.admiService.getTurnos();
  }
  @Post('nuevoturno')
  postNuevosTurnos(@Body() nuevaTurno: any) {
    return this.admiService.postAgendarTurno(nuevaTurno);
  }
  @Get('historial')
  getHistorialMascotas() {
    return this.admiService.getHistorialDeMascota();
  }
  @Get(':id')
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
