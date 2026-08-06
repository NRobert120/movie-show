import { Controller, Get } from "@nestjs/common";

@Controller()
export class appController{

    @Get()
     response(){
        return{
            success:true,
            status:200,
            message:"app is running"
        }
     }

}