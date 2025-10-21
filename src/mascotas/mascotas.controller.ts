import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MascotasService } from './mascotas.service';

@Controller('inicio')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}
  @Get('')
  getListarMascotas() {
    return this.mascotasService.getMascotas();
  }
  @Get(':id')
  getListarPorId(@Param('id') idMascota: String) {
    return this.mascotasService.getMacotasId(idMascota);
  }
  @Post('registro')
  postIngresaMascota(@Body() nuevaMascota: any) {
    return this.mascotasService.postIngresarMascota(nuevaMascota);
  }
}
