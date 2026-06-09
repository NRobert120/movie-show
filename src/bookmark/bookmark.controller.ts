import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Param,
} from '@nestjs/common';
import { bookmarkService } from './bookmark.service';
import { CreateBookMark, UpdateBookMark } from './create-bookmark.dto';

@Controller('bookmark')
export class bookmarkController {
  constructor(
    private bookmarkService: bookmarkService,
  ) {}
  @Get('health')
  getHealth() {
    return this.bookmarkService.test();
  }

  @Post('addbookmark')
  addbookmark(@Body () body:CreateBookMark){
  return this.bookmarkService.addBookMark(body)
  }
  @Put(':id')
  
   updateBookmark(@Param('id') id:number,body:UpdateBookMark){
    return this.bookmarkService.updateBookmar(id,body)
    

   }
 }

