import {  ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
 export class userService{
    constructor(private Prisma:PrismaService){}
    test(){
        return 'user service is running';
    }
   async getAll(){
    try{
        const users=await this.Prisma.user.findMany()
    if(users.length==0){
        return 'no user found in db'
    }
    return users;    
    }catch(error){
        throw new InternalServerErrorException()
    }
    }
 } 