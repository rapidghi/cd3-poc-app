# ---- Builder Stage ----
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# ---- Final Stage ----
FROM node:18-alpine
WORKDIR /app
# Copy dependencies from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY src/ ./src
# Run as a non-root user for security
USER node
EXPOSE 3000
CMD ["node", "src/index.js"]