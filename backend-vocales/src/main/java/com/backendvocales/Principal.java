package com.backendvocales;

import com.backendvocales.controlador.ControladorVocales;
import io.vertx.core.AbstractVerticle;
import io.vertx.ext.web.Router;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpMethod;
import io.vertx.ext.web.handler.CorsHandler;

public class Principal extends AbstractVerticle {
    public Principal() {
    }

    @Override
    public void start() throws Exception {
        Router ruta = Router.router(vertx);

        ruta.route().handler(CorsHandler.create()
                .allowedMethod(HttpMethod.PUT)
                .allowedHeader("content-type")
                .allowedHeader("access-control-allow-credentials")
                .allowedHeader("Access-Control-Allow-Headers")
                .allowedHeader("Authorization")
                .allowedHeader("Access-Control-Allow-Origin")
                .allowCredentials(true));

        ruta.post("/api/analizar_vocales").handler(new ControladorVocales());
        ruta.get("/api/obtener_lista_vocales").handler(new ControladorVocales());

        vertx.createHttpServer().requestHandler(ruta).listen(7000);
    }

    public static void main(String[] args) {    
        Principal principal = new Principal();
        Vertx.vertx().deployVerticle(principal);
    }
}
