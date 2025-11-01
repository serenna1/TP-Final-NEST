import { Module } from '@nestjs/common';
import { AdministracionController } from './administracion.controller';
import { AdministracionService } from './administracion.service';
import { MascotasModule } from 'src/mascotas/mascotas.module';

@Module({
  imports: [MascotasModule],
  controllers: [AdministracionController],
  providers: [AdministracionService],
})
export class AdministracionModule {}
