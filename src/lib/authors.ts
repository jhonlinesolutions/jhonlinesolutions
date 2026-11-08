// Foto (quadrada, recortada no rosto) de cada autor do blog, pelo nome usado no frontmatter.
const AUTHOR_PHOTOS: Record<string, string> = {
  "Jomar Hanum": "/images/autor/jomar-hanum.jpg",
};

export function getAuthorPhoto(name: string): string | undefined {
  return AUTHOR_PHOTOS[name];
}
