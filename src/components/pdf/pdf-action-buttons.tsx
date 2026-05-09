'use client'

import React, { useState } from 'react'

interface PdfActionButtonsProps {
  fileUrl: string
  currentUrl: string
}

export function PdfActionButtons({ fileUrl, currentUrl }: PdfActionButtonsProps) {
  const [showCopiedToast, setShowCopiedToast] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setShowCopiedToast(true)
      setTimeout(() => setShowCopiedToast(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleOpenInNewTab = () => {
    window.open(fileUrl, '_blank')
  }

  const handleFollow = () => {
    window.location.href = '/login'
  }

  return (
    <div className="relative">
      <>
        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
        
        <button
          onClick={handleCopyLink}
          className="group inline-flex items-center gap-2 rounded-2xl border-2 border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-md transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-lg"
        >
          <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Link
        </button>

        <button
          onClick={handleFollow}
          className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Follow
          </span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>
      </>
      
      {/* Toast Notification */}
      {showCopiedToast && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 animate-in slide-in-from-top-2 fade-in-0">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">URL copied!</span>
          </div>
        </div>
      )}
    </div>
  )
}
