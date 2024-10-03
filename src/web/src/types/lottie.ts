interface LottieKeyframe {
  i?: { x: number[]; y: number[] };
  o?: { x: number[]; y: number[] };
  t: number;
  s: number[];
  to?: number[];
  ti?: number[];
}

interface LottieTransform {
  a: { a: number; k: number[]; ix: number };
  p: { a: number; k: LottieKeyframe[]; ix: number; l: number };
  s: { a: number; k: number[]; ix: number };
  r: { a: number; k: number; ix: number };
  o: { a: number; k: number; ix: number };
}

interface LottieLayer {
  ddd: number;
  ind: number;
  ty: number;
  nm: string;
  sr: number;
  ks: LottieTransform;
  bm: number;
}

interface LottieAsset {
  id: string;
  nm: string;
  fr: number;
  layers: LottieLayer[];
}

export interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: LottieAsset[];
  layers: LottieLayer[];
}
