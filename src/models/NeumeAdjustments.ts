import {
  Neume,
  TimeNeume,
  QuantitativeNeume,
  Fthora,
  Accidental,
  TempoSign,
  VocalExpressionNeume,
  RootSign,
  Note,
  GorgonNeume,
  ModeSign,
} from '@/models/Neumes';

export interface NeumeAdjustmentOffset {
  x: number;
  y: number;
}

export interface NeumeAdjustment {
  isPairedWith: Neume[];
  offset: NeumeAdjustmentOffset;
}

export const gorgonAdjustmentMap = new Map<GorgonNeume, NeumeAdjustment[]>([
  [
    GorgonNeume.Gorgon_Top,
    [
      {
        isPairedWith: [QuantitativeNeume.OligonPlusKentemata],
        offset: { x: 0, y: -5 },
      },
      {
        isPairedWith: [QuantitativeNeume.OligonPlusKentemataPlusHypsiliLeft],
        offset: { x: 2, y: -3 },
      },
      {
        isPairedWith: [QuantitativeNeume.OligonPlusKentemataPlusHypsiliRight],
        offset: { x: -4, y: -3 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusHypsiliPlusKentimaHorizontal,
          QuantitativeNeume.PetastiPlusOligon,
          QuantitativeNeume.PetastiWithIson,
        ],
        offset: { x: 0, y: -7 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusKentimaAbove,
          QuantitativeNeume.OligonPlusHypsiliPlusKentimaVertical,
        ],
        offset: { x: 8, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.PetastiPlusDoubleHypsili],
        offset: { x: 2, y: 0 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.PetastiPlusKentimaAbove,
          QuantitativeNeume.PetastiPlusHypsiliPlusKentimaHorizontal,
        ],
        offset: { x: 0, y: -9 },
      },
      {
        isPairedWith: [QuantitativeNeume.PetastiPlusHypsiliLeft],
        offset: { x: 5, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.PetastiPlusApostrophos],
        offset: { x: 0, y: -8 },
      },
      {
        isPairedWith: [QuantitativeNeume.OligonPlusApostrophos],
        offset: { x: 0, y: -8 },
      },
      {
        isPairedWith: [QuantitativeNeume.OligonPlusKentima],
        offset: { x: -7, y: 0 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.PetastiPlusElaphron,
          QuantitativeNeume.PetastiPlusElaphronPlusApostrophos,
        ],
        offset: { x: 0, y: -12 },
      },
    ],
  ],

  [
    GorgonNeume.Gorgon_Bottom,
    [
      {
        isPairedWith: [QuantitativeNeume.OligonPlusKentima],
        offset: { x: -7, y: 0 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusKentimaBelow,
          QuantitativeNeume.KentemataPlusOligon,
        ],
        offset: { x: -5, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.ElaphronPlusApostrophos],
        offset: { x: 0, y: 4 },
      },
    ],
  ],

  [
    GorgonNeume.Gorgon_TopRight,
    [
      { isPairedWith: [QuantitativeNeume.Hyporoe], offset: { x: 8, y: 4 } },
      { isPairedWith: [QuantitativeNeume.Apostrophos], offset: { x: 0, y: 4 } },
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusIsonPlusKentemata,
          QuantitativeNeume.OligonPlusApostrophosPlusKentemata,
          QuantitativeNeume.OligonPlusElaphronPlusKentemata,
          QuantitativeNeume.OligonPlusElaphronPlusApostrophosPlusKentemata,
          QuantitativeNeume.OligonPlusHamiliPlusKentemata,
          QuantitativeNeume.OligonPlusRunningElaphronPlusKentemata,
        ],
        offset: { x: -3, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.PetastiPlusHypsiliPlusKentimaVertical],
        offset: { x: 4, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.DoubleHamili],
        offset: { x: 0, y: -4 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.HamiliPlusElaphron,
          QuantitativeNeume.HamiliPlusElaphronPlusApostrophos,
        ],
        offset: { x: 0, y: -4 },
      },
    ],
  ],

  [
    GorgonNeume.Digorgon_Right,
    [{ isPairedWith: [QuantitativeNeume.Hyporoe], offset: { x: 5, y: 6 } }],
  ],

  [
    GorgonNeume.Trigorgon_Right,
    [{ isPairedWith: [QuantitativeNeume.Hyporoe], offset: { x: 3, y: 6 } }],
  ],
]);

