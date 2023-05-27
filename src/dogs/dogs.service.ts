import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Injectable()
export class DogsService {
  constructor(
    @Inject(forwardRef(() => CatsService)) private catsService: CatsService,
  ) {}

  makeSound() {
    return 'bark!';
  }

  bark() {
    return `dog says: bark! cat says: ${this.catsService.makeSound()}`;
  }
}
