import { Controller, Get, UseGuards } from '@nestjs/common';
import { userService } from './user.service';
import { jwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('users')
@UseGuards(jwtAuthGuard)
export class userController {
   
  constructor(
    private readonly userService: userService,
  ) {}

  @Get('health')
  getHealth() {
    return this.userService.test();
  }

  @Get('all')
  getAll() {
    return this.userService.getAll();
  }
}
