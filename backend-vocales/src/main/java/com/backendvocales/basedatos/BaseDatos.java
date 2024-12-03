package com.backendvocales.basedatos;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

public abstract class BaseDatos {
    private final String url;
    private PreparedStatement sentencia;

    public BaseDatos() {
        String entorno = crearUrlEntorno();
        this.url = String.format("jdbc:mysql://%s/vocales?allowPublicKeyRetrieval=true&useSSL=false", entorno);
    }

    private String crearUrlEntorno(){
        Properties propiedades = new Properties();

        try {
            propiedades.load(Files.newInputStream(Paths.get("/config/propiedades.properties")));
            return propiedades.getProperty("URL_BASE_DATOS");
        } catch (Exception e) {
            return "localhost:3306";
        }
    }

    protected void crarConexion(String query) {
        Connection conexion;
        try {
            conexion = DriverManager.getConnection(url, "root", "V0c@L3S");
            sentencia = conexion.prepareStatement(query, ResultSet.TYPE_SCROLL_SENSITIVE,
                            ResultSet.CONCUR_READ_ONLY);
        } catch (SQLException e) {
            System.exit(0);   
        }
    }

    public PreparedStatement getSentencia() {
        return sentencia;
    }

    protected abstract void crearQuery(String query);
}
