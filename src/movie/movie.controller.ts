import { Controller,Get, Post,Put } from '@nestjs/common';


@Controller('movie')
export class MovieController {
    @Get()
     getAllMovie(){
        return "get all movie";
     }
    @Get()
     getOneMovie(){
        return "see one move by id"
     }
    @Post()
        addMovie(){
            return "add movie"
        }
    @Put()
     updateMovie(){
        return  "update movies"
     }

}

