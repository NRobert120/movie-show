import { Module } from "@nestjs/common";
import { authModule } from "./auth/auth.module";
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { authService } from "./auth/auth.service";
import { authController } from "./auth/auth.controller";
import { bookmarkService } from "./bookmark/bookmark.service";
import { bookmarkController } from "./bookmark/bookmark.controller";
import { userService } from "./user/user.service";
import { userController } from "./user/user.controller";
// import { prismaModule } from "./prisma/prisma.module";
import { PrismaService } from "./prisma/prisma.service";
import { prismaModule } from "./prisma/prisma.module";

@Module({
  imports:[authModule, BookmarkModule, UserModule,BookmarkModule],
  providers:[authService,bookmarkService,userService,PrismaService],
  controllers:[authController,bookmarkController,userController]
})
export class AppModule {}
