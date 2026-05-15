'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectModalProps {
  projectName: string;
  description: string;
  isVisible: boolean;
  onClose: () => void;
  onEnter: () => void;
  onLeave: () => void;
  position?: { x: number; y: number };
}

export default function ProjectModal({
  projectName,
  description,
  isVisible,
  onClose,
  onEnter,
  onLeave,
  position,
}: ProjectModalProps) {
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isVisible && !details) {
      fetchProjectDetails();
    }
  }, [isVisible, details]);

  const fetchProjectDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/project-details?project=${encodeURIComponent(projectName)}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch project details');
      }
      const data = await response.json();
      setDetails(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  const modalStyle = position
    ? {
        position: 'fixed' as const,
        left: `${position.x}px`,
        top: `${position.y + 20}px`,
        minWidth: '320px',
        maxWidth: '360px',
      }
    : {};

  return (
    <>
      {!position && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}

      <div
        className="fixed bg-white dark:bg-slate-800 rounded-xl shadow-2xl z-50 max-h-[380px] overflow-y-auto border border-slate-200 dark:border-slate-700"
        style={modalStyle}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-slate-800 rounded-full z-10 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          ✕
        </button>

        <div className="p-4 md:p-5">
          <h2 className="text-base md:text-lg font-semibold mb-2 pr-8 line-clamp-2">
            {projectName}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          {loading && (
            <div className="text-center py-8">
              <p className="text-slate-500">Loading project details...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded mb-4">
              {error}
            </div>
          )}

          {details && (
            <div className="space-y-3">
              {details.fileType === 'gif' && (
                <div className="relative w-full h-36 bg-slate-100 rounded-lg overflow-hidden">
                  <Image
                    src={details.fileUrl}
                    alt={projectName}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {details.preview ? (
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                  <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap">
                    {details.preview}
                  </p>
                </div>
              ) : null}

              {details.fileUrl && (
                <a
                  href={details.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold transition text-sm"
                >
                  View file details
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
