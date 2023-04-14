import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { generateHash } from 'src/common/utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(dto: User) {
    const newUser: User = this.userRepository.create(dto);
    newUser.password = generateHash(newUser.password);

    return this.userRepository.save(newUser);
  }
}
