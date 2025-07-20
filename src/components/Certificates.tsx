import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, AlertTriangle, Eye } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import { useCertificateFilter } from '../hooks/useFilter';
import { CertificateModal } from './CertificateModal';
import { Certificate } from '../types';

interface CertificatesProps {
    theme: 'developer' | 'security';
}

export const Certificates: React.FC<CertificatesProps> = ({ theme }) => {
    const { filter, setFilter, filteredCertificates } = useCertificateFilter(certificates);
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const themeColors = {
        developer: 'text-blue-600 border-blue-600',
        security: 'text-red-600 border-red-600',
    };

    const filters = [
        { key: 'all', label: 'All Certificates' },
        { key: 'development', label: 'Development' },
        { key: 'security', label: 'Security' },
    ];

    const isExpiringSoon = (expirationDate?: string) => {
        if (!expirationDate) return false;
        const expDate = new Date(expirationDate);
        const now = new Date();
        const sixMonthsFromNow = new Date();
        sixMonthsFromNow.setMonth(now.getMonth() + 6);
        return expDate <= sixMonthsFromNow && expDate > now;
    };

    const isExpired = (expirationDate?: string) => {
        if (!expirationDate) return false;
        return new Date(expirationDate) < new Date();
    };

    const handleCertificateClick = (certificate: Certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    return (
        <section
            id="certificates"
            className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 theme-security:from-slate-900 theme-security:to-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6 theme-security:text-white">Professional Certifications</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto theme-security:text-gray-300">
                        Industry-recognized certifications validating expertise and continuous learning
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filterOption) => (
                        <button
                            key={filterOption.key}
                            onClick={() => setFilter(filterOption.key as any)}
                            className={`px-8 py-3 rounded-full border-2 transition-all duration-300 font-semibold ${
                                filter === filterOption.key
                                    ? `${themeColors[theme]} bg-opacity-10 shadow-lg scale-105`
                                    : 'text-gray-600 border-gray-300 hover:border-gray-400 hover:scale-105 theme-security:text-gray-400 theme-security:border-gray-600'
                            }`}>
                            {filterOption.label}
                        </button>
                    ))}
                </div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 theme-security:bg-slate-800 cursor-pointer"
                            onClick={() => handleCertificateClick(cert)}>
                            {/* Certificate Image */}
                            {cert.imageUrl && (
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={cert.imageUrl}
                                        alt={cert.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* View Details Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <Eye className="w-4 h-4" />
                                            View Details
                                        </button>
                                    </div>

                                    {/* Status Indicators */}
                                    {isExpired(cert.expirationDate) && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
                                            <AlertTriangle className="w-3 h-3" />
                                            Expired
                                        </div>
                                    )}
                                    {isExpiringSoon(cert.expirationDate) && !isExpired(cert.expirationDate) && (
                                        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
                                            <AlertTriangle className="w-3 h-3" />
                                            Expires Soon
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-3 rounded-full ${cert.category === 'development' ? 'bg-blue-100' : 'bg-red-100'}`}>
                                        <Award className={`w-6 h-6 ${cert.category === 'development' ? 'text-blue-600' : 'text-red-600'}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 theme-security:text-white group-hover:text-blue-600 theme-security:group-hover:text-red-400 transition-colors">
                                            {cert.name}
                                        </h3>
                                        <p className="text-gray-600 theme-security:text-gray-300">{cert.issuer}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 theme-security:text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>Issued: {new Date(cert.issueDate).toLocaleDateString()}</span>
                                    </div>

                                    {cert.expirationDate && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500 theme-security:text-gray-400">
                                            <Calendar className="w-4 h-4" />
                                            <span>Expires: {new Date(cert.expirationDate).toLocaleDateString()}</span>
                                        </div>
                                    )}

                                    <div className="text-sm text-gray-500 theme-security:text-gray-400">
                                        <span className="font-medium">ID:</span> {cert.credentialId}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCertificateClick(cert);
                                        }}
                                        className={`flex-1 px-4 py-2 rounded-lg text-white text-sm transition-all duration-300 hover:scale-105 ${
                                            cert.category === 'development' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'
                                        }`}>
                                        <Eye className="w-4 h-4 inline mr-2" />
                                        View
                                    </button>

                                    {cert.verificationUrl && (
                                        <a
                                            href={cert.verificationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg text-sm transition-all duration-300 hover:border-gray-400 hover:scale-105 theme-security:border-slate-500 theme-security:text-gray-300">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCertificate && <CertificateModal certificate={selectedCertificate} isOpen={isModalOpen} onClose={closeModal} theme={theme} />}
        </section>
    );
};
