"use client"

import React from 'react'
import * as XLSX from 'xlsx';


var data = [
    {"name":"John", "city": "Seattle"},
    {"name":"Mike", "city": "Los Angeles"},
    {"name":"Zach", "city": "New York"}
  ];
  

export default function page() {
    const exportData = () => {
        let header = ["Name", "City"];
        const ws = XLSX.utils.book_new();
        XLSX.utils.sheet_add_aoa(ws, [header]);
        XLSX.utils.sheet_add_json(ws, data, { origin: 'A2', skipHeader: true });
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: 'array', cellStyles:true });
        const finalData = new Blob([excelBuffer], { type: "xlsx" });
        FileSaver.saveAs(finalData, "Data.xlsx");
    }
    return (
        <div>page
            <button onClick={exportData}>Export</button>
        </div>
    )
}
