import { Module } from '@nestjs/common';
import { authModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { bookmarkService } from './bookmark/bookmark.service';
import { bookmarkController } from './bookmark/bookmark.controller';
import { userService } from './user/user.service';
import { userController } from './user/user.controller';
import { PrismaService } from './prisma/prisma.service';
import { prismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './movie/movie.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
const config= new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    authModule,
    JwtModule.register({
      secret:config.get<string>('JWT_SECRET'),
      signOptions:{
        expiresIn:'15m'
      }
    }),
    BookmarkModule,
    UserModule,
    BookmarkModule,
    prismaModule,
    MovieModule,
  ],
  providers: [
    AuthService,
    bookmarkService,
    userService,
    PrismaService,
  ],
  controllers: [
    AuthController,
    bookmarkController,
    userController,
  ],
})
export class AppModule {}
