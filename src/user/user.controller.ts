import { Controller, Get } from '@nestjs/common';

@Controller('/api/user')
export class UserController {
  @Get()
  getHello(): string {
    return 'helloworld';
  }
}
