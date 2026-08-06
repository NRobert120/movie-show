import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy, refleshTokenStrategy } from './strategies/jwt.strategy';
import { refreshTokenAuthGuard } from './guards/jwt.guard';
import { githubStrategy } from './strategies/github-auth.strategy';


@Module({
  imports:[JwtModule],
  controllers: [AuthController],
  providers: [AuthService,JwtService,JwtStrategy,refleshTokenStrategy,githubStrategy],
})
export class authModule {}
