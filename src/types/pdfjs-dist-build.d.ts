declare module "pdfjs-dist/build/pdf" {
  interface PDFDocumentProxy {
    numPages: number;
    getPage(pageNumber: number): Promise<any>;
  }

  interface PDFJSGetDocumentParameters {
    data: Uint8Array | ArrayBuffer;
  }

  interface PDFJSLoadingTask {
    promise: Promise<PDFDocumentProxy>;
  }

  export function getDocument(params: PDFJSGetDocumentParameters): PDFJSLoadingTask;
}