gorgonAdjustmentMap.set(
  GorgonNeume.GorgonDottedLeft,
  gorgonAdjustmentMap.get(GorgonNeume.Gorgon_Top)!,
);
gorgonAdjustmentMap.set(
  GorgonNeume.GorgonDottedRight,
  gorgonAdjustmentMap.get(GorgonNeume.Gorgon_Top)!,
);

gorgonAdjustmentMap.set(
  GorgonNeume.GorgonDottedLeft_Right,
  gorgonAdjustmentMap.get(GorgonNeume.Gorgon_TopRight)!,
);
gorgonAdjustmentMap.set(
  GorgonNeume.GorgonDottedRight_Right,
  gorgonAdjustmentMap.get(GorgonNeume.Gorgon_TopRight)!,
);

export const timeAdjustmentMap = new Map<TimeNeume, NeumeAdjustment[]>([
  [
    TimeNeume.Klasma_Top,
    [
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusKentimaAbove,
          QuantitativeNeume.OligonPlusHypsiliPlusKentimaHorizontal,
          QuantitativeNeume.OligonPlusHypsiliPlusKentimaVertical,
        ],
        offset: { x: -13, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.OligonPlusHypsiliRight],
        offset: { x: -7, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.OligonPlusHypsiliLeft],
        offset: { x: 4, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.OligonPlusApostrophos],
        offset: { x: -4, y: -9 },
      },
      {
        isPairedWith: [QuantitativeNeume.OligonPlusKentima],
        offset: { x: -8, y: 0 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.HamiliPlusApostrophos,
          QuantitativeNeume.HamiliPlusElaphronPlusApostrophos,
        ],
        offset: { x: 0, y: -4 },
      },
    ],
  ],
  [
    TimeNeume.Klasma_TopRight,
    [
      {
        isPairedWith: [
          QuantitativeNeume.HamiliPlusElaphron,
          QuantitativeNeume.HamiliPlusElaphronPlusApostrophos,
        ],
        offset: { x: 0, y: -6 },
      },
      {
        isPairedWith: [QuantitativeNeume.DoubleHamili],
        offset: { x: 0, y: -8 },
      },
    ],
  ],
  [
    TimeNeume.Klasma_Bottom,
    [
      {
        isPairedWith: [
          QuantitativeNeume.Petasti,
          QuantitativeNeume.PetastiPlusApostrophos,
          QuantitativeNeume.PetastiPlusDoubleHypsili,
          QuantitativeNeume.PetastiPlusElaphron,
          QuantitativeNeume.PetastiPlusElaphronPlusApostrophos,
          QuantitativeNeume.PetastiPlusHypsiliLeft,
          QuantitativeNeume.PetastiPlusHypsiliRight,
          QuantitativeNeume.PetastiPlusHypsiliPlusKentimaHorizontal,
          QuantitativeNeume.PetastiPlusHypsiliPlusKentimaVertical,
          QuantitativeNeume.PetastiWithIson,
          QuantitativeNeume.PetastiPlusKentimaAbove,
          QuantitativeNeume.PetastiPlusOligon,
        ],
        offset: { x: 9, y: 2 },
      },
    ],
  ],
  [
    TimeNeume.Hapli,
    [
      {
        isPairedWith: [QuantitativeNeume.Kentemata],
        offset: { x: 9, y: 0 },
      },
    ],
  ],
  [
    TimeNeume.Dipli,
    [
      {
        isPairedWith: [QuantitativeNeume.Kentemata],
        offset: { x: 9, y: 0 },
      },
    ],
  ],
  [
    TimeNeume.Tripli,
    [
      {
        isPairedWith: [QuantitativeNeume.Kentemata],
        offset: { x: 9, y: 0 },
      },
    ],
  ],
]);

export const vocalExpressionAdjustmentMap = new Map<
  VocalExpressionNeume,
  NeumeAdjustment[]
