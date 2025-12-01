import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { TopupService } from './topup.service';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { PaymentMethod } from '@prisma/client';

@Resolver('Topup')
export class TopupResolver {
  constructor(private topupService: TopupService) {}

  @Mutation(() => String)
  @UseGuards(GqlAuthGuard)
  async createTopup(
    @Args('userId') userId: string,
    @Args('gameId') gameId: string,
    @Args('priceOptionId') priceOptionId: string,
    @Args('gameAccountId') gameAccountId: string,
    @Args('paymentMethod') paymentMethod: PaymentMethod,
    @Args('gameServer', { nullable: true }) gameServer?: string,
  ) {
    return this.topupService.createTopup({
      userId,
      gameId,
      priceOptionId,
      gameAccountId,
      gameServer,
      paymentMethod,
    });
  }

  @Query(() => String)
  async topup(@Args('id') id: string) {
    return this.topupService.getTopupById(id);
  }

  @Query(() => [String])
  @UseGuards(GqlAuthGuard)
  async userTopups(
    @Args('userId') userId: string,
    @Args('limit', { nullable: true }) limit?: number,
  ) {
    return this.topupService.getUserTopups(userId, limit);
  }
}
