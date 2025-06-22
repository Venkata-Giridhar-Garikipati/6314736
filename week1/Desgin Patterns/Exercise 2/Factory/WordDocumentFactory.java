package org.example.FactoryDesignPattern.Factory;

import org.example.FactoryDesignPattern.Document;
import org.example.FactoryDesignPattern.WordDocument;

public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}

