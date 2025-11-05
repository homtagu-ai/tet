// Helper function to get correct image path for both local and GitHub Pages
export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/tet' : '';
  return `${basePath}${path}`;
}

