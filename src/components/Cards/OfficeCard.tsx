import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface OfficeCardProps {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export const OfficeCard: React.FC<OfficeCardProps> = ({
  city,
  address,
  phone,
  email,
}) => {
  return (
    <div className="rounded-xl bg-gray-50 p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <h3 className="mb-4 text-xl font-bold text-gray-900">{city}</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
          <span className="text-gray-600">{address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 flex-shrink-0 text-indigo-600" />
          <span className="text-gray-600">{phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 flex-shrink-0 text-indigo-600" />
          <span className="text-gray-600">{email}</span>
        </div>
      </div>
    </div>
  );
};