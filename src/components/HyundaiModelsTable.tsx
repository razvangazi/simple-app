import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';

const HyundaiModelsTable: React.FC = () => {
  const hyundaiModels = [
    { model: 'VENUE', price: '$20,200', type: 'SUV', mpg: '33' },
    { model: 'KONA', price: '$24,550', type: 'SUV', mpg: '35' },
    { model: 'KONA Electric', price: '$32,975', type: 'Electric SUV', mpg: '261 miles range' },
    { model: 'SANTA CRUZ', price: '$28,750', type: 'Sport Adventure Vehicle', mpg: '30' },
    { model: 'TUCSON', price: '$28,705', type: 'SUV', mpg: '33' },
    { model: 'TUCSON Hybrid', price: '$33,465', type: 'Hybrid SUV', mpg: '38' },
    { model: 'TUCSON Plug-in Hybrid', price: '$39,730', type: 'Plug-in Hybrid SUV', mpg: 'N/A' },
    { model: 'SANTA FE', price: '$34,300', type: 'SUV', mpg: 'N/A' },
    { model: 'ELANTRA', price: '$22,125', type: 'Sedan', mpg: 'N/A' },
    { model: 'SONATA', price: '$26,900', type: 'Sedan', mpg: 'N/A' }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">2025 Hyundai Models</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Starting Price</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>MPG/Range</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hyundaiModels.map((car, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{car.model}</TableCell>
              <TableCell>{car.price}</TableCell>
              <TableCell>{car.type}</TableCell>
              <TableCell>{car.mpg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HyundaiModelsTable;