>([
  [
    VocalExpressionNeume.Psifiston,
    [
      {
        isPairedWith: [
          QuantitativeNeume.Petasti,
          QuantitativeNeume.PetastiPlusApostrophos,
          QuantitativeNeume.PetastiPlusDoubleHypsili,
          QuantitativeNeume.PetastiPlusElaphron,
          QuantitativeNeume.PetastiPlusElaphronPlusApostrophos,
          QuantitativeNeume.PetastiPlusHypsiliLeft,
          QuantitativeNeume.PetastiPlusHypsiliRight,
          QuantitativeNeume.PetastiPlusHypsiliPlusKentimaHorizontal,
          QuantitativeNeume.PetastiPlusHypsiliPlusKentimaVertical,
          QuantitativeNeume.PetastiWithIson,
          QuantitativeNeume.PetastiPlusKentimaAbove,
          QuantitativeNeume.PetastiPlusOligon,
        ],
        offset: { x: 7, y: 0 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusIsonPlusKentemata,
          QuantitativeNeume.OligonPlusElaphronPlusKentemata,
          QuantitativeNeume.OligonPlusElaphronPlusApostrophosPlusKentemata,
          QuantitativeNeume.OligonPlusHamiliPlusKentemata,
          QuantitativeNeume.OligonPlusRunningElaphronPlusKentemata,
          QuantitativeNeume.OligonPlusKentima,
        ],
        offset: { x: -6, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.KentemataPlusOligon],
        offset: { x: 0, y: 5 },
      },
    ],
  ],
  [
    VocalExpressionNeume.Antikenoma,
    [
      {
        isPairedWith: [QuantitativeNeume.OligonPlusKentima],
        offset: { x: -8, y: 0 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusKentimaBelow,
          QuantitativeNeume.ElaphronPlusApostrophos,
          QuantitativeNeume.HamiliPlusElaphronPlusApostrophos,
        ],
        offset: { x: 0, y: 4 },
      },
      {
        isPairedWith: [QuantitativeNeume.KentemataPlusOligon],
        offset: { x: 0, y: 6 },
      },
      {
        isPairedWith: [QuantitativeNeume.HamiliPlusApostrophos],
        offset: { x: 0, y: 6 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusIsonPlusKentemata,
          QuantitativeNeume.OligonPlusElaphronPlusKentemata,
          QuantitativeNeume.OligonPlusElaphronPlusApostrophosPlusKentemata,
          QuantitativeNeume.OligonPlusHamiliPlusKentemata,
          QuantitativeNeume.OligonPlusRunningElaphronPlusKentemata,
          QuantitativeNeume.OligonPlusKentima,
        ],
        offset: { x: -6, y: 0 },
      },
    ],
  ],
]);

export const fthoraAdjustmentMap = new Map<Fthora, NeumeAdjustment[]>([
  [
    Fthora.DiatonicPa_TopRight,
    [{ isPairedWith: [ModeSign.Pa], offset: { x: 2, y: -9 } }],
  ],
  [
    Fthora.SoftChromaticThi_TopRight,
    [
      {
        isPairedWith: [ModeSign.Vou, ModeSign.Thi, ModeSign.Ke],
        offset: { x: 0, y: -7 },
      },
    ],
  ],
  [
    Fthora.HardChromaticPa_TopRight,
    [{ isPairedWith: [ModeSign.Pa], offset: { x: -3, y: -7 } }],
  ],
  [
    Fthora.DiatonicNiLow_TopRight,
    [{ isPairedWith: [ModeSign.Ga], offset: { x: -3, y: -9 } }],
  ],
  [
    Fthora.Spathi_TopRight,
    [{ isPairedWith: [Note.Ke], offset: { x: 4, y: 0 } }],
  ],
]);

