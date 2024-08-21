FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"
RUN corepack enable

WORKDIR /usr/diegocrivelaro

COPY package.json pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

COPY apps/frontend/package.json ./apps/frontend/package.json
COPY apps/backend/package.json ./apps/backend/package.json
COPY packages/env/package.json ./packages/env/package.json

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .

RUN pnpm run -r build
