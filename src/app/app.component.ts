import { Component } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";
import * as Excel from "@grapecity/spread-excelio";
import "@grapecity/spread-sheets-print";
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})

export class AppComponent {
  spreadBackColor= 'aliceblue';
  file;
  hostStyle = {
    width: '85vw',
    height: '70vh'
  };

  private spread: GC.Spread.Sheets.Workbook;
  
  private excelIO;

  constructor() {
    this.excelIO = new Excel.IO();
  }

  printBtn(){
    var printInfo = new GC.Spread.Sheets.Print.PrintInfo();
    var activeSheet = this.spread.getActiveSheet();
    printInfo.bestFitColumns(true);
    printInfo.bestFitRows(true);
    printInfo.orientation(GC.Spread.Sheets.Print.PrintPageOrientation.landscape);
    printInfo.footerCenter("GrapeCity");
   
    activeSheet.printInfo(printInfo);
    this.spread.print(0);
  }
 
 
 workbookInit(args){
  var spreadNS = GC.Spread.Sheets;
  const self = this;
  self.spread = args.spread;
 
 const sheet = self.spread.getActiveSheet();
    sheet.suspendPaint();
    sheet.setValue(-1,-1, "Testing");
    sheet.resumePaint();
}}