const blogPlaceholder = 'data:image/svg+xml;base64,' + btoa(`
<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0"/>
  <rect width="100%" height="100%" fill="url(#grid)" />
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e0e0" stroke-width="1"/>
    </pattern>
  </defs>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666666" text-anchor="middle" dominant-baseline="middle">
    AI Research Blog
  </text>
  <text x="50%" y="58%" font-family="Arial" font-size="16" fill="#999999" text-anchor="middle" dominant-baseline="middle">
    Image placeholder
  </text>
</svg>
`);

export default blogPlaceholder; 