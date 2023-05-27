import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { FrogsModule } from './frogs/frogs.module';

@Module({
  imports: [CatsModule, DogsModule, FrogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
