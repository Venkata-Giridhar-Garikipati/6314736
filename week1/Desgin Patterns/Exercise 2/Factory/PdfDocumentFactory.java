package org.example.FactoryDesignPattern.Factory;

import org.example.FactoryDesignPattern.Document;
import org.example.FactoryDesignPattern.PdfDocument;

public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}
