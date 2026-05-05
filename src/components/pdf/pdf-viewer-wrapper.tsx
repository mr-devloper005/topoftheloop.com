'use client'

import React from 'react'

interface PdfViewerWrapperProps {
  fileUrl: string
  title: string
  viewerUrl: string
}

export function PdfViewerWrapper({ fileUrl, title, viewerUrl }: PdfViewerWrapperProps) {
  // Enhanced PDF viewer URL with better width control
  const enhancedViewerUrl = `${viewerUrl}&zoom=page-fit&view=FitH&scrollbar=1&toolbar=1&navpanes=0`

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <iframe
        src={enhancedViewerUrl}
        title={title}
        className="h-[85vh] w-full"
        style={{ 
          border: 'none',
          objectFit: 'contain'
        }}
      />
    </div>
  )
}
