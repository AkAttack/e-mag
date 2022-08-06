module.exports = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap');

  /* layout */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
  }
  body{
    display: flex;
    justify-content: center;
    padding: 10px 50px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
  }

  /* QUOTE/INVOICE STYLES START */
  .invoice-page {
    background-color: rgba(255, 255, 255, 0.7);
  }
  .invoice-box {
    max-width: 800px;
    margin: auto;
    padding: 30px;
    border: 1px solid #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 24px;
    
    color: #555;
  }

  .invoice-box table {
    width: 100%;
    line-height: inherit;
    text-align: left;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .invoice-box table td {
    padding: 5px;
    vertical-align: top;
  }

  .invoice-box table tr td:nth-child(2) {
    text-align: right;
  }

  .invoice-box table tr.top table td {
    padding-bottom: 20px;
  }

  .invoice-box table tr.top table td.title {
    font-size: 45px;
    line-height: 45px;
    color: #333;
  }

  .invoice-box table tr.information table td {
    padding-bottom: 40px;
  }

  .invoice-box table tr.heading td {
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
  }

  .invoice-box table tr.details td {
    padding-bottom: 20px;
  }

  .invoice-box table tr.item td {
    border: 1px solid #eee;
  }

  .invoice-box table tr.item.last td {
    border-bottom: none;
  }

  .invoice-box table tr.total td:nth-child(2) {
    border-top: 2px solid #eee;
    font-weight: bold;
  }

  .invoice-company-logo{
    width: 100%; 
    max-width: 100px;
    margin-top: -15px;
  }

  .invoice-prevent-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }
  .column1-width {
    width: 70%;
  }
  .column2-width {
    width: 30%;
  }
  .footer {
    width: 100%;
    font-size: x-small;
    border-width: 1px;
    border-color: rgb(184, 180, 180);
    border-style: solid;
    margin-top: 20px;
    padding: 10px;
    line-height: 13px;
  }

  @media only screen and (max-width: 600px) {
    .invoice-box table tr.top table td {
      width: 100%;
      display: block;
      text-align: center;
    }

    .invoice-box table tr.information table td {
      width: 100%;
      display: block;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: clip;
    }
    

  }


  /* QUOTE/INVOICE STYLES END */
</style>
  `;
