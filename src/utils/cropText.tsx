import React from 'react';

interface CropTextProps {
  text: string;
  limit: number;
}

const CropText = ({ text, limit }: CropTextProps) => {
  const croppedText = text.length > limit ? `${text.slice(0, limit)}...` : text;

    return <p>{croppedText}</p>;
};

export default CropText;