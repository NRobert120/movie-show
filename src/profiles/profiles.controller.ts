import { Put } from '@nestjs/common';
import { Controller,Get,Query,Param,Post, Body,Patch,Delete,HttpCode,HttpStatus } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import UpdateprofileDto from 'src/profile/dto/updata-profile.dto';

@Controller('profiles')
export class ProfilesController{
    @Get()
     getProfiles(@Query('location') location: string):{}[]{
        return [{message:'you location is '+location}]
     }
    @Get(':id')
     profileById(@Param('id') id:string):{}{
        return {id}
     }
    @Post()
     create(@Body() body:CreateProfileDto):{}{
        return {name:body.name,description:body.description

        }
     }
    @Patch(':id')
      update(@Param('id') id:string,@Body() Body:UpdateprofileDto):{}{
        return {
            id:id,
            name:Body.name,
            description:Body.description
        }
      }
    @Delete(':id')
      @HttpCode(HttpStatus.NO_CONTENT)
        delete(
            @Param('id') id:string,
        ):string{
       return 'profile with id '+id+'is deleted';        }

    

} 
