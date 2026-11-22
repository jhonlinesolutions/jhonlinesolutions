// Gera os Reels (public/reel/<slug>.mp4) dos posts mais recentes do blog, antes do build.
// O n8n ([CONTEUDO] Postagem diária) publica esse MP4 no Instagram/Facebook nos dias de Reel.
// Precisa do ffmpeg (no build da Vercel vem do pacote ffmpeg-static; localmente, defina FFMPEG se ele não estiver instalado). Sem ffmpeg, só avisa e segue.
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { frontmatter, gerarReel, temFfmpeg } from './reel/core.mjs';

const RAIZ = process.env.REEL_RAIZ || process.cwd();
const POSTS = join(RAIZ, 'content/blog');
const SAIDA = process.env.REEL_SAIDA || join(RAIZ, 'public/reel');
const QUANTOS = 3; // só os mais recentes: o n8n usa o do post do dia

const sora = { familia: 'Sora', arquivo: 'Sora.ttf' };
const inter = { familia: 'Inter', arquivo: 'Inter.ttf' };

const TEMA = {
  titulo: { fonte: sora, peso: 'Bold', tamanho: 80 },
  corpo: { fonte: inter, peso: 'Medium', tamanho: 56 },
  corpoCor: '#e8eaf3',
  etiquetaFonte: { fonte: sora, peso: 'Bold', tamanho: 28 },
  etiqueta: 'BLOG · JH ONLINE SOLUTIONS', etiquetaCor: '#ffffff', etiquetaFundo: '#4753d6',
  acento: '#4dd8e6', sombra: '#05070d',
  fundoResumo: ['#1b2436', '#05070d', 0.5, 1],
  logoResumo: join(RAIZ, 'public/brand/logo-mark.png'), logoResumoLargura: 170,
  chamada: {
    fundo: ['#ffffff', '#e8eaf3', 0.3, 1],
    logo: join(RAIZ, 'public/brand/logo-full.png'), logoLargura: 620,
    frase: 'Tecnologia a favor do seu negócio', fraseTamanho: 76, corFrase: '#0a0e1a',
    apoio: 'Software sob medida, nuvem, segurança e automação com IA para sua empresa.', corApoio: '#2a3346',
    site: 'jhonlinesolutions.com.br', corSite: '#ffffff', fundoSite: '#4753d6',
    extra: '',
  },
};

if (!temFfmpeg()) {
  console.warn('reels: ffmpeg não encontrado, Reels não gerados');
  process.exit(0);
}

const posts = (existsSync(POSTS) ? readdirSync(POSTS) : [])
  .filter((f) => /\.mdx?$/.test(f))
  .map((f) => {
    const d = frontmatter(join(POSTS, f));
    const capa = d.cover ? join(RAIZ, 'public', d.cover.replace(/^\//, '')) : '';
    return { slug: f.replace(/\.mdx?$/, ''), titulo: d.title, resumo: d.description, data: String(d.date || ''), capa, rascunho: d.draft === 'true' };
  })
  .filter((p) => !p.rascunho && p.titulo && p.resumo && p.capa && existsSync(p.capa))
  .sort((a, b) => b.data.localeCompare(a.data))
  .slice(0, QUANTOS);

rmSync(SAIDA, { recursive: true, force: true });
mkdirSync(SAIDA, { recursive: true });
for (const p of posts) {
  const t0 = Date.now();
  const dur = await gerarReel(p, TEMA, join(SAIDA, `${p.slug}.mp4`));
  console.log(`reels: ${p.slug}.mp4 (${dur.toFixed(1)} s de vídeo, ${((Date.now() - t0) / 1000).toFixed(1)} s para gerar)`);
}
