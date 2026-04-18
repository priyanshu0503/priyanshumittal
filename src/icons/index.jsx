// ── icons/index.jsx ──
// All SVG icons as tiny, focused React components.

/** Base icon wrapper — use for simple single-path icons */
export const Icon = ({ d, size = 20, stroke = 'rgba(34,211,238,0.7)', ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
    <path d={d} stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const FishIcon = () => (
  <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
    <path d="M8 24C8 24 4 18 4 24C4 30 8 24 8 24Z" fill="rgba(34,211,238,0.6)" />
    <path d="M8 24C12 16 20 12 28 14C36 16 40 22 38 28C36 34 28 36 20 32C14 29 10 27 8 24Z" fill="rgba(34,211,238,0.22)" stroke="rgba(34,211,238,0.8)" strokeWidth={1} />
    <circle cx={34} cy={20} r={2} fill="rgba(34,211,238,0.9)" />
    <path d="M40 16L44 12M40 24L44 24M40 32L44 36" stroke="rgba(34,211,238,0.5)" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
)

export const WhaleIcon = () => (
  <svg width={28} height={28} viewBox="0 0 32 32" fill="none">
    <path d="M4 18C4 18 2 12 6 10C10 8 14 10 18 12C22 14 26 14 28 12C28 12 30 20 26 22C22 24 18 20 14 20C10 20 6 22 4 18Z" fill="rgba(34,211,238,0.18)" stroke="rgba(34,211,238,0.7)" strokeWidth={1} />
    <circle cx={8} cy={16} r={1.5} fill="rgba(34,211,238,0.8)" />
  </svg>
)

export const DnaIcon = () => (
  <svg width={28} height={28} viewBox="0 0 32 32" fill="none">
    <path d="M12 4C12 4 20 8 20 16C20 24 12 28 12 28" stroke="rgba(34,211,238,0.7)" strokeWidth={1.5} strokeLinecap="round" />
    <path d="M20 4C20 4 12 8 12 16C12 24 20 28 20 28" stroke="rgba(103,232,249,0.5)" strokeWidth={1.5} strokeLinecap="round" />
    <line x1={12} y1={10} x2={20} y2={10} stroke="rgba(34,211,238,0.4)" strokeWidth={1} />
    <line x1={12} y1={16} x2={20} y2={16} stroke="rgba(34,211,238,0.4)" strokeWidth={1} />
    <line x1={12} y1={22} x2={20} y2={22} stroke="rgba(34,211,238,0.4)" strokeWidth={1} />
  </svg>
)

export const VirusIcon = () => (
  <svg width={28} height={28} viewBox="0 0 32 32" fill="none">
    <circle cx={16} cy={16} r={7} stroke="rgba(34,211,238,0.7)" strokeWidth={1.5} />
    <circle cx={16} cy={16} r={3} fill="rgba(34,211,238,0.12)" />
    <line x1={16} y1={2}  x2={16} y2={7}  stroke="rgba(34,211,238,0.5)" strokeWidth={1.5} strokeLinecap="round" />
    <line x1={16} y1={25} x2={16} y2={30} stroke="rgba(34,211,238,0.5)" strokeWidth={1.5} strokeLinecap="round" />
    <line x1={2}  y1={16} x2={7}  y2={16} stroke="rgba(34,211,238,0.5)" strokeWidth={1.5} strokeLinecap="round" />
    <line x1={25} y1={16} x2={30} y2={16} stroke="rgba(34,211,238,0.5)" strokeWidth={1.5} strokeLinecap="round" />
    <circle cx={16} cy={3}  r={1.5} fill="rgba(34,211,238,0.7)" />
    <circle cx={16} cy={29} r={1.5} fill="rgba(34,211,238,0.7)" />
    <circle cx={3}  cy={16} r={1.5} fill="rgba(34,211,238,0.7)" />
    <circle cx={29} cy={16} r={1.5} fill="rgba(34,211,238,0.7)" />
  </svg>
)

export const TrophyIcon  = (props) => <Icon d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4M6 2h12v7a6 6 0 0 1-12 0V2ZM12 15v7M8 22h8" size={16} {...props} />
export const StarIcon    = (props) => <Icon d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" size={20} {...props} />
export const HeartIcon   = (props) => <Icon d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" size={20} {...props} />
export const UserIcon    = (props) => <Icon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" size={20} {...props} />
export const GradIcon    = (props) => <Icon d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5" size={20} {...props} />
export const LayersIcon  = (props) => <Icon d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" size={28} {...props} />
export const PosterIcon  = () => (
  <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
    <rect x={3} y={3} width={18} height={18} rx={2} stroke="rgba(34,211,238,0.7)" strokeWidth={1.5} />
    <path d="M7 8h10M7 12h10M7 16h6" stroke="rgba(34,211,238,0.5)" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
)
export const CupIcon     = () => (
  <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4M6 2h12v7a6 6 0 0 1-12 0V2ZM12 15v7M8 22h8" stroke="rgba(34,211,238,0.7)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const MailIcon     = (props) => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x={2} y={4} width={20} height={16} rx={2} stroke="currentColor" strokeWidth={1.5} />
    <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
)

export const GithubIcon = (props) => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.38 6.84 9.74.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.88 1.54 2.3 1.1 2.86.84.09-.66.34-1.1.62-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.8c.82.004 1.65.11 2.42.32 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.64 1.02 2.76 0 3.95-2.34 4.81-4.57 5.07.35.31.66.92.66 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
      fill="currentColor"
    />
  </svg>
)

export const LinkedInIcon = (props) => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x={2} y={2} width={20} height={20} rx={3} stroke="currentColor" strokeWidth={1.5} />
    <path d="M7 10V17M7 7V7.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    <path d="M11 17V13C11 11.34 12.34 10 14 10C15.66 10 17 11.34 17 13V17M11 10V17" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
)
export const PhoneIcon    = (props) => <Icon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" size={15} {...props} />
export const AnchorIcon   = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <circle cx={12} cy={5} r={3} stroke="rgba(34,211,238,0.5)" strokeWidth={1.5} />
    <line x1={12} y1={8} x2={12} y2={22} stroke="rgba(34,211,238,0.5)" strokeWidth={1.5} strokeLinecap="round" />
    <path d="M5 15C5 18.87 8.13 22 12 22C15.87 22 19 18.87 19 15" stroke="rgba(34,211,238,0.3)" strokeWidth={1.5} strokeLinecap="round" />
    <line x1={5} y1={11} x2={19} y2={11} stroke="rgba(34,211,238,0.25)" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
)

export const BubbleIcon = ({ size = 8, opacity = 0.4 }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" fill="none">
    <circle cx={4} cy={4} r={3} stroke={`rgba(34,211,238,${opacity})`} strokeWidth={1} />
    <circle cx={3} cy={3} r={0.8} fill={`rgba(34,211,238,${opacity * 0.6})`} />
  </svg>
)

// Map project num → icon component
export const PROJECT_ICONS = {
  '01': WhaleIcon,
  '02': DnaIcon,
  '03': VirusIcon,
}

// News icons in order
export const NEWS_ICONS = [CupIcon, LayersIcon, PosterIcon]

// Contact icons in order
export const CONTACT_ICONS = [MailIcon, LinkedInIcon, PhoneIcon, GithubIcon]

// Leadership icons in order
export const LEADERSHIP_ICONS = [UserIcon, TrophyIcon, GradIcon, HeartIcon]
