import { HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt"
import { CreateUserDto, SignInUpDto } from "./creat-user.dto";
@Injectable()
export class AuthService{
    constructor(private prisma:PrismaService){}
    async signUp(data:CreateUserDto){
      data.hash=await bcrypt.hash(data.hash,12)
     return this.prisma.user.create({
        data
     })
  }
  async signIn(body:SignInUpDto){
   try{
     const user=await this.prisma.user.findFirst({
       where:{email:body.email}
     })
     const macth=await bcrypt.compare(user?.hash,body.hash)
     return user
   }catch(error){
     return 'not found'

  }
  
}







}
