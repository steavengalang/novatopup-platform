# 🚀 NovaTopup Platform

**Revolutionary Gaming Topup Platform** dengan Cyberpunk UI, Real-time WebSocket, AI Recommendations &amp; AR Preview

[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10-red.svg)](https://nestjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 🎯 Features Unggulan

### ✨ User Experience Premium
- **Cyberpunk Neon Design** - Glassmorphism cards dengan neon glow effects
- **3D Game Showcase** - Interactive WebGL hero models (Three.js)
- **Real-time Topup** - WebSocket konfirmasi &lt;5 detik
- **AR Preview** - Lihat diamond/skin di virtual space (WebXR API)
- **AI Recommendations** - Smart game suggestions berbasis ML
- **Loyalty System** - Cashback 2% + redeem skin gratis

### 💻 Tech Stack Enterprise

**Frontend**
- Next.js 15 App Router + TypeScript 5.6
- Tailwind CSS + Shadcn UI Components
- GSAP 3.12 + Framer Motion 11 (smooth animations)
- Three.js (WebGL 3D models)
- React Query + Zustand (state management)
- Socket.io Client (real-time)

**Backend**
- NestJS 10 + GraphQL API (Apollo Server)
- Socket.io (WebSocket gateway)
- Prisma ORM + PostgreSQL 16
- Redis 7 (caching layer)
- Bull Queue (async jobs)
- JWT + Passport (authentication)

**Infrastructure**
- Turborepo Monorepo
- Docker + Docker Compose
- GitHub Actions CI/CD
- Vercel (Frontend) + AWS ECS (Backend)

---

## 🛠️ Quick Start

### 💻 Windows Setup

**Lihat panduan lengkap:** [SETUP-WINDOWS.md](./SETUP-WINDOWS.md)

```cmd
REM 1. Install Node.js 20+ dari https://nodejs.org
REM 2. Install pnpm
npm install -g pnpm

REM 3. Clone repo
git clone https://github.com/steavengalang/novatopup-platform.git
cd novatopup-platform

REM 4. Install dependencies
pnpm install

REM 5. Copy environment files
copy apps\web\.env.example apps\web\.env.local
copy apps\api\.env.example apps\api\.env

REM 6. Start database (Docker Desktop required)
docker-compose up -d

REM 7. Setup Prisma
cd apps\api
pnpm prisma generate
pnpm prisma migrate dev
cd ..\..

REM 8. Run development
pnpm dev
```

### 🐧 Linux/Mac Setup

```bash
# Prerequisites
node &gt;=20.0.0
pnpm &gt;=9.0.0
docker &amp; docker-compose

# Clone &amp; Install
git clone https://github.com/steavengalang/novatopup-platform.git
cd novatopup-platform
pnpm install

# Environment setup
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Start database
docker-compose up -d

# Prisma setup
cd apps/api
pnpm prisma generate
pnpm prisma migrate dev
cd ../..

# Start development
pnpm dev
```

### Access Points
- **Web App**: http://localhost:3000
- **GraphQL Playground**: http://localhost:4000/graphql
- **Prisma Studio**: `cd apps/api &amp;&amp; pnpm prisma studio`

---

## 📁 Monorepo Structure

```
novatopup-platform/
├── apps/
│   ├── web/                    # Next.js 15 frontend
│   │   ├── src/
│   │   │   ├── app/             # App Router pages
│   │   │   ├── components/      # React components
│   │   │   ├── lib/             # Utils, hooks, animations
│   │   │   └── styles/          # Global CSS
│   │   ├── public/              # Static assets
│   │   └── package.json
│   │
│   └── api/                    # NestJS backend
│       ├── src/
│       │   ├── modules/
│       │   │   ├── auth/         # Authentication
│       │   │   ├── game/         # Game catalog
│       │   │   ├── topup/        # Topup transactions
│       │   │   ├── payment/      # Payment gateway
│       │   │   └── websocket/    # Real-time gateway
│       │   ├── prisma/          # Prisma client
│       │   └── main.ts
│       ├── prisma/
│       │   └── schema.prisma    # Database schema
│       └── package.json
│
├── packages/
│   ├── ui/                     # Shared UI components
│   │   ├── src/
│   │   │   ├── components/     # Button, Card, Input, etc
│   │   │   └── lib/            # Utilities
│   │   └── package.json
│   │
│   ├── tsconfig/               # Shared TypeScript configs
│   └── eslint-config/          # Shared ESLint rules
│
├── docker-compose.yml          # PostgreSQL + Redis
├── turbo.json                  # Turborepo config
├── package.json                # Root package
└── SETUP-WINDOWS.md            # Windows setup guide
```

---

## 📦 Available Scripts

```bash
# Development
pnpm dev              # Start all apps in watch mode
pnpm build            # Build all apps for production
pnpm start            # Start production build
pnpm lint             # Lint all packages
pnpm test             # Run all tests
pnpm clean            # Clean all build artifacts

# Database (from apps/api)
pnpm prisma studio    # Open Prisma Studio GUI
pnpm prisma migrate dev
pnpm prisma generate

# Docker
docker-compose up -d          # Start containers
docker-compose down           # Stop containers
docker-compose logs -f api    # View API logs
docker-compose restart        # Restart all services
```

---

## 📚 API Documentation

### GraphQL Queries

```graphql
# Get all games
query {
  games {
    id
    name
    slug
    category
    thumbnail
    rating
    priceOptions {
      id
      name
      amount
      price
      finalPrice
    }
  }
}

# Get game by slug
query {
  game(slug: "mobile-legends") {
    id
    name
    description
    priceOptions {
      name
      finalPrice
    }
  }
}

# User topup history
query {
  userTopups(userId: "user_id", limit: 10) {
    id
    game { name }
    amount
    status
    createdAt
  }
}
```

### GraphQL Mutations

```graphql
# Register user
mutation {
  register(
    email: "user@example.com"
    password: "password123"
    username: "gamer01"
  )
}

# Login
mutation {
  login(
    email: "user@example.com"
    password: "password123"
  )
}

# Create topup
mutation {
  createTopup(
    userId: "user_id"
    gameId: "game_id"
    priceOptionId: "price_id"
    gameAccountId: "123456789"
    paymentMethod: GOPAY
  ) {
    id
    status
  }
}
```

### WebSocket Events

```typescript
// Client: Initiate topup
socket.emit('initiate_topup', {
  userId: 'user_id',
  gameId: 'game_id',
  priceOptionId: 'price_id',
  gameAccountId: '123456789',
  paymentMethod: 'GOPAY'
});

// Server: Status updates
socket.on('topup_status', (data) =&gt; {
  console.log(data);
  // { transactionId, status: 'pending' | 'processing' | 'success', message }
});
```

---

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests (coming soon)
pnpm test:e2e

# Coverage
pnpm test:cov
```

---

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/web
vercel --prod
```

### Backend (Docker)

```bash
# Build image
docker build -t novatopup-api ./apps/api

# Run container
docker run -p 4000:4000 \
  -e DATABASE_URL="your_db_url" \
  novatopup-api
```

---

## 🐛 Troubleshooting

### Windows Issues

Lihat [SETUP-WINDOWS.md](./SETUP-WINDOWS.md) untuk troubleshooting lengkap.

### Common Issues

**Port already in use:**
```bash
# Find process
netstat -ano | findstr :3000  # Windows
lsof -ti:3000                 # Mac/Linux

# Kill process
taskkill /PID &lt;PID&gt; /F        # Windows
kill -9 &lt;PID&gt;                 # Mac/Linux
```

**Database connection failed:**
```bash
# Check Docker status
docker ps

# Restart containers
docker-compose restart

# View logs
docker-compose logs postgres
```

**Prisma errors:**
```bash
cd apps/api
pnpm prisma generate    # Regenerate client
pnpm prisma migrate reset  # Reset database
```

---

## 🔒 Security Features

- ✅ JWT Authentication with refresh tokens
- ✅ 2FA Support (placeholder)
- ✅ Blockchain transaction verification (planned)
- ✅ Rate limiting &amp; DDoS protection (planned)
- ✅ Input validation (class-validator)
- ✅ CORS configuration

---

## 📈 Performance

**Target Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

**Optimizations:**
- Next.js Image component (WebP/AVIF)
- Code splitting &amp; lazy loading
- Redis caching (5min TTL)
- CDN for static assets
- GSAP animations (GPU-accelerated)

---

## 👥 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) (coming soon)

---

## 📝 Roadmap

- [x] Monorepo setup with Turborepo
- [x] Basic authentication (JWT)
- [x] Game catalog with CRUD
- [x] Topup transaction flow
- [x] WebSocket real-time updates
- [ ] Payment gateway integration (Midtrans)
- [ ] AI recommendation engine
- [ ] 3D game models (Three.js)
- [ ] AR preview (WebXR)
- [ ] Admin dashboard
- [ ] Mobile app (React Native)

---

## 📝 License

MIT License - see [LICENSE](./LICENSE) for details

---

## 👤 Author

Built with ❤️ by NovaTopup Team

- **GitHub**: [@steavengalang](https://github.com/steavengalang)
- **Repository**: [novatopup-platform](https://github.com/steavengalang/novatopup-platform)

---

## 🚀 Getting Help

- 🐛 **Issues**: [GitHub Issues](https://github.com/steavengalang/novatopup-platform/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/steavengalang/novatopup-platform/discussions)
- 📧 **Email**: support@novatopup.com (placeholder)

---

**⭐ Star this repo if you find it useful!**
