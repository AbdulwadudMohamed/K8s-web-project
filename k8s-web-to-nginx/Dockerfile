#base image for custom image
FROM node:alpine

#sets working dir to /app
WORKDIR /app

#expose port 3000
EXPOSE 3000

#copy the json files 
COPY package.json package-lock.json ./

#when the custom image is built, runs command
RUN npm install

#copy all the remaning files from the folder where the dockerfile is, in my case just index.mjs file, which will be copied to the app folder in the image
COPY . ./

#instruction to run when containers start
#need to update base package.json file from scipt test -> "scripts"{ "start": "node index.mjs"} 
CMD ["npm", "start"]

#the docker Build command is run inside the same folder as the dockerfile