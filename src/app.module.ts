import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasModule } from './mascotas/mascotas.module';
import { AdministracionModule } from './administracion/administracion.module';

@Module({
  imports: [MascotasModule, AdministracionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
