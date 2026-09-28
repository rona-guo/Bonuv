#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

cd "${COZE_WORKSPACE_PATH}"

# Vercel 已在构建前完成依赖安装（含 devDependencies），
# 此处不能再执行 pnpm install（NODE_ENV=production 会移除 TS 等开发依赖）。
# Vercel 也不需要本地自定义 server 的 tsup 打包。
if [ -n "${VERCEL:-}" ] || [ -n "${VERCEL_ENV:-}" ]; then
  echo "Vercel environment detected. Building the Next.js project directly..."
  pnpm next build
  echo "Vercel build completed successfully!"
  exit 0
fi

echo "Installing dependencies..."
pnpm install --prefer-frozen-lockfile --prefer-offline --loglevel debug --reporter=append-only

echo "Building the Next.js project..."
pnpm next build

echo "Bundling server with tsup..."
pnpm tsup src/server.ts --format cjs --platform node --target node20 --outDir dist --no-splitting --no-minify

echo "Build completed successfully!"
