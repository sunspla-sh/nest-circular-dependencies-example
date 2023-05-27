import { Module, forwardRef } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { DogsModule } from 'src/dogs/dogs.module';

@Module({
  imports: [forwardRef(() => DogsModule)], //circular dependency between two modules
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
