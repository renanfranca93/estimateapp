import jsPDF from "jspdf";
import "jspdf-autotable";
import HeaderPDF from '../assets/images/header-pdf.png'
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (data, items) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Nome", "Qtd", "Valor"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  items.forEach(item => {
    const ticketData = [
      item.name,
      item.qtd,
      item.value,
    //   ticket.status,
      // called date-fns to format the date on the ticket
    //   format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });


  // startY is basically margin-top
  
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.addImage(HeaderPDF, 'PNG', 12, 5, 180, 28);
  doc.setFontSize(12)

  doc.setFont('helvetica', 'bold');
  doc.text("Orçamento: ", 14, 44);
  doc.setFont('helvetica', 'regular');
  doc.text(""+data.id, 40, 44);
  doc.setFont('helvetica', 'bold');
  doc.text("Data: ", 100, 44);
  doc.setFont('helvetica', 'regular');
  doc.text(""+format(new Date(data.date), "dd/MM/yyyy"), 115, 44);
  doc.setFont('helvetica', 'bold');
  doc.text("Cliente: ", 14, 51);
  doc.setFont('helvetica', 'regular');
  doc.text(""+data.client, 40, 51);
  doc.setFont('helvetica', 'bold');
  doc.text("Itens", 14, 66);
  doc.setFont('helvetica', 'regular');
  // we define the name of our PDF file.
  doc.autoTable(tableColumn, tableRows, { startY: 70, headStyles :{fillColor : [66,110,181]}});

  let finalY = doc.lastAutoTable.finalY; // The y position on the page
  doc.setFont('helvetica', 'bold');
  doc.text(140, finalY+10, "Desconto: ")
  doc.text(170, finalY+10, "R$ "+data.discount)
  doc.text(140, finalY+18, "Total: ")
  doc.text(170, finalY+18, "R$ "+parseFloat(data.totalValue)?.toFixed(2))

  doc.save(`orcamento_${dateStr}.pdf`);
};

export default generatePDF;