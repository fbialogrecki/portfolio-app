# Build Stage
FROM node:22.13.1-alpine AS build
WORKDIR /app
COPY package*.json .
COPY tsconfig.json .
COPY yarn.lock .
RUN yarn install
COPY src ./src
COPY public ./public
RUN yarn run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
RUN addgroup -S nginx && adduser -S -G nginx nginx
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chown -R nginx:nginx /var/log/nginx
USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost/ || exit 1

LABEL maintainer="fbialogrecki@gmail.com" \
    version="0.0.1" \
    description="Production image for Filip Białogrecki portfolio-app"

# You can build this script from the root of project with this command, remember to change tag everytime to newer version
# docker build -f ./Docker/Production/Dockerfile -t portfolio-app:production-0.0.1 .