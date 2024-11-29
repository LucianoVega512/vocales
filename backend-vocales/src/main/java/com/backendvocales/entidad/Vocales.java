package com.backendvocales.entidad;

import java.io.Serializable;
import java.util.List;

public class Vocales implements Serializable{
    private int id;
    private String texto;
    private List<Integer> data;

    public Vocales(int id, String texto, List<Integer> data) {
        this.id = id;
        this.texto = texto;
        this.data = data;
    }

    public Vocales() {
    }

    public int getId() {
        return id;
    }

    public String getTexto() {
        return texto;
    }

    public List<Integer> getData() {
        return data;
    }    
}