// Shortcut to enter adjustments for many fthora at once
for (let fthora of Object.values(Fthora)) {
  const adjustments = fthoraAdjustmentMap.get(fthora) || [];
  fthoraAdjustmentMap.set(fthora, adjustments);

  if (fthora.endsWith('TopCenter')) {
    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusHypsiliRight],
      offset: { x: -10, y: 0 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusKentima],
      offset: { x: -6, y: 0 },
    });

    adjustments.push({
      isPairedWith: [
        QuantitativeNeume.OligonPlusHypsiliPlusKentimaHorizontal,
        QuantitativeNeume.PetastiWithIson,
        QuantitativeNeume.PetastiPlusOligon,
        QuantitativeNeume.PetastiPlusHypsiliPlusKentimaHorizontal,
        QuantitativeNeume.PetastiPlusHypsiliPlusKentimaHorizontal,
        QuantitativeNeume.PetastiPlusApostrophos,
      ],
      offset: { x: 0, y: -10 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusIsonPlusKentemata],
      offset: { x: -15, y: -5 },
    });

    adjustments.push({
      isPairedWith: [
        QuantitativeNeume.OligonPlusApostrophosPlusKentemata,
        QuantitativeNeume.OligonPlusHamiliPlusKentemata,
      ],
      offset: { x: -15, y: -10 },
    });

    adjustments.push({
      isPairedWith: [
        QuantitativeNeume.OligonPlusElaphronPlusKentemata,
        QuantitativeNeume.OligonPlusElaphronPlusApostrophosPlusKentemata,
      ],
      offset: { x: -22, y: -13 },
    });

    adjustments.push({
      isPairedWith: [
        QuantitativeNeume.PetastiPlusElaphron,
        QuantitativeNeume.PetastiPlusElaphronPlusApostrophos,
      ],
      offset: { x: 0, y: -14 },
    });

    adjustments.push({
      isPairedWith: [
        QuantitativeNeume.Elaphron,
        QuantitativeNeume.ElaphronPlusApostrophos,
        QuantitativeNeume.RunningElaphron,
      ],
      offset: { x: 0, y: -3 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.PetastiPlusHypsiliRight],
      offset: { x: 0, y: -7 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.PetastiPlusHypsiliPlusKentimaVertical],
      offset: { x: -9, y: -8 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusDoubleHypsili],
      offset: { x: 4, y: -17 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.PetastiPlusDoubleHypsili],
      offset: { x: 4, y: -20 },
    });
  } else if (fthora.endsWith('TopRight')) {
    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusKentemata],
      offset: { x: 5, y: 0 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusKentimaAbove],
      offset: { x: 2, y: 0 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusApostrophos],
      offset: { x: 3, y: 0 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusHypsiliPlusKentimaVertical],
      offset: { x: 4, y: 0 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.PetastiPlusKentimaAbove],
      offset: { x: 0, y: -5 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.PetastiPlusHypsiliLeft],
      offset: { x: 5, y: 0 },
    });

    adjustments.push({
      isPairedWith: [
        QuantitativeNeume.HamiliPlusElaphron,
        QuantitativeNeume.HamiliPlusElaphronPlusApostrophos,
      ],
      offset: { x: 0, y: -7 },
    });

    adjustments.push({
      isPairedWith: [QuantitativeNeume.DoubleHamili],
      offset: { x: 0, y: -10 },
    });
  } else if (fthora.endsWith('BottomCenter')) {
    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusKentimaBelow],
      offset: { x: -5, y: 0 },
    });
    adjustments.push({
      isPairedWith: [QuantitativeNeume.OligonPlusKentima],
      offset: { x: -6, y: 0 },
    });
    adjustments.push({
      isPairedWith: [
        QuantitativeNeume.ElaphronPlusApostrophos,
        QuantitativeNeume.HamiliPlusElaphronPlusApostrophos,
      ],
      offset: { x: 0, y: 1 },
    });
    adjustments.push({
      isPairedWith: [QuantitativeNeume.HamiliPlusApostrophos],
      offset: { x: -5, y: 0 },
    });
    adjustments.push({
      isPairedWith: [QuantitativeNeume.KentemataPlusOligon],
      offset: { x: -8, y: 0 },
    });
  }
}

export const rootSignAdjustmentMap = new Map<RootSign, NeumeAdjustment[]>([
  [
    RootSign.Zygos,
    [{ isPairedWith: [Note.Vou, Note.Thi], offset: { x: 0, y: 3 } }],
  ],
]);

export const quantitativeNeumeAdjustmentMap = new Map<
  QuantitativeNeume,
  NeumeAdjustment[]
