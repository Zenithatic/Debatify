import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  serviceFunction(): number {
    return 3000;
  }
}
