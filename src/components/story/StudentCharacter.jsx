export default function StudentCharacter({ mood = 'focused', className = '', label = 'A fictional PEXO student' }) {
    return (<svg className={className} viewBox="0 0 150 172" fill="none" role="img" aria-label={label}>
      <path d="M25 76C18 47 39 15 75 19c31 4 51 31 47 58-4 26-25 37-51 35-26-2-40-10-46-36Z" fill="#F6E984" stroke="#171821" strokeWidth="3"/>
      <ellipse cx="77" cy="153" rx="42" ry="8" fill="#171821" opacity=".13"/>
      <path d="M34 147c1-34 18-51 45-51 28 0 43 18 45 51H34Z" fill="#2455FF" stroke="#171821" strokeWidth="3.5" strokeLinejoin="round"/>
      <path d="M55 47c0-17 11-28 27-27 17 1 27 13 26 30v15c0 18-11 30-27 29-17-1-27-13-26-31V47Z" fill="#FFB98B" stroke="#171821" strokeWidth="3"/>
      <path d="M53 53c-6-14 1-31 15-37 5-11 24-12 29-2 12-3 21 8 17 20-1 6-4 11-9 15-6-6-10-11-12-17-8 10-22 16-40 17Z" fill="#27234D" stroke="#171821" strokeWidth="3" strokeLinejoin="round"/>
      {mood === 'overwhelmed' ? (<>
          <path d="m66 59 7 2m17-2 7-2" stroke="#171821" strokeWidth="2.7" strokeLinecap="round"/>
          <circle cx="71" cy="66" r="1.8" fill="#171821"/><circle cx="94" cy="66" r="1.8" fill="#171821"/>
          <path d="M77 79c4-7 10-7 15 0" stroke="#171821" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M118 69c6 8 7 12 1 15-5-2-6-7-1-15Z" fill="#93B5FF" stroke="#171821" strokeWidth="1.5"/>
        </>) : mood === 'confident' ? (<>
          <path d="m66 61 7-2m17 1 7 2" stroke="#171821" strokeWidth="2.7" strokeLinecap="round"/>
          <path d="M69 67v1m24-1v1" stroke="#171821" strokeWidth="3" strokeLinecap="round"/>
          <path d="M76 73c5 7 12 7 18 0" stroke="#171821" strokeWidth="2.5" strokeLinecap="round"/>
        </>) : (<>
          <path d="m67 62 7-1m17 0 7 1" stroke="#171821" strokeWidth="2.7" strokeLinecap="round"/>
          <circle cx="71" cy="68" r="1.8" fill="#171821"/><circle cx="94" cy="68" r="1.8" fill="#171821"/>
          <path d="M77 78c4 3 9 3 13 0" stroke="#171821" strokeWidth="2.5" strokeLinecap="round"/>
        </>)}
      <path d="M58 109 46 131m53-22 12 22" stroke="#171821" strokeWidth="7" strokeLinecap="round"/>
      <rect x="45" y="124" width="69" height="40" rx="6" fill="#FF795D" stroke="#171821" strokeWidth="3"/>
      <path d="M38 164h84l-5 6H44l-6-6Z" fill="#FFFCF5" stroke="#171821" strokeWidth="3" strokeLinejoin="round"/>
      <path d="m119 41 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#FF795D" stroke="#171821" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M26 107h10m-5-5v10" stroke="#171821" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>);
}
