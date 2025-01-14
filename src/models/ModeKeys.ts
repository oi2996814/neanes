import { Fthora, ModeSign, QuantitativeNeume } from '@/models/Neumes';
import { Scale, ScaleNote } from './Scales';

export interface ModeKeyTemplate {
  mode: number;
  scale: Scale;
  scaleNote: ScaleNote;
  martyrias: ModeSign[];
  note?: ModeSign;
  note2?: ModeSign;
  fthora?: Fthora;
  fthora2?: Fthora;
  quantitativeNeumeTop?: ModeSign;
  quantitativeNeumeRight?: QuantitativeNeume;
}

export const modeKeyTemplates: ModeKeyTemplate[] = [
  {
    mode: 1,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Pa,
    martyrias: [ModeSign.AlphaWithDeltaHat],
    note: ModeSign.Pa,
  },
  {
    mode: 1,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ke,
    martyrias: [ModeSign.AlphaWithDeltaHat],
    note: ModeSign.Ke,
  },
  {
    mode: 1,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ke,
    martyrias: [ModeSign.AlphaWithDeltaHat],
    note: ModeSign.Pa,
    quantitativeNeumeRight: QuantitativeNeume.OligonPlusHypsiliRight,
  },
  {
    mode: 1,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ke,
    martyrias: [ModeSign.AlphaWithDeltaHat],
    note: ModeSign.Ke,
    fthora: Fthora.SoftChromaticThi_TopRight,
  },
  {
    mode: 2,
    scale: Scale.SoftChromatic,
    scaleNote: ScaleNote.Thi,
    martyrias: [ModeSign.SoftChromatic2],
    note: ModeSign.Thi,
    fthora: Fthora.SoftChromaticThi_TopRight,
  },
  {
    mode: 2,
    scale: Scale.SoftChromatic,
    scaleNote: ScaleNote.Vou,
    martyrias: [ModeSign.SoftChromatic2],
    note: ModeSign.Vou,
    fthora: Fthora.SoftChromaticThi_TopRight,
  },
  {
    mode: 2,
    scale: Scale.HardChromatic,
    scaleNote: ScaleNote.Pa,
    martyrias: [ModeSign.SoftChromatic2],
    note: ModeSign.Pa,
    fthora: Fthora.HardChromaticPa_TopRight,
  },
  {
    mode: 3,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ga,
    martyrias: [ModeSign.Nana],
    note: ModeSign.Ga,
  },
  {
    mode: 3,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ga,
    martyrias: [ModeSign.NanaOld],
    note: ModeSign.Ga,
  },
  {
    mode: 3,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Pa,
    martyrias: [ModeSign.Nana],
    note: ModeSign.Ga,
    quantitativeNeumeRight: QuantitativeNeume.RunningElaphron,
  },
  {
    mode: 3,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ga,
    martyrias: [ModeSign.Nana],
    note: ModeSign.Ga,
    fthora: Fthora.DiatonicNiLow_TopRight,
  },
  {
    mode: 4,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Thi,
    martyrias: [ModeSign.DeltaWithDeltaHat],
    note: ModeSign.Thi,
  },
  {
    mode: 4,
    scale: Scale.SoftChromatic,
    scaleNote: ScaleNote.Thi,
    martyrias: [ModeSign.DeltaWithDeltaHat],
    note: ModeSign.Thi,
    fthora: Fthora.SoftChromaticThi_TopRight,
  },
  {
    mode: 4,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Pa,
    martyrias: [ModeSign.DeltaWithDeltaHat],
    note: ModeSign.Pa,
  },
  {
    mode: 4,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Vou,
    martyrias: [ModeSign.DeltaWithDeltaHat],
    quantitativeNeumeRight: QuantitativeNeume.RunningElaphron,
  },
  {
    mode: 4,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Vou,
    martyrias: [ModeSign.Legetos, ModeSign.Tos],
    note: ModeSign.Vou,
  },
  {
    mode: 5,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Pa,
    martyrias: [ModeSign.Alpha],
    note: ModeSign.Pa,
  },
  {
    mode: 5,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ke,
    martyrias: [ModeSign.Alpha],
    note: ModeSign.Ke,
    quantitativeNeumeTop: ModeSign.OligonPlusHypsili,
  },
  {
    mode: 6,
    scale: Scale.HardChromatic,
    scaleNote: ScaleNote.Pa,
    martyrias: [ModeSign.SoftChromatic6],
    note: ModeSign.Pa,
    fthora: Fthora.HardChromaticPa_TopRight,
  },
  {
    mode: 6,
    scale: Scale.SoftChromatic,
    scaleNote: ScaleNote.Vou,
    martyrias: [ModeSign.SoftChromatic6],
    note: ModeSign.Vou,
    fthora: Fthora.SoftChromaticThi_TopRight,
  },
  {
    mode: 6,
    scale: Scale.SoftChromatic,
    scaleNote: ScaleNote.Vou,
    martyrias: [ModeSign.SoftChromatic6],
    note: ModeSign.Vou,
    fthora: Fthora.SoftChromaticThi_TopRight,
    quantitativeNeumeRight: QuantitativeNeume.KentemataPlusOligon,
  },
  {
    mode: 6,
    scale: Scale.HardChromatic,
    scaleNote: ScaleNote.Thi,
    martyrias: [ModeSign.SoftChromatic6],
    note: ModeSign.Pa,
    note2: ModeSign.Thi,
    fthora: Fthora.HardChromaticPa_TopRight,
    quantitativeNeumeTop: ModeSign.OligonPlusKentima,
  },
  {
    mode: 7,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ga,
    martyrias: [ModeSign.VarysZo],
    note: ModeSign.Ga,
  },
  {
    mode: 7,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Zo,
    martyrias: [ModeSign.VarysZo],
    note: ModeSign.Zo,
  },
  {
    mode: 8,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ni,
    martyrias: [ModeSign.Delta],
    note: ModeSign.Ni,
  },
  {
    mode: 8,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Ga,
    martyrias: [ModeSign.Delta],
    quantitativeNeumeRight: QuantitativeNeume.OligonPlusKentimaAbove,
    fthora2: Fthora.DiatonicNiLow_TopRight,
  },
  {
    mode: 8,
    scale: Scale.Diatonic,
    scaleNote: ScaleNote.Vou,
    martyrias: [ModeSign.Delta],
    note: ModeSign.Ni,
    quantitativeNeumeRight: QuantitativeNeume.KentemataPlusOligon,
  },
];
