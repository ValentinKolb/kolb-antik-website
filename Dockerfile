FROM oven/bun:1 AS base
WORKDIR /app

# Install all dependencies (dev + prod needed for build)
FROM base AS install
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build
FROM base AS build
COPY --from=install /app/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

# Production
FROM base AS release
WORKDIR /app

# Install production dependencies only
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# Copy compiled server + island chunks
COPY --from=build /app/dist ./dist

# Copy static assets (CSS, images, favicon, logo)
COPY --from=build /app/public ./public

USER bun
EXPOSE 3000/tcp
CMD ["bun", "dist/server.js"]
