import { absoluteUrl } from "@/lib/seo";

// Autores do blog, pelo nome usado no frontmatter dos posts.
// `profilePath` é onde a bio está publicada; `sameAs`, os perfis públicos (LinkedIn etc.).
type Author = {
  name: string;
  photo: string; // quadrada, recortada no rosto
  profilePath: string;
  sameAs: string[];
};

const AUTHORS: Record<string, Author> = {
  "Jomar Hanum": {
    name: "Jomar Hanum",
    photo: "/images/autor/jomar-hanum.jpg",
    profilePath: "/sobre#jomar-hanum",
    sameAs: ["https://www.linkedin.com/in/jomar-hanum", "https://www.instagram.com/jomar.hanum"],
  },
};

export function getAuthor(name: string): Author | undefined {
  return AUTHORS[name];
}

export function getAuthorPhoto(name: string): string | undefined {
  return AUTHORS[name]?.photo;
}

// @id estável do autor no JSON-LD, para os posts e a página Sobre apontarem para a mesma pessoa.
export function authorId(author: Author): string {
  return absoluteUrl(author.profilePath);
}
