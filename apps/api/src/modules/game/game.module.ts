import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';

@Module({
  providers: [GameService, GameResolver],
  exports: [GameService],
})
export class GameModule {}
