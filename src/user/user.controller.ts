import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../common/auth/decorator';
import { JwtGuard } from '../common/auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({
    summary: '로그인한 사용자 정보 조회',
  })
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @ApiOperation({
    summary: '로그인한 사용자 정보 수정',
  })
  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
