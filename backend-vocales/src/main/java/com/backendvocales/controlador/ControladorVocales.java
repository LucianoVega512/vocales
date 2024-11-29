package com.backendvocales.controlador;

import java.nio.ByteBuffer;
import java.util.List;
import java.util.stream.Stream;
import com.backendvocales.basedatos.TablaVocales;
import com.backendvocales.entidad.Vocales;
import io.vertx.core.Handler;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;

public class ControladorVocales implements Handler<RoutingContext> {
    private final TablaVocales tablaVocales;

    public ControladorVocales() {
        this.tablaVocales = new TablaVocales();
    }

    @Override
    public void handle(RoutingContext ctx) {
        String metodo = ctx.request().method().toString();

        switch (metodo) {
            case "GET":
                // Obtener lista de vocales
                List<Vocales> lista = tablaVocales.obtenerListaVocales();

                ctx.response().putHeader("content-type", "application/json")
                        .end(new JsonObject().put("analisis", lista).encodePrettily());
                break;

            // Analisar vocales
            case "POST":
                ctx.request().bodyHandler((bodyHandler) -> {
                    JsonObject body = bodyHandler.toJsonObject();

                    String texto = (String) body.getMap().get("texto");

                    Vocales respuesta = crearVocales(texto);

                    // guardar json en base datos
                    tablaVocales.cargarAnalisis(respuesta);

                    ctx.response().putHeader("content-type", "application/json")
                            .end(new JsonObject().put("analisis", respuesta).encodePrettily());
                });

                break;

            default:
                ctx.response().setStatusCode(404).end();
                break;
        }
    }

    private Vocales crearVocales(String entrada) {
        byte[] arregloBytes = entrada.getBytes();

        int va = obtenerCantidadVocal(arregloBytes, 'A');
        int ve = obtenerCantidadVocal(arregloBytes, 'E');
        int vi = obtenerCantidadVocal(arregloBytes, 'I');
        int vo = obtenerCantidadVocal(arregloBytes, 'O');
        int vu = obtenerCantidadVocal(arregloBytes, 'U');

        List<Integer> listaVocales = List.of(va, ve, vi, vo, vu);

        return new Vocales(0, entrada, listaVocales);
    }

    private int obtenerCantidadVocal(byte[] b, char v) {
        ByteBuffer bf = ByteBuffer.wrap(b);

        return (int) Stream.generate(() -> bf.get()).limit(bf.capacity()).map(bt -> (char) bt.byteValue())
                .filter((Character vocal) -> {
                    char carac = Character.toUpperCase(vocal);
                    return Character.compare(carac, v) == 0;
                }).count();
    }
}
