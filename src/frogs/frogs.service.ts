import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { PondUtilService } from './pond-util.service';

@Injectable()
export class FrogsService {
  private NUM_FROGS = 5;

  constructor(
    //circular dependency between two services (providers) within the same module
    @Inject(forwardRef(() => PondUtilService))
    private pondUtilService: PondUtilService,
  ) {}

  getNumFrogs() {
    return this.NUM_FROGS;
  }

  makeSound() {
    return 'ribbit!';
  }

  jumpIntoPond() {
    return `frog says "${this.makeSound()}" and jumps into ${this.pondUtilService.getPondName()}`;
  }
}
