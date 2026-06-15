import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy, refleshTokenStrategy } from './auth.guard';
import { refreshTokenAuthGuard } from './jwt.guards';


@Module({
  imports:[JwtModule],
  controllers: [AuthController],
  providers: [AuthService,JwtService,JwtStrategy,refleshTokenStrategy],
})
export class authModule {}
