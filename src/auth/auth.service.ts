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
  SignInUpDto,
} from './creat-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,private jwtService:JwtService) {}
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
    return this.prisma.user.create({
      data,
    });
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
}
