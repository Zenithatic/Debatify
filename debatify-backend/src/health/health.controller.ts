import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { HealthService } from './health.service';
import { PostTestDto } from './validation/posttest.dto';
import { PositivePipe } from './validation/positive.pipe';

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  // this is accessed with suburl http:// localhost:3000/health/ping
  @Get('ping')
  ping() {
    return { status: `ok with number ${this.healthService.serviceFunction()}` };
  }

  // this is accessed with suburl http:// localhost:3000/health/paramtest
  // and the param is passed in the url like this: http:// localhost:3000/health/paramtest/123
  @Get('paramtest/:id')
  paramTest(@Param('id') id: string) {
    if (id.length == 0) {
      id = 'default';
    }

    return { status: `ok ${id}` };
  }

  // this is accessed with suburl http:// localhost:3000/health/querytest
  // and the query is passed in the url like this: http:// localhost:3000/health/querytest?name=123
  @Get('querytest')
  queryTest(@Query('id', ParseIntPipe, PositivePipe) id: number) {
    return { status: `ok ${id}` };
  }

  // this is accessed with suburl http:// localhost:3000/health/posttest
  // and the body is passed in the request like this:
  @Post('posttest')
  postTest(@Body(ValidationPipe) body: PostTestDto): { status: string } {
    return { status: `ok ${body.id}` };
  }
}
