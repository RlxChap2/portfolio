import { useState, useMemo } from 'react';
import { Project, Certificate } from '../types';

export const useProjectFilter = (projects: Project[]) => {
  const [filter, setFilter] = useState<'all' | 'development' | 'security'>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(project => project.category === filter);
  }, [projects, filter]);

  return { filter, setFilter, filteredProjects };
};

export const useCertificateFilter = (certificates: Certificate[]) => {
  const [filter, setFilter] = useState<'all' | 'development' | 'security'>('all');

  const filteredCertificates = useMemo(() => {
    if (filter === 'all') return certificates;
    return certificates.filter(cert => cert.category === filter);
  }, [certificates, filter]);

  return { filter, setFilter, filteredCertificates };
};