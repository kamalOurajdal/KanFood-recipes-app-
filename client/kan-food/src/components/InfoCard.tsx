import React from 'react';

interface InfoCardProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, label, value }) => (
    <div className="flex items-center bg-orange-100 p-3 rounded-lg hover:bg-orange-200 transition-colors duration-200">
        <div className="text-orange-500 mr-3">{icon}</div>
        <div>
            <p className="text-sm text-gray-600">{label}</p>
            <p className="font-semibold">{value}</p>
        </div>
    </div>
);

export default InfoCard;