# 🚀 NovaTopup Platform

**Revolutionary Gaming Topup Platform** dengan Cyberpunk UI, Real-time WebSocket, AI Recommendations &amp; AR Preview

## 🎯 Features Unggulan

### ✨ User Experience Premium
- **Cyberpunk Neon Design** - Glassmorphism cards dengan neon glow effects
- **3D Game Showcase** - Interactive WebGL hero models
- **Real-time Topup** - WebSocket konfirmasi &lt;5 detik
- **AR Preview** - Lihat diamond/skin di virtual space
- **AI Recommendations** - Smart game suggestions berbasis ML

### 💻 Tech Stack Enterprise

**Frontend**
- Next.js 14 App Router
- TypeScript 5.6+
- Tailwind CSS + Shadcn UI
- GSAP + Framer Motion
- Three.js (WebGL)
- React Query + Zustand

**Backend**
- NestJS + GraphQL
- Socket.io (WebSocket)
- Prisma ORM
- PostgreSQL + Redis
- Bull Queue

**Infrastructure**
- Turborepo Monorepo
- Docker + Docker Compose
- GitHub Actions CI/CD
- Vercel (Frontend) + AWS ECS (Backend)

## 🛠️ Quick Start

### Prerequisites
```bash
node &gt;=20.0.0
pnpm &gt;=9.0.0
docker &amp; docker-compose
```

### Installation
```bash
# Clone repository
git clone https://github.com/steavengalang/novatopup-platform.git
cd novatopup-platform

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env

# Start database
docker-compose up -d

# Run migrations
pnpm --filter @novatopup/api prisma:migrate

# Start development
pnpm dev
```

### Access Points
- **Web App**: http://localhost:3000
- **API**: http://localhost:4000/graphql
- **API Docs**: http://localhost:4000/api

## 📁 Monorepo Structure

```
novatopup-platform/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # NestJS backend
├── packages/
│   ├── ui/           # Shared components
│   ├── tsconfig/     # TypeScript configs
│   └── eslint-config/ # Linting rules
└── docker-compose.yml
```

## 📦 Packages

- `@novatopup/web` - Next.js application
- `@novatopup/api` - NestJS GraphQL API
- `@novatopup/ui` - Shared component library
- `@novatopup/tsconfig` - Shared TypeScript configs
- `@novatopup/eslint-config` - ESLint configurations

## 📚 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Component Library](./docs/COMPONENTS.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🚀 Deployment

### Production Build
```bash
pnpm build
```

### Docker Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Coverage
pnpm test:cov
```

## 🔒 Security

- 2FA Authentication
- Blockchain Transaction Verification
- Biometric Login (WebAuthn)
- Rate Limiting &amp; DDoS Protection

## 📈 Performance

- Lighthouse Score: 95+
- FCP: &lt;1.2s
- LCP: &lt;2.0s
- CLS: &lt;0.1

## 👥 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📝 License

MIT License - see [LICENSE](./LICENSE)

---

Built with ❤️ by NovaTopup Team
