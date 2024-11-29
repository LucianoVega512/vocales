FROM alpine

RUN apk add openjdk11

WORKDIR /home

COPY /target/backend-vocales.jar .

EXPOSE 7000

ENTRYPOINT ["java", "-jar", "backend-vocales.jar"]