import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Group } from 'src/group/entities/group.entity';
import { GroupService } from 'src/group/group.service';

@Injectable()
export class AuthService {
  constructor(
    private groupService: GroupService,
    private jwtService: JwtService,
  ) {}

  async validateGroup(token: string): Promise<Group> {
    const group = await this.groupService.findOne(token);
    if (group) {
      return group;
    }

    return null;
  }

  async login(group: Group) {
    return { accessToken: this.jwtService.sign(group) };
  }
}
