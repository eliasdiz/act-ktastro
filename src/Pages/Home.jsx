import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

export default function Home() {
    const [data, setData] = useState([]);
    const headTitle = ['fid', 'numero predial', 'un. intervencion', 'nomenclatura','estado','ACC'];

    // Definimos las columnas a extraer
    // const columnsToExtract = [0, 4, 5, 6,9];
    // const keys = ['fid','numeroPredial', 'unidadIntervencion', 'nomenclatura','estado'];

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();

    //     reader.onload = (event) => {
    //         const arrayBuffer = event.target.result;
    //         const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
    //         const sheetName = workbook.SheetNames[0];
    //         const sheet = workbook.Sheets[sheetName];

    //         // Convertir a JSON, ignorando el encabezado
    //         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    //         console.log('Datos JSON:', jsonData); // Verifica los datos aquí

    //         // Convertimos las filas a objetos, extrayendo solo las columnas necesarias
    //         const filteredData = jsonData.slice(1).map((row) => {
    //             const obj = {};
    //             columnsToExtract.forEach((colIndex, index) => {
    //                 obj[keys[index]] = row[colIndex] || ''; // Asigna valor o una cadena vacía si es undefined
    //             });
    //             return obj;
    //         });

    //         // filteredData.filter(({estado}) => estado === 'NULO')
    //         // console.log('Datos filtrados:', filteredData); // Verifica los datos aquí
    //         setData(filteredData?.sort((a,b) => a.unidadIntervencion - b.unidadIntervencion)); // Establece el estado con los datos procesados
    //     };

    //     reader.readAsArrayBuffer(file);
    // };

    console.log(data)


    return (
        <div className='flex flex-col justify-center items-center gap-2 p-2'>
        
            <div className='w-[70%] max-h-[80vh] overflow-y-auto'>
                {
                    data.length > 0 && 
                        <div>
                            <table className="table-auto border-collapse border border-gray-400">
                                <thead>
                                    <tr>
                                        {
                                            headTitle.map((item, i) => (
                                                <th key={i} className="border border-gray-400 p-2 capitalize">
                                                    {item}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    data?.map((item,i) => (
                                        <tr key={i}>

                                            <td className='border border-gray-400 text-center p-1'>
                                                <Typography variant='small'>
                                                    {item.fid}
                                                </Typography>
                                            </td>

                                            <td className='border border-gray-400 text-center p-1'>
                                                <Typography variant='small'>
                                                    {item.numeroPredial}
                                                </Typography>
                                            </td>

                                            <td className='border border-gray-400 text-center p-1'>
                                                <Typography variant='small'>
                                                    {item.unidadIntervencion}
                                                </Typography>
                                            </td>

                                            <td className='border border-gray-400 text-center p-1'>
                                                <Typography variant='small'>
                                                    {item.nomenclatura}
                                                </Typography>
                                            </td>

                                            <td className='border border-gray-400 text-center p-1'>
                                                <Typography variant='small'>
                                                    {item.estado}
                                                </Typography>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    );
}

