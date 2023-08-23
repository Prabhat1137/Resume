function resumePDF()
{
    const pdf=document.getElementById("main");
    html2pdf().from(pdf).save();
}