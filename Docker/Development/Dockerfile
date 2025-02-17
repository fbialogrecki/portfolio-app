# Use the latest LTS version of Node.js
FROM node:22.13.1-bullseye

#RUN npm install --global yarn
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json .
 
# Install dependencies
RUN yarn install
 
# Copy the rest of your application files and chage to this directory
RUN mkdir src
COPY src /app/src

RUN cd src
# Expose the port your app runs on
EXPOSE 3000
 
# Define the command to run your app
CMD ["yarn", "start"]

#You can build this script from the root of project with this command, remember to change tag everytime to newer version
# docker build -f ./Docker/Development/Dockerfile -t portfolio-app:development-0.0.1 .