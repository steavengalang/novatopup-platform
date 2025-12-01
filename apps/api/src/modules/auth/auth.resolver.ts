import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async register(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('username', { nullable: true }) username?: string,
  ) {
    const { token } = await this.authService.register(email, password, username);
    return token;
  }

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const { token } = await this.authService.login(email, password);
    return token;
  }

  @Query(() => String)
  @UseGuards(GqlAuthGuard)
  async me(@Context() context: any) {
    return context.req.user;
  }
}
