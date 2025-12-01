import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { TopupStatus, PaymentMethod } from '@prisma/client';

@Injectable()
export class TopupService {
  constructor(private prisma: PrismaService) {}

  async createTopup(data: {
    userId: string;
    gameId: string;
    priceOptionId: string;
    gameAccountId: string;
    gameServer?: string;
    paymentMethod: PaymentMethod;
  }) {
    const priceOption = await this.prisma.priceOption.findUnique({
      where: { id: data.priceOptionId },
    });

    if (!priceOption) {
      throw new Error('Price option not found');
    }

    const topup = await this.prisma.topupTransaction.create({
      data: {
        userId: data.userId,
        gameId: data.gameId,
        priceOptionId: data.priceOptionId,
        gameAccountId: data.gameAccountId,
        gameServer: data.gameServer,
        amount: priceOption.amount,
        price: priceOption.finalPrice,
        paymentMethod: data.paymentMethod,
        status: TopupStatus.PENDING,
      },
      include: {
        game: true,
        priceOption: true,
      },
    });

    return topup;
  }

  async getTopupById(id: string) {
    return this.prisma.topupTransaction.findUnique({
      where: { id },
      include: {
        game: true,
        priceOption: true,
        user: { select: { id: true, email: true, username: true } },
      },
    });
  }

  async getUserTopups(userId: string, limit = 10) {
    return this.prisma.topupTransaction.findMany({
      where: { userId },
      include: {
        game: true,
        priceOption: true,
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  async updateTopupStatus(id: string, status: TopupStatus, failedReason?: string) {
    return this.prisma.topupTransaction.update({
      where: { id },
      data: {
        status,
        ...(status === TopupStatus.SUCCESS && { completedAt: new Date() }),
        ...(failedReason && { failedReason }),
      },
    });
  }
}
