
import { Controller,Get,Query,Param,Post,Put, Body,Delete,HttpCode,HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import UpdateprofileDto from 'src/profile/dto/updata-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfilesController{
  constructor(private ProfileService:ProfileService){}
    @Get('all')
      getAll():{}{
        return this.ProfileService.findAll()
      }
  
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
    @Put(':id')
      update(@Param('id') id:string,@Body() Body:UpdateprofileDto):{}{
        return {
            id:id,
            name:Body.name,
            description:Body.description
        }
      }
    @Delete(':id')
     @HttpCode(HttpStatus.OK)
      delete(@Param('id') id:string):string{
        return `profile with id ${id} is deleted`;
      }

    

} 
