import {
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  CreateUserDto,
  refreshTokenDto,
  SignInUpDto,
} from './creat-user.dto';
import { refreshTokenAuthGuard } from './jwt.guards';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Post('signup')
  signUp(@Body() body: CreateUserDto) {
    return this.AuthService.signUp(body);
  }
  @Post('signin')
  signin(@Body() body: SignInUpDto) {
    return this.AuthService.signIn(body);
  }
  @UseGuards(refreshTokenAuthGuard)
  @Post('refresh')
   refreshToken(dto:refreshTokenDto){
    return this.AuthService.refreshToken(dto);
   }
}