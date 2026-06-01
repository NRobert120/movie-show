import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { ProfilesController } from './profile/profiles.controller';
import { ProfileService } from './profile/profile.service';

@Module({
  imports: [ProfileModule],
  controllers: [AppController, ProfilesController],
  providers: [AppService,ProfileService],
})
export class AppModule {}
