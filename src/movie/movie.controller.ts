import { Controller,Get, Post,Put, UseGuards } from '@nestjs/common';
import { jwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('movie')
@UseGuards(jwtAuthGuard)
export class MovieController {
    @Get()
     getAllMovie(){
        return "get all movie";
     }
    @Get()
     getOneMovie(){
        return "see one move by id"
     }
    @Put()
     updateMovie(){
        return  "update movies"
     }

}



