FROM node:12.4.0-alpine as build

WORKDIR /

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

# Build the application
RUN npm run build

FROM nginx:1.17.0-alpine

COPY --from=build /build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
