package com.backendvocales.basedatos;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class IniciarBaseDatos{
    private final String url;
    private int reinicios;

    public IniciarBaseDatos(){
        String entorno = crearUrlEntorno();
        this.url = String.format("jdbc:mysql://%s/", entorno);
        System.out.println(url);
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

    public void iniciarBaseDatos(){
        if (crearBaseDatosNoExiste()) {
            crearTablaAnalisis();
            System.out.println("Base datos creada");
        }
    }

    // retorna true si no existe
    private boolean crearBaseDatosNoExiste() {
        try (Connection conn = DriverManager.getConnection(url, "root", "V0c@L3S");
                Statement stmt = conn.createStatement();) {
            String sql = "CREATE DATABASE vocales";
            stmt.executeUpdate(sql);
            return true;
        } catch (SQLException e) {
            reinicios++;
            System.out.println("error al crear " + e);
            return false;
        }
    }

    //Crea tabla...repetir para mas tablas.
    private void crearTablaAnalisis() {
        try (Connection conn = DriverManager.getConnection(String.format("%s%s", url, "vocales"), "root", "V0c@L3S");
                Statement stmt = conn.createStatement();) {
            String sql = "CREATE TABLE analisis (id int NOT NULL AUTO_INCREMENT, texto varchar(200) NOT NULL, val_a int, val_e int, val_i int, val_o int, val_u int, PRIMARY KEY (id));";
            stmt.executeUpdate(sql);            
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public int getReinicios() {
        return reinicios;
    }

}
