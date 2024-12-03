package com.backendvocales.basedatos;

import com.backendvocales.entidad.Vocales;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class TablaVocales extends BaseDatos {
    public TablaVocales() {
    }

    @Override
    protected void crearQuery(String query) {
        super.crarConexion(query);
    }

    // Cargar Analisis
    public void cargarAnalisis(Vocales vocales) {
        crearQuery("INSERT INTO analisis (texto, val_a, val_e, val_i, val_o, val_u) VALUES (?, ?, ?, ?, ?, ?)");
        try {
            super.getSentencia().setString(1, vocales.getTexto());
            super.getSentencia().setInt(2, vocales.getData().get(0));
            super.getSentencia().setInt(3, vocales.getData().get(1));
            super.getSentencia().setInt(4, vocales.getData().get(2));
            super.getSentencia().setInt(5, vocales.getData().get(3));
            super.getSentencia().setInt(6, vocales.getData().get(4));
            super.getSentencia().executeUpdate();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Obtener lista de analisis
    public List<Vocales> obtenerListaVocales() {
        List<Vocales> lista = new ArrayList<>();
        crearQuery("SELECT * FROM analisis");
        try (ResultSet rs = super.getSentencia().executeQuery()) {
            while (rs.next()) {
                lista.add(new Vocales(rs.getInt(1), rs.getString(2),
                        List.of(rs.getInt(3), rs.getInt(4), rs.getInt(5),
                                rs.getInt(6), rs.getInt(7))));
            }
        } catch (Exception e) {
            return lista;
        }
        return lista;
    }
}
