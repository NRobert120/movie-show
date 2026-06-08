import { Module } from "@nestjs/common";
import { authModule } from "./auth/auth.module";
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { AuthService } from "./auth/auth.service";
import { AuthController } from "./auth/auth.controller";
import { bookmarkService } from "./bookmark/bookmark.service";
import { bookmarkController } from "./bookmark/bookmark.controller";
import { userService } from "./user/user.service";
import { userController } from "./user/user.controller";
// import { prismaModule } from "./prisma/prisma.module";
import { PrismaService } from "./prisma/prisma.service";
import { prismaModule } from "./prisma/prisma.module";
import { Prisma } from "generated/prisma/browser";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports:[
    ConfigModule.forRoot({isGlobal:true}),authModule, BookmarkModule, UserModule,BookmarkModule,prismaModule],
  providers:[AuthService,bookmarkService,userService,PrismaService],
  controllers:[AuthController,bookmarkController,userController]
})
export class AppModule {}
