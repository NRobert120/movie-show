import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { ProfilesController } from './profiles/profiles.controller';

@Module({
  imports: [ProfileModule],
  controllers: [AppController, ProfilesController],
  providers: [AppService],
})
export class AppModule {}
