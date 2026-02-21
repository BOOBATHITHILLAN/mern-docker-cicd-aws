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

RUN npm run build
EXPOSE 3000
CMD ["npx","serve","-s","dist"]