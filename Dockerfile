FROM nginx:1-alpine

LABEL vendor="Gateway (Nginx)" \
      mantainer="Charles Viegas <charles.viegas@codate.com.br>"

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
