import { Controller,Get } from "@nestjs/common";
import { userService } from "./user.service";

@Controller('users')
export class userController{
constructor(private readonly userService:userService){}
@Get('health')
  getHealth(){
   return this.userService.test();
  }
  
  
@Get('all')
    getAll(){
    return   this.userService.getAll()
    }

  
}
 
  
 
  