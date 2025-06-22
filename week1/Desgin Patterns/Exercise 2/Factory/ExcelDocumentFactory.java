package org.example.FactoryDesignPattern.Factory;

import org.example.FactoryDesignPattern.Document;
import org.example.FactoryDesignPattern.ExcelDocument;

public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}
