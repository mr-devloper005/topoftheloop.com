import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Professional PDF profiles',
  },
  footer: {
    tagline: 'Professional PDF profiles',
  },
  hero: {
    badge: 'PDF profiles',
    title: ['Build polished', 'PDF profiles in minutes.'],
    description: 'Create print-ready professional PDF profiles, pick a template, and export when you are ready—without design-tool friction.',
    primaryCta: {
      label: 'Browse PDF library',
      href: '/pdf',
    },
    secondaryCta: {
      label: 'Get started',
      href: '/register',
    },
    searchPlaceholder: 'Search templates, topics, and PDFs',
    focusLabel: 'Focus',
    featureCardBadge: 'latest cover rotation',
    featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
    featureCardDescription:
      'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
  },
  home: {
    metadata: {
      title: 'PDF Profile — professional exports in minutes',
      description: 'Build and export professional PDF profiles with templates, secure storage, and a workflow tuned for people who need polished documents fast.',
      openGraphTitle: 'PDF Profile — professional exports in minutes',
      openGraphDescription: 'Build and export professional PDF profiles with templates and a calm, focused experience.',
      keywords: ['pdf profile', 'pdf resume', 'pdf template', 'professional pdf', 'export pdf'],
    },
    introBadge: 'About the platform',
    introTitle: 'A focused home for building and exporting professional PDF profiles.',
    introParagraphs: [
      'The experience centers on template-driven PDF profiles you can update and export without juggling many unrelated product areas.',
      'You get structured sections, consistent typography, and a simple path from edit to print-ready file.',
      'The site stays scoped to what matters for PDF work so navigation stays light and task-oriented.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Template-first workflow for professional PDFs.',
      'One primary library surface for PDF resources.',
      'Faster, calmer path from draft to export.',
      'No distraction from legacy directory or content feeds on this product surface.',
    ],
    primaryLink: {
      label: 'Open PDF library',
      href: '/pdf',
    },
    secondaryLink: {
      label: 'Get started',
      href: '/register',
    },
  },
  cta: {
    badge: 'Start your PDF',
    title: 'Create a PDF profile and export in minutes.',
    description: 'Pick a path, add your content, and download a polished document when you are ready.',
    primaryCta: {
      label: 'Get Started Free',
      href: '/register',
    },
    secondaryCta: {
      label: 'Contact Sales',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'A PDF + Profile site for Topoftheloop, built for clean discovery and structured publishing.',
  },
  listing: {
    title: 'Listings and discoverable pages',
    description: 'A PDF + Profile site for Topoftheloop, built for clean discovery and structured publishing.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'A PDF + Profile site for Topoftheloop, built for clean discovery and structured publishing.',
  },
  image: {
    title: 'Images and visual posts',
    description: 'A PDF + Profile site for Topoftheloop, built for clean discovery and structured publishing.',
  },
  profile: {
    title: 'Profiles and public pages',
    description: 'A PDF + Profile site for Topoftheloop, built for clean discovery and structured publishing.',
  },
  sbm: {
    title: 'Curated links and saved resources',
    description: 'A PDF + Profile site for Topoftheloop, built for clean discovery and structured publishing.',
  },
  pdf: {
    title: 'PDFs and downloadable resources',
    description: 'Browse the PDF library, find templates, and build export-ready professional profiles.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Images take the lead in this section through galleries, visual posts, and story-led content where imagery carries the experience.',
      'These posts connect with articles, listings, and other sections so visuals can act as entry points into deeper content.',
      'Browse the latest visual updates, then continue into related stories or supporting pages for more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open classifieds', href: '/classifieds' },
    ],
  },
  profile: {
    title: 'Profiles, identities, and public pages',
    paragraphs: [
      'Profiles capture the identity behind a business, creator, brand, or project and help visitors understand who is behind the content they are exploring.',
      'These pages work as trust anchors across the site and connect naturally with stories, listings, documents, and other post types.',
      'Browse profiles to understand people and brands more clearly, then continue into related content from the same source.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'Browse images', href: '/images' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts templates, guides, and export-ready profile documents you can download and share.',
      'Everything here is scoped to professional PDF profiles and related resources—so the experience stays focused.',
      'Browse by category, open a file, and follow prompts to build or extend your own profile export.',
    ],
    links: [
      { label: 'Create PDF profile', href: '/create/pdf' },
      { label: 'Help center', href: '/help' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
