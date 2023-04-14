import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validateHash } from 'src/common/utils';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async login(loginDto: any) {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({
      select: ['email', 'password'],
      where: { email },
    });

    const isValid = await validateHash(password, user.password);
    if (!isValid) return false;

    return true;
  }

  // async register(registerDto: any) {
  //   return null;
  // }
}
