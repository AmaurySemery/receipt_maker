import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ReactNode, useRef } from "react";

type PDFprinterProps = {
    children: ReactNode;
}

export default function PDFprinter({ children }: PDFprinterProps ) {
    const printRef = useRef<HTMLDivElement>(null);
    const handleDownloadPDF = async () => {
        const element = printRef.current;
        if (element === null) {
            return;
        }
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    }

    return (
      <div>
        <div ref={printRef}>{children}</div>
        <button type="button" onClick={handleDownloadPDF}>
          Download as PDF
        </button>
      </div>
    );
}