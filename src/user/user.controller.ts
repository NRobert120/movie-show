import { Controller, Get, UseGuards } from '@nestjs/common';
import { userService } from './user.service';
import { JwtStrategy } from 'src/auth/auth.guard';

@Controller('users')
export class userController {
   
  constructor(
    private readonly userService: userService,
  ) {}
  @UseGuards(JwtStrategy)
  @Get('health')
  getHealth() {
    return this.userService.test();
  }

  @Get('all')
  getAll() {
    return this.userService.getAll();
  }
}
