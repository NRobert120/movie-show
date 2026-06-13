import {
  BadRequestException,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import {
  CreateUserDto,
  refreshTokenDto,
  SignInUpDto,
} from './creat-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,private jwtService:JwtService,private config:ConfigService) {}
  async signUp(data: CreateUserDto) {
    const isCreated =
      await this.prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });
    if (isCreated) {
      throw new BadRequestException();
    }
    data.hash = await bcrypt.hash(data.hash, 12);
   const user=await this.prisma.user.create({
    data
   })
    const payload={sub:user.id,email:user.email}
   const accessToken= await this.jwtService.signAsync(payload,{
     secret:this.config.get<string>('JWT_SECRET'),
     expiresIn:'15m'
   })

   const refreshToken= await this.jwtService.signAsync(payload,{
    secret:this.config.get<string>('JWT_SECRETE'),
    expiresIn:'7d'
   })
  
    return {success:true,accessToken,refreshToken}
  }





  async signIn(body: SignInUpDto){
    const user =
      await this.prisma.user.findUnique({
        where: { email: body.email },
      });
    if (!user) {
      throw new UnauthorizedException(
        'invalid creditials',
      );
    }
    const validatePassword = await bcrypt.compare(
      body.hash,
      user.hash,
    );
    if (!validatePassword) {
      throw new UnauthorizedException(
        'invalid creditionals',
      );
    }
    const jwtPayload={sub:user.id,email:user.email}

   const accessToken= await this.jwtService.signAsync(jwtPayload)
    return accessToken;
  }

  async refreshToken(dto:refreshTokenDto){
    

  }

}
