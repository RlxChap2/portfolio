import React from 'react';
import { X, ExternalLink, Calendar, Award, AlertTriangle } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
    certificate: Certificate;
    isOpen: boolean;
    onClose: () => void;
    theme: 'developer' | 'security';
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, isOpen, onClose, theme }) => {
    if (!isOpen) return null;

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

    const buttonColors = {
        developer: 'bg-blue-600 hover:bg-blue-700',
        security: 'bg-red-600 hover:bg-red-700',
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl theme-security:bg-slate-800">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors theme-security:bg-slate-700 theme-security:hover:bg-slate-600">
                    <X className="w-5 h-5 text-gray-600 theme-security:text-gray-300" />
                </button>

                {/* Certificate Image */}
                {certificate.imageUrl && (
                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                        <img src={certificate.imageUrl} alt={certificate.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Status Badge */}
                        {isExpired(certificate.expirationDate) && (
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Expired
                            </div>
                        )}
                        {isExpiringSoon(certificate.expirationDate) && !isExpired(certificate.expirationDate) && (
                            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Expires Soon
                            </div>
                        )}
                    </div>
                )}

                {/* Certificate Details */}
                <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 rounded-full ${certificate.category === 'development' ? 'bg-blue-100' : 'bg-red-100'}`}>
                            <Award className={`w-8 h-8 ${certificate.category === 'development' ? 'text-blue-600' : 'text-red-600'}`} />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 theme-security:text-white">{certificate.name}</h2>
                            <p className="text-lg text-gray-600 theme-security:text-gray-300">{certificate.issuer}</p>
                            <span
                                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                                    certificate.category === 'development' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                                }`}>
                                {certificate.category}
                            </span>
                        </div>
                    </div>

                    {/* Certificate Information */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-gray-500 theme-security:text-gray-400" />
                                <div>
                                    <p className="text-sm text-gray-500 theme-security:text-gray-400">Issue Date</p>
                                    <p className="font-semibold text-gray-900 theme-security:text-white">
                                        {new Date(certificate.issueDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </p>
                                </div>
                            </div>

                            {certificate.expirationDate && (
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-gray-500 theme-security:text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500 theme-security:text-gray-400">Expiration Date</p>
                                        <p
                                            className={`font-semibold ${
                                                isExpired(certificate.expirationDate)
                                                    ? 'text-red-600'
                                                    : isExpiringSoon(certificate.expirationDate)
                                                    ? 'text-yellow-600'
                                                    : 'text-gray-900 theme-security:text-white'
                                            }`}>
                                            {new Date(certificate.expirationDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 theme-security:text-gray-400 mb-1">Credential ID</p>
                                <p className="font-mono text-sm bg-gray-100 px-3 py-2 rounded-lg theme-security:bg-slate-700 theme-security:text-gray-300">
                                    {certificate.credentialId}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {certificate.verificationUrl && (
                            <a
                                href={certificate.verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${buttonColors[theme]} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}>
                                <ExternalLink className="w-5 h-5" />
                                Verify Certificate
                            </a>
                        )}

                        <button
                            onClick={onClose}
                            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:border-gray-400 hover:scale-105 theme-security:border-slate-600 theme-security:text-gray-300 theme-security:hover:border-slate-500">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
