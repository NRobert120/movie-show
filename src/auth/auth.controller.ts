import {
  Body,
  Get,
  Req,
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
import { refreshTokenAuthGuard } from './guards/jwt.guard';
import { googleAuthGuard } from './guards/google-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { githubAuthGuard } from './guards/github-auth.guard';

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



  @UseGuards(googleAuthGuard)
  @Get('google')
   google(){
    return "login with google"
   }


  @UseGuards(githubAuthGuard)
  @Get('github')
  login(){
   return 'loging in with github'
  }


  @UseGuards(AuthGuard('github'))
  @Get('github/callback')
   githubCallback(@Req() req){
    return req.user
   }


}