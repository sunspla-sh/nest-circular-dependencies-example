import { Controller, Get } from '@nestjs/common';
import { FrogsService } from './frogs.service';

@Controller('frogs')
export class FrogsController {
  constructor(private frogsService: FrogsService) {}

  @Get()
  frog() {
    return this.frogsService.jumpIntoPond();
  }
}
