import { IsNumber } from 'class-validator';

export class PostTestDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  id: number;
}
