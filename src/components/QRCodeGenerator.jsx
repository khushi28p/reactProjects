import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const QRCodeGenerator = () => {
  const [data, setData] = useState('');
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(200);
  const [temp, setTemp] = useState('');
  const [QRCode, setQRCode] = useState('');

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}-${g}-${b}`;
  };

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const rgbColor = hexToRgb(color);
        const response = await axios.get(
          `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
            data
          )}&size=${size}x${size}&color=${rgbColor}`
        );
        setQRCode(response.request.responseURL);
      } catch (error) {
        console.error('Error fetching QR code:', error);
      }
    };

    if (data) {
      fetchQRCode();
    }
  }, [data, size, color]);

  const handleClick = (e) => {
    e.preventDefault();
    setData(temp);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen py-8 text-white gap-10">
      <h1 className="text-4xl font-bold">QR Generator</h1>
      <form className="w-3/5 flex flex-col gap-4">
        <div className="flex gap-4">
          <Input
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter the data for QR"
          />
          <Button onClick={handleClick} className="px-8 bg-blue-500 hover:bg-blue-600">
            Generate
          </Button>
        </div>

        <div className="flex py-6">
          <div className="flex gap-4 w-1/2 justify-center">
            <Label>Background Color</Label>
            <Input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="color"
              className="w-50 border-0"
            />
          </div>

          <div className="flex gap-4 w-1/2 justify-center">
            <Label>QR Size</Label>
            <Slider
              value={[size]}
              defaultValue={[size]}
              min={200}
              max={600}
              step={1}
              className="w-50"
              onValueChange={(val) => setSize(val[0])}
            />
          </div>
        </div>
      </form>

      {QRCode && (
        <div className="flex flex-col items-center gap-4 ">
          <div className='flex justify-center items-center bg-white p-4 rounded-xl'>
          <img src={QRCode} alt="QR" />
          </div>
          <a href={QRCode} download="QRCode">
            <Button className='bg-red-500 hover:bg-red-600 font-semibold px-8'>Download</Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
