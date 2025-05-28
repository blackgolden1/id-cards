
'use client';

import { QRCodeSVG } from 'qrcode.react';

interface VCardQRProps {
    firstName: string;
    lastName: string;
    organization?: string;
    phone: string;
    email: string;
    website?: string;
}

export default function VCardQR({
                                    firstName,
                                    lastName,
                                    organization = '',
                                    phone,
                                    email,
                                    website = '',
                                }: VCardQRProps) {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
ORG:${organization}
TEL;TYPE=cell:${phone}
EMAIL:${email}
${website ? `URL:${website}` : ''}
END:VCARD
  `.trim();

    return (
            <QRCodeSVG value={vCardData} size={256} level="H" />
    );
}
