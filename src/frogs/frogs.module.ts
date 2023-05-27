import { Module } from '@nestjs/common';
import { FrogsController } from './frogs.controller';
import { FrogsService } from './frogs.service';
import { PondUtilService } from './pond-util.service';

@Module({
  providers: [FrogsService, PondUtilService],
  controllers: [FrogsController],
})
export class FrogsModule {}
