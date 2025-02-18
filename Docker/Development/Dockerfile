# Use the latest LTS version of Node.js
FROM node:22.13.1-bullseye

# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json .
COPY tsconfig.json .
COPY yarn.lock .
 
# Install dependencies
RUN yarn install
 
# Copy the rest of your application files and chage to this directory
COPY src ./src
COPY public ./public

# Expose the port your app runs on
EXPOSE 3000
 
# Define the command to run your app
CMD ["yarn", "start"]

LABEL maintainer="fbialogrecki@gmail.com" \
    version="0.0.1" \
    description="Development image for Filip Białogrecki portfolio-app"

# You can build this script from the root of project with this command, remember to change tag everytime to newer version
# docker build -f ./Docker/Development/Dockerfile -t portfolio-app:development-0.0.1 .