import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { DogsService } from 'src/dogs/dogs.service';

@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => DogsService)) private dogsService: DogsService,
  ) {}

  makeSound() {
    return 'meow!';
  }

  meow() {
    return `cat says: meow! dog says: ${this.dogsService.makeSound()}`;
  }
}
