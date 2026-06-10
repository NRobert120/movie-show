import { Injectable } from '@nestjs/common';
import { CreateBookMark } from './create-bookmark.dto';
import { UpdateBookMark } from './create-bookmark.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class bookmarkService {
  constructor(private readonly prisma:PrismaService){}
  test(): string {
    return 'i am working';
  }

 async getAll(){
    return this.prisma.bookMark.findMany();
  }
 async getOneBYId(id:number){
    return await this.prisma.bookMark.findUnique({
      where:{id}
    })

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
