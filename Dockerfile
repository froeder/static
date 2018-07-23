FROM nginx:1-alpine

LABEL vendor="Nginx Static" \
      mantainer="Charles Viegas <charles.viegas@codate.com.br>"

COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /opt/app

COPY ./dist /opt/app

EXPOSE 8080
