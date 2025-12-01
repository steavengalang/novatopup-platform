# 💻 Setup NovaTopup di Windows

Panduan lengkap setup project NovaTopup di Windows CMD/PowerShell.

---

## 📦 Prerequisites

### 1. Install Node.js

1. Download dari: https://nodejs.org/en/download
2. Pilih **Windows Installer (.msi)** versi **LTS 20.x**
3. Jalankan installer, klik Next sampai selesai
4. Restart Command Prompt
5. Verify:

```cmd
node --version
npm --version
```

### 2. Install pnpm

```cmd
npm install -g pnpm
pnpm --version
```

### 3. Install Git (jika belum)

Download dari: https://git-scm.com/download/win

### 4. Install Docker Desktop (untuk database)

Download dari: https://www.docker.com/products/docker-desktop/

---

## 🚀 Setup Project

### Step 1: Clone Repository

```cmd
cd C:\
git clone https://github.com/steavengalang/novatopup-platform.git
cd novatopup-platform
```

### Step 2: Install Dependencies

```cmd
pnpm install
```

**Catatan:** Proses ini bisa 3-5 menit tergantung internet.

### Step 3: Setup Environment Variables

```cmd
REM Copy file .env.example
copy apps\web\.env.example apps\web\.env.local
copy apps\api\.env.example apps\api\.env

REM Edit file .env (pakai Notepad)
notepad apps\api\.env
```

**Isi `apps\api\.env`:**
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/novatopup?schema=public"
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your-super-secret-key-change-this
PORT=4000
CORS_ORIGIN=http://localhost:3000
```

### Step 4: Start Database (Docker)

```cmd
REM Pastikan Docker Desktop running
docker-compose up -d

REM Check status
docker ps
```

**Expected output:**
```
CONTAINER ID   IMAGE                  STATUS
xxx            postgres:16-alpine     Up 10 seconds
xxx            redis:7-alpine         Up 10 seconds
```

### Step 5: Setup Database Schema

```cmd
cd apps\api
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm prisma db seed
cd ..\..
```

### Step 6: Run Development Server

```cmd
pnpm dev
```

**Expected output:**
```
🚀 NovaTopup API running on: http://localhost:4000
📊 GraphQL Playground: http://localhost:4000/graphql
>>> @novatopup/web:dev: ready - started server on http://localhost:3000
```

---

## ✅ Verify Installation

1. **Frontend**: Buka http://localhost:3000
2. **GraphQL**: Buka http://localhost:4000/graphql
3. **Test Query** (di GraphQL Playground):

```graphql
query {
  games {
    id
    name
    category
  }
}
```

---

## 🐛 Troubleshooting

### Error: "pnpm not recognized"

```cmd
REM Restart CMD atau:
refreshenv

REM Atau install ulang:
npm uninstall -g pnpm
npm install -g pnpm
```

### Error: "Cannot connect to database"

```cmd
REM Check Docker status:
docker ps

REM Restart containers:
docker-compose restart

REM Check logs:
docker-compose logs postgres
```

### Error: "Port 3000 already in use"

```cmd
REM Find process using port 3000:
netstat -ano | findstr :3000

REM Kill process (replace PID):
taskkill /PID 1234 /F
```

### Error: Prisma migration failed

```cmd
cd apps\api

REM Reset database:
pnpm prisma migrate reset

REM Run migration again:
pnpm prisma migrate dev

cd ..\..
```

---

## 📝 Commands Cheat Sheet

```cmd
REM Development
pnpm dev              # Start all services
pnpm build            # Build for production
pnpm lint             # Run linter

REM Database
cd apps\api
pnpm prisma studio    # Open Prisma Studio (database GUI)
pnpm prisma migrate dev
pnpm prisma generate

REM Docker
docker-compose up -d          # Start containers
docker-compose down           # Stop containers
docker-compose logs -f        # View logs
docker-compose restart        # Restart all
```

---

## 🎯 Next Steps

Setelah berhasil running:

1. Explore GraphQL Playground: http://localhost:4000/graphql
2. Cek frontend: http://localhost:3000
3. Baca dokumentasi API di `/docs`
4. Mulai develop fitur baru!

---

**Butuh bantuan?** Buka issue di GitHub atau contact team.
