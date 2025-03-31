import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositivePipe implements PipeTransform {
  transform(value: number): number {
    if (value <= 0) {
      throw new BadRequestException('Value must be a positive number');
    }
    return value;
  }
}
