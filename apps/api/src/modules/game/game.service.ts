import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async getAllGames(filter?: { category?: string; isPopular?: boolean }) {
    return this.prisma.game.findMany({
      where: {
        isActive: true,
        ...(filter?.category && { category: filter.category }),
        ...(filter?.isPopular !== undefined && { isPopular: filter.isPopular }),
      },
      include: {
        priceOptions: {
          where: { isActive: true },
          orderBy: { price: 'asc' },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async getGameBySlug(slug: string) {
    return this.prisma.game.findUnique({
      where: { slug },
      include: {
        priceOptions: {
          where: { isActive: true },
          orderBy: { price: 'asc' },
        },
      },
    });
  }

  async seedGames() {
    const games = [
      {
        slug: 'mobile-legends',
        name: 'Mobile Legends',
        category: 'MOBA',
        thumbnail: 'https://via.placeholder.com/400x600/0A0E27/00F5FF?text=ML',
        isPopular: true,
        rating: 4.5,
      },
      {
        slug: 'free-fire',
        name: 'Free Fire',
        category: 'Battle Royale',
        thumbnail: 'https://via.placeholder.com/400x600/0A0E27/FF006E?text=FF',
        isPopular: true,
        rating: 4.3,
      },
      {
        slug: 'genshin-impact',
        name: 'Genshin Impact',
        category: 'RPG',
        thumbnail: 'https://via.placeholder.com/400x600/0A0E27/39FF14?text=GI',
        isPopular: false,
        rating: 4.7,
      },
      {
        slug: 'pubg-mobile',
        name: 'PUBG Mobile',
        category: 'Battle Royale',
        thumbnail: 'https://via.placeholder.com/400x600/0A0E27/00F5FF?text=PUBG',
        isPopular: true,
        rating: 4.4,
      },
    ];

    for (const game of games) {
      await this.prisma.game.upsert({
        where: { slug: game.slug },
        update: {},
        create: {
          ...game,
          priceOptions: {
            create: [
              { name: '100 Diamonds', amount: 100, price: 25000, discount: 0, finalPrice: 25000 },
              { name: '500 Diamonds', amount: 500, price: 120000, discount: 5, finalPrice: 114000 },
              { name: '1000 Diamonds', amount: 1000, price: 230000, discount: 10, finalPrice: 207000 },
            ],
          },
        },
      });
    }

    return { message: 'Games seeded successfully' };
  }
}
