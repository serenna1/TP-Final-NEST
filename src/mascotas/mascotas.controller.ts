import { Controller, Get, Param } from '@nestjs/common';
import { MascotasService } from './mascotas.service';

@Controller('registro')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}
  @Get('')
  getListarMascotas() {
    return this.mascotasService.getMascotas();
  }
  @Get(':id')
  getListarPorId(@Param('id') idMascota: Number) {
    return this.mascotasService.getMacotasId(idMascota);
  }
}
