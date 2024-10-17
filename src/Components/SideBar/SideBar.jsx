import { Card, List, ListItem, Typography } from '@material-tailwind/react'
import { FileXls, UploadSimple } from '@phosphor-icons/react'
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

export default function SideBar() {


    const [data, setData] = useState([]);
    // const headTitle = ['fid', 'numero predial', 'un. intervencion', 'nomenclatura','estado','ACC'];

    // Definimos las columnas a extraer
    const columnsToExtract = [0, 4, 5, 6,9];
    const keys = ['fid','numeroPredial', 'unidadIntervencion', 'nomenclatura','estado'];

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const arrayBuffer = event.target.result;
            const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convertir a JSON, ignorando el encabezado
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            console.log('Datos JSON:', jsonData); // Verifica los datos aquí

            // Convertimos las filas a objetos, extrayendo solo las columnas necesarias
            const filteredData = jsonData.slice(1).map((row) => {
                const obj = {};
                columnsToExtract.forEach((colIndex, index) => {
                    obj[keys[index]] = row[colIndex] || ''; // Asigna valor o una cadena vacía si es undefined
                });
                return obj;
            });

            // filteredData.filter(({estado}) => estado === 'NULO')
            // console.log('Datos filtrados:', filteredData); // Verifica los datos aquí
            setData(filteredData?.sort((a,b) => a.unidadIntervencion - b.unidadIntervencion)); // Establece el estado con los datos procesados
        };

        reader.readAsArrayBuffer(file);
    };


    return (
        <Card className="h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-gray-500 rounded-lg">
            <div className="flex justify-center p-2">
                <Typography variant="h5" color="blue-gray" className='uppercase'>
                    menu
                </Typography>
            </div>
            <List>
                <ListItem>
                    <label 
                        htmlFor="file-upload" 
                        className='w-full flex justify-around cursor-pointer'
                    >
                        <div className="flex items-center justify-center gap-4">
                            <UploadSimple size={30} color='blue' />
                            <FileXls size={30} color='green' />
                        </div>
                        <input 
                            id="file-upload" 
                            type="file" 
                            accept='.xlsx, .xls'
                            className="hidden" 
                            onChange={handleFileChange} 
                        />
                    </label>
                </ListItem>
            </List>
        </Card>
    )
}
