#!/bin/bash

# Performance Testing Script
# Runs Lighthouse audits and bundle analysis

set -e

echo "🚀 Starting Performance Audit..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if required tools are installed
command -v node >/dev/null 2>&1 || { echo -e "${RED}Error: Node.js is required but not installed.${NC}" >&2; exit 1; }
command -v pnpm >/dev/null 2>&1 || { echo -e "${RED}Error: pnpm is required but not installed.${NC}" >&2; exit 1; }

# Check if Lighthouse CLI is installed
if ! command -v lhci &> /dev/null; then
  echo -e "${YELLOW}Installing Lighthouse CI...${NC}"
  pnpm add -g @lhci/cli
fi

# Check if bundle analyzer is available
if ! pnpm list @next/bundle-analyzer >/dev/null 2>&1; then
  echo -e "${YELLOW}Installing bundle analyzer...${NC}"
  pnpm add -D @next/bundle-analyzer
fi

echo -e "${GREEN}✓ Dependencies checked${NC}"

# Build the application
echo -e "\n${YELLOW}Building application...${NC}"
pnpm build

if [ $? -ne 0 ]; then
  echo -e "${RED}Build failed!${NC}"
  exit 1
fi

echo -e "${GREEN}✓ Build successful${NC}"

# Start the server in background
echo -e "\n${YELLOW}Starting server...${NC}"
pnpm start &
SERVER_PID=$!

# Wait for server to be ready
sleep 5

# Run Lighthouse audits
echo -e "\n${YELLOW}Running Lighthouse audits...${NC}"
echo "  - Mobile audit..."
lhci autorun --config=lighthouse.config.js --collect.url=http://localhost:3000

# Run desktop audit (optional)
if [ "$1" == "--full" ]; then
  echo "  - Desktop audit..."
  lighthouse http://localhost:3000 --view --preset=desktop
fi

# Stop the server
echo -e "\n${YELLOW}Stopping server...${NC}"
kill $SERVER_PID 2>/dev/null || true

# Bundle analysis
echo -e "\n${YELLOW}Running bundle analysis...${NC}"
ANALYZE=true pnpm build

echo -e "\n${GREEN}✅ Performance audit complete!${NC}"
echo -e "Check the reports above for detailed results."

