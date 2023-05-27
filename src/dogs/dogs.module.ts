import { Module, forwardRef } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [forwardRef(() => CatsModule)], //circular dependency between two modules
  controllers: [DogsController],
  providers: [DogsService],
  exports: [DogsService],
})
export class DogsModule {}
