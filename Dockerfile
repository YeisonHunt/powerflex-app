# Dockerfile
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Copy the .env file
COPY .env.example .

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app with a delay (this is a good trick, otherwise db sometimes is not ready just before initailization)
CMD ["sh", "-c", "sleep 3 && npm start"] 