import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GameService } from './game.service';

@Resolver('Game')
export class GameResolver {
  constructor(private gameService: GameService) {}

  @Query(() => [String])
  async games(
    @Args('category', { nullable: true }) category?: string,
    @Args('isPopular', { nullable: true }) isPopular?: boolean,
  ) {
    return this.gameService.getAllGames({ category, isPopular });
  }

  @Query(() => String)
  async game(@Args('slug') slug: string) {
    return this.gameService.getGameBySlug(slug);
  }

  @Mutation(() => String)
  async seedGames() {
    return this.gameService.seedGames();
  }
}