>([
  [
    QuantitativeNeume.RunningElaphron,
    [
      { isPairedWith: [ModeSign.Ga], offset: { x: 0, y: -7 } },
      { isPairedWith: [ModeSign.DeltaWithDeltaHat], offset: { x: 0, y: -7 } },
    ],
  ],
  [
    QuantitativeNeume.KentemataPlusOligon,
    [
      { isPairedWith: [ModeSign.Vou], offset: { x: 0, y: -7 } },
      { isPairedWith: [ModeSign.Ni], offset: { x: 0, y: -7 } },
    ],
  ],
  [
    QuantitativeNeume.OligonPlusHypsiliRight,
    [{ isPairedWith: [ModeSign.Pa], offset: { x: 0, y: -7 } }],
  ],
]);

export const modeSignAdjustmentMap = new Map<ModeSign, NeumeAdjustment[]>([
  [
    ModeSign.Legetos,
    [{ isPairedWith: [ModeSign.Vou], offset: { x: 0, y: -13 } }],
  ],
  [ModeSign.Tos, [{ isPairedWith: [ModeSign.Vou], offset: { x: 0, y: -13 } }]],
]);

export const accidentalAdjustmentMap = new Map<Accidental, NeumeAdjustment[]>([
  [
    Accidental.Flat_2_Right,
    [
      {
        isPairedWith: [
          QuantitativeNeume.PetastiWithIson,
          QuantitativeNeume.PetastiPlusOligon,
          QuantitativeNeume.HamiliPlusElaphron,
          QuantitativeNeume.HamiliPlusElaphronPlusApostrophos,
          QuantitativeNeume.PetastiPlusElaphron,
          QuantitativeNeume.PetastiPlusElaphronPlusApostrophos,
        ],
        offset: { x: 0, y: -6 },
      },
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusHypsiliRight,
          QuantitativeNeume.PetastiPlusHypsiliRight,
          QuantitativeNeume.OligonPlusHypsiliPlusKentimaHorizontal,
          QuantitativeNeume.PetastiPlusHypsiliPlusKentimaHorizontal,
          QuantitativeNeume.PetastiPlusDoubleHypsili,
          QuantitativeNeume.OligonPlusKentemataPlusHypsiliRight,
        ],
        offset: { x: 2, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.DoubleHamili],
        offset: { x: 0, y: -8 },
      },
    ],
  ],
  [
    Accidental.Sharp_2_Left,
    [
      {
        isPairedWith: [
          QuantitativeNeume.OligonPlusIsonPlusKentemata,
          QuantitativeNeume.OligonPlusElaphronPlusKentemata,
          QuantitativeNeume.OligonPlusElaphronPlusApostrophosPlusKentemata,
          QuantitativeNeume.OligonPlusHamiliPlusKentemata,
          QuantitativeNeume.OligonPlusRunningElaphronPlusKentemata,
        ],
        offset: { x: -12, y: 0 },
      },
      {
        isPairedWith: [QuantitativeNeume.Hyporoe, QuantitativeNeume.Kentemata],
        offset: { x: 16, y: 0 },
      },
    ],
  ],
]);

export const getGorgonAdjustments = (neume: GorgonNeume) => {
  return gorgonAdjustmentMap.get(neume);
};

export const getTimeAdjustments = (neume: TimeNeume) => {
  return timeAdjustmentMap.get(neume);
};

export const getVocalExpressionAdjustments = (neume: VocalExpressionNeume) => {
  return vocalExpressionAdjustmentMap.get(neume);
};

export const getFthoraAdjustments = (neume: Fthora) => {
  return fthoraAdjustmentMap.get(neume);
};

export const getRootSignAdjustments = (neume: RootSign) => {
  return rootSignAdjustmentMap.get(neume);
};

export const getQuantitativeNeumeAdjustments = (neume: QuantitativeNeume) => {
  return quantitativeNeumeAdjustmentMap.get(neume);
};

export const getModeSignAdjustments = (neume: ModeSign) => {
  return modeSignAdjustmentMap.get(neume);
};

export const getAccidentalAdjustments = (neume: Accidental) => {
  return accidentalAdjustmentMap.get(neume);
};
