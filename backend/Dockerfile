FROM node:18

#folder name
WORKDIR /app

#both file with some common name
COPY ./package*.json /app


#or
#COPY ./package.json ./
#COPY ./package-lock.json ./

#or
#COPY ./package.json /app
#COPY ./package-lock.json /app

#install all dependency
RUN npm install

#copy all folders from backend
COPY . .

#our app runs in port 5000 so needs to expose
EXPOSE 5000

#Needs to run application commands
CMD ["npm","run","prod"]

