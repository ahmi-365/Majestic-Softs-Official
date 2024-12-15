import React from 'react';
import { OfficeCard } from './Cards/OfficeCard';

const offices = [
  {
    city: 'San Francisco',
    address: '100 Technology Drive, SF 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@example.com',
  },
  {
    city: 'London',
    address: '15 Innovation Square, London EC1A 1BB',
    phone: '+44 20 7123 4567',
    email: 'london@example.com',
  },
  {
    city: 'Singapore',
    address: '42 Digital Hub, Singapore 018936',
    phone: '+65 6789 0123',
    email: 'singapore@example.com',
  },
];

export const Contact: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Global Presence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Connect with our offices worldwide
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {offices.map((office, index) => (
            <OfficeCard key={index} {...office} />
          ))}
        </div>
      </div>
    </section>
  );
};