# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Dependency တွေကို အရင်ကူးပြီး install လုပ်ပါ (Caching အတွက်)
COPY package*.json ./
RUN npm install

# Application code အားလုံးကို ကူးပါ
COPY . .

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# လုံခြုံရေးအတွက် root user အစား 'node' user ကို သုံးပါ
ENV NODE_ENV=production

# လိုအပ်တဲ့ file တွေကို builder ကနေ ပြန်ကူးပါ
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .

# Permissions သတ်မှတ်ပေးပါ
RUN chown -R node:node /app

# User ပြောင်းပါ
USER node

EXPOSE 5000

# Production မှာ npm run dev အစား node နဲ့ တိုက်ရိုက် run ပါ
CMD ["npm", "run", "dev"]