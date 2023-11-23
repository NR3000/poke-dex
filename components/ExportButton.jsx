"use client"

import FileSaver from 'file-saver'
import React from 'react'
import * as XLSX from "xlsx"
import { SiMicrosoftexcel } from "react-icons/si"

const ExportButton = ({ fileName, header, data }) => {

    const exportData = () => {
        const ws = XLSX.utils.book_new()
        XLSX.utils.sheet_add_aoa(ws, [header])
        XLSX.utils.sheet_add_json(ws, data, { origin: 'A2', skipHeader: true })
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: 'array', cellStyles: true })
        const finalData = new Blob([excelBuffer], { type: "xlsx" })
        FileSaver.saveAs(finalData, `${fileName}.xlsx`)
    }

    return <button onClick={exportData} className="poke-list-export-btn"><SiMicrosoftexcel />Export</button>
}

export default ExportButton