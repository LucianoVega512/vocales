package com.backendvocales.basedatos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public abstract class BaseDatos {
    private final String url;

    private PreparedStatement sentencia;

    public BaseDatos() {
        String entorno = System.getenv("URL") == null ? "localhost:3306" : System.getenv("URL");
        this.url = String.format("jdbc:mysql://%s/vocales?allowPublicKeyRetrieval=true&useSSL=false", entorno);
    }

    protected void crarConexion(String query) {
        Connection conexion;
        try {
            conexion = DriverManager.getConnection(url, "root", "V0c@L3S");
            sentencia = conexion.prepareStatement(query, ResultSet.TYPE_SCROLL_SENSITIVE,
                            ResultSet.CONCUR_READ_ONLY);
        } catch (SQLException e) {
            e.printStackTrace();
            sentencia = null;
        }
    }

    public PreparedStatement getSentencia() {
        return sentencia;
    }

    protected abstract void crearQuery(String query);
}
