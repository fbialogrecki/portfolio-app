# Build Stage
FROM node:22.13.1-alpine AS build
WORKDIR /app
COPY ../../package*.json ./
RUN npm install --global yarn
RUN yarn install
COPY ../../src .
RUN cd src
RUN yarn run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]