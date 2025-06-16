
'use client';

import { QRCodeSVG } from 'qrcode.react';

interface VCardQRProps {
    firstName: string;
    lastName: string;
    rol?: string;
    phone: string;
    email: string;
    website?: string;
}

export default function VCardQR({
                                    firstName,
                                    lastName,
                                    rol = '',
                                    phone,
                                    email,
                                    website = '',
                                }: VCardQRProps) {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
ORG:${rol}
TEL;TYPE=cell:${phone}
EMAIL:${email}
${website ? `URL:${website}` : ''}
END:VCARD
  `.trim();

    return (
            <QRCodeSVG value={vCardData} size={256} level="H" />
    );
}
