import {
  Controller,
  Post,
  Get,
} from '@nestjs/common';
import { bookmarkService } from './bookmark.service';

@Controller('bookmark')
export class bookmarkController {
  constructor(
    private bookmarkService: bookmarkService,
  ) {}
  @Get('health')
  getHealth() {
    return this.bookmarkService.test();
  }
}
