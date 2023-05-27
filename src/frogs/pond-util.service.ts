import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { FrogsService } from './frogs.service';

@Injectable()
export class PondUtilService {
  constructor(
    //circular dependency between two services (providers) within the same module
    @Inject(forwardRef(() => FrogsService))
    private frogsService: FrogsService,
  ) {}

  getPondName() {
    return `mulberry pond, which is the home of ${
      this.frogsService.getNumFrogs() - 1
    } other frogs`;
  }
}
