import { Injectable } from '@nestjs/common';
import { CreateBookMark } from './create-bookmark.dto';
import { UpdateBookMark } from './create-bookmark.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { retry } from 'rxjs';

@Injectable()
export class bookmarkService {
  constructor(private readonly prisma:PrismaService){}
  test(): string {
    return 'i am working';
  }

  async addBookMark(data:CreateBookMark){
    return await this.prisma.bookMark.create({
      data
    }) 
  }

  async updateBookmar(id:number,data:UpdateBookMark){
    return await this.prisma.bookMark.update({
    where:{
      id:1
    },data
    })
  }
}
