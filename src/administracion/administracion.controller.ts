import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
