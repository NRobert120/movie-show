import { Controller,UsePipes, Get, Param, Post, Put, Body, Delete, HttpCode, HttpStatus,HttpException,ValidationPipe } from '@nestjs/common';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import UpdateprofileDto from './dto/updata-profile.dto'; // Fixed filename typo
import { ProfileService } from './profile.service';


@Controller('profiles')
export class ProfilesController {
  
  constructor(private readonly profileService: ProfileService) {}

  @Get('users')
   getAll(): {} {
    return this.profileService.findAll();
 
  }
    
    

   
  @Get('users/:id')
  getOneByName(@Param('id') id: string){
   
    return this.profileService.findOneById(id); 
  }

  @Post()
 
  create(@Body() body: CreateProfileDto): {} {
    return this.profileService.create(body)
  }

  @Put(':id')
 
  update(@Param('id') id: string, @Body() body: UpdateprofileDto){ 
    return this.profileService.update(id,body)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.profileService.deleteUser(id)
  }
}
