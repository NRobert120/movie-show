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

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
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
  async signIn(body: SignInUpDto) {
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
    return user;
  }
}
