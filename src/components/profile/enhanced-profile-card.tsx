'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ContentImage } from '@/components/shared/content-image'

interface EnhancedProfileCardProps {
  post: any
  logoUrl?: string
  brandName: string
  domain?: string
  descriptionHtml: string
  website?: string
}

export function EnhancedProfileCard({ 
  post, 
  logoUrl, 
  brandName, 
  domain, 
  descriptionHtml, 
  website 
}: EnhancedProfileCardProps) {
  const [showCopiedToast, setShowCopiedToast] = useState(false)

  const handleShare = async () => {
    try {
      const currentUrl = window.location.href
      await navigator.clipboard.writeText(currentUrl)
      setShowCopiedToast(true)
      setTimeout(() => setShowCopiedToast(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleFollow = () => {
    window.location.href = '/login'
  }

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30 shadow-2xl transition-all duration-700 hover:shadow-3xl">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/8 via-transparent to-teal-600/8 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-transparent blur-3xl transition-all duration-700 group-hover:scale-110" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-teal-400/20 to-transparent blur-3xl transition-all duration-700 group-hover:scale-110" />
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 p-[2px] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="h-full w-full rounded-3xl bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30" />
      </div>
      
      <div className="relative p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
          
          {/* Logo/Avatar Section */}
          <div className="flex justify-center lg:block">
            <div className="relative group/avatar">
              <div className="relative h-32 w-32 lg:h-40 lg:w-40 overflow-hidden rounded-3xl border-4 border-white/90 bg-gradient-to-br from-emerald-100 to-teal-100 shadow-2xl transition-all duration-500 group-hover/avatar:scale-105 group-hover/avatar:shadow-3xl group-hover:border-emerald-200">
                {logoUrl ? (
                  <ContentImage 
                    src={logoUrl} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-all duration-500 group-hover/avatar:scale-110" 
                    sizes="160px" 
                    intrinsicWidth={160} 
                    intrinsicHeight={160} 
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 text-4xl font-bold text-white transition-all duration-500 group-hover/avatar:from-emerald-600 group-hover/avatar:to-teal-600">
                    {post.title.slice(0, 1).toUpperCase()}
                  </div>
                )}
              </div>
              {/* Avatar glow effect */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-400/30 to-teal-400/30 blur-xl opacity-0 transition-opacity duration-500 group-hover/avatar:opacity-100" />
            </div>
          </div>

          {/* Main Content Section */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent sm:text-4xl lg:text-5xl transition-all duration-500 group-hover:from-emerald-900 group-hover:to-teal-900">
                {brandName}
              </h1>
              {domain && (
                <div className="mt-3 flex items-center justify-center gap-2 lg:justify-start">
                  <div className="relative">
                    <svg className="h-4 w-4 text-emerald-600 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                    <div className="absolute inset-0 rounded-full bg-emerald-600/20 blur-sm" />
                  </div>
                  <a 
                    href={website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-all duration-300 hover:translate-x-1 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {domain}
                  </a>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-2xl blur-sm" />
              <div 
                className="relative prose prose-slate max-w-2xl text-gray-600 leading-relaxed prose-p:my-4 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-headings:text-gray-800"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            </div>

            {/* Action Links */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div className="relative group/share">
                <button 
                  onClick={handleShare}
                  className="group relative flex items-center gap-3 rounded-2xl border-2 border-emerald-200/60 bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-600/10 to-teal-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <svg className="relative h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span className="relative">Share</span>
                </button>
                
                {/* Enhanced Toast Notification */}
                {showCopiedToast && (
                  <div className="absolute -top-14 left-1/2 z-50 transform -translate-x-1/2 animate-bounce">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 shadow-2xl">
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      <div className="relative flex items-center gap-3">
                        <div className="rounded-full bg-white/20 p-1">
                          <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-white">URL copied!</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Follow Button */}
            <div className="relative">
              <button
                onClick={handleFollow}
                className="group relative inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-8 py-4 text-base font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Follow
                </span>
              </button>
              {/* Button glow effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-400/30 to-teal-400/30 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
