package org.example.FactoryDesignPattern;

import org.example.FactoryDesignPattern.Factory.DocumentFactory;
import org.example.FactoryDesignPattern.Factory.ExcelDocumentFactory;
import org.example.FactoryDesignPattern.Factory.PdfDocumentFactory;
import org.example.FactoryDesignPattern.Factory.WordDocumentFactory;

public class Main {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }
}
