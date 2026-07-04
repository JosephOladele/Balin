const u = (id: string, w: number, extra = '') =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80${extra}`

export const HERO = {
  poster: u('1490481651871-ab68de25d43d', 1920),
  video:
    'https://videos.pexels.com/video-files/12014260/12014260-hd_1920_1080_25fps.mp4',
}

export const MANIFESTO_IMAGES = {
  a: {
    src: u('1524504388940-b1c1722653e1', 1100),
    alt: 'Model in profile, studio light falling across an ivory garment',
    caption: 'Fig. I — Toile, atelier balin',
  },
  b: {
    src: u('1539109136881-3be0616acf4b', 900),
    alt: 'Model in a sand-toned coat against a neutral backdrop',
    caption: 'Fig. II — Le Manteau, essayage',
  },
}

export interface Look {
  id: string
  num: string
  name: string
  tag: string
  img: string
  alt: string
  wide?: boolean
}

export const LOOKS: Look[] = [
  {
    id: 'bruma',
    num: '01',
    name: 'Le Manteau Bruma',
    tag: 'Double-faced cashmere',
    img: u('1509631179647-0177331693ae', 1000),
    alt: 'Model in a sculptural crimson gown, caught mid-movement',
  },
  {
    id: 'cendre',
    num: '02',
    name: 'La Robe Cendre',
    tag: 'Silk georgette',
    img: u('1515886657613-9f3515b0c78f', 1000),
    alt: 'Model in a moss-green coat standing against a pale wall',
  },
  {
    id: 'minuit',
    num: '03',
    name: 'Le Tailleur Minuit',
    tag: 'Virgin wool, horn buttons',
    img: u('1529139574466-a303027c1d8b', 1400),
    alt: 'Model walking a sunlit street in tailored monochrome',
    wide: true,
  },
  {
    id: 'voile',
    num: '04',
    name: 'La Chemise Voile',
    tag: 'Cotton voile',
    img: u('1496747611176-843222e1e57c', 1000),
    alt: 'Two models in soft neutral layers, editorial pose',
  },
  {
    id: 'sable',
    num: '05',
    name: 'Le Trench Sable',
    tag: 'Bonded gabardine',
    img: u('1469334031218-e382a71b716b', 1000),
    alt: 'Model in sunglasses and a light trench, caught in golden light',
  },
  {
    id: 'nocturne',
    num: '06',
    name: 'La Robe Nocturne',
    tag: 'Bias-cut satin',
    img: u('1537832816519-689ad163238b', 1000),
    alt: 'Model in a deep red suit against a dark ground',
  },
]

export const ATELIER = {
  img: u('1558769132-cb1aea458c5e', 1200),
  alt: 'Extreme close-up of layered fabric, seams and texture',
  captions: [
    'Hand-finished seams',
    'Double-faced cashmere',
    'Horn buttons, matte',
  ],
}

export const CINEMA = {
  poster: u('1506629082955-511b1aa562c8', 1920),
  video:
    'https://videos.pexels.com/video-files/5821502/5821502-hd_1920_1080_25fps.mp4',
}

export interface Article {
  id: string
  index: string
  kicker: string
  date: string
  title: string
  excerpt: string
  img: string
  alt: string
  feature?: boolean
}

export const ARTICLES: Article[] = [
  {
    id: 'silence',
    index: 'Nº 01',
    kicker: 'Essai',
    date: 'Juillet 2026',
    title: 'Notes on Silence',
    excerpt:
      'On restraint as a design language — why the house removes before it adds, and what remains when everything unnecessary is gone.',
    img: u('1479064555552-3ef4979f8908', 1600),
    alt: 'Man in tailored coat photographed against fog',
    feature: true,
  },
  {
    id: 'cloth',
    index: 'Nº 02',
    kicker: 'Atelier',
    date: 'Juin 2026',
    title: 'The Weight of Cloth',
    excerpt:
      'Twelve metres of double-faced cashmere, four hands, three days. Inside the making of the Bruma coat.',
    img: u('1445205170230-053b83016050', 900),
    alt: 'Garments hanging in sequence on a rail',
  },
  {
    id: 'paris',
    index: 'Nº 03',
    kicker: 'Carnet',
    date: 'Juin 2026',
    title: 'Paris, 6h42',
    excerpt:
      'The city before the city wakes — a walk from the atelier to the Seine, photographed in one roll of film.',
    img: u('1487222477894-8943e31ef7b2', 900),
    alt: 'Figure crossing an empty Parisian street at dawn',
  },
  {
    id: 'archive',
    index: 'Nº 04',
    kicker: 'Archive',
    date: 'Mai 2026',
    title: 'Édition Nº 6, Revisited',
    excerpt:
      'A look back at last season’s campaign — the images that survived the edit, and the ones that almost did.',
    img: u('1503342217505-b0a15ec3261c', 900),
    alt: 'Model in a mustard jacket looking over her shoulder',
  },
]

export const NAV_LINKS = [
  { label: 'La Maison', href: '#maison' },
  { label: 'La Collection', href: '#collection' },
  { label: "L'Atelier", href: '#atelier' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]
