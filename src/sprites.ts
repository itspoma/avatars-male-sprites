import Color from '@dicebear/avatars/lib/model/color';
import ColorCollection from '@dicebear/avatars/lib/model/color/collection';

import Sprite from '@dicebear/avatars/lib/model/sprite';
import SpriteCollection from '@dicebear/avatars/lib/model/sprite/collection';

import LightnessDarker from '@dicebear/avatars/lib/model/color/collection/modifier/lightness/darker';
import LightnessBrighter from '@dicebear/avatars/lib/model/color/collection/modifier/lightness/brighter';
import LightnessDifference from '@dicebear/avatars/lib/model/color/collection/modifier/lightness/difference';

import OpacityVariant from '@dicebear/avatars/lib/model/color/collection/modifier/opacity/variant';

// @ts-ignore
import * as svg from '../assets/sprites.svg';

let skinColor = new ColorCollection([
  new Color('#FFDBAC'),
  new Color('#F5CFA0'),
  new Color('#EAC393'),
  new Color('#E0B687'),
  new Color('#CB9E6E'),
  new Color('#B68655'),
  new Color('#A26D3D'),
  new Color('#8D5524')
]);

let hairColor = new LightnessDifference(
  new ColorCollection([
    new Color('#090806'),
    new Color('#2c222b'),
    new Color('#71635a'),
    new Color('#b7a69e'),
    new Color('#b89778'),
    new Color('#a56b46'),
    new Color('#b55239'),
    new Color('#8d4a43'),
    new Color('#91553d'),
    new Color('#533d32'),
    new Color('#3b3024'),
    new Color('#554838'),
    new Color('#4e433f'),
    new Color('#504444'),
    new Color('#6a4e42'),
    new Color('#a7856a'),
    new Color('#977961')
  ]),
  skinColor,
  17
);

export default new SpriteCollection(
  [
    new Sprite(svg.head, skinColor),
    new Sprite(
      svg.eyes,
      new ColorCollection([
        new Color('#76778b'),
        new Color('#697b94'),
        new Color('#647b90'),
        new Color('#5b7c8b'),
        new Color('#588387')
      ])
    ),
    new Sprite(svg.eyebrows, new LightnessDarker(new LightnessDarker(hairColor, skinColor, 7), hairColor, 10)),
    new Sprite(svg.mustache, new OpacityVariant(new LightnessDarker(hairColor, skinColor, 7), [1, 0.75, 0.5]), 50),
    new Sprite(
      svg.mouth,
      new LightnessDifference(
        new ColorCollection([new Color('#eec1ad'), new Color('#dbac98'), new Color('#d29985')]),
        skinColor,
        10
      )
    ),
    new Sprite(
      svg.glasses,
      new ColorCollection([
        new Color('#5f705c'),
        new Color('#43677d'),
        new Color('#5e172d'),
        new Color('#ffb67a'),
        new Color('#a04b5d'),
        new Color('#191919'),
        new Color('#323232'),
        new Color('#4b4b4b')
      ]),
      25
    ),
    new Sprite(
      svg.clothes,
      new ColorCollection([
        new Color('#5bc0de'),
        new Color('#5cb85c'),
        new Color('#428bca'),
        new Color('#03396c'),
        new Color('#005b96'),
        new Color('#6497b1'),
        new Color('#1b85b8'),
        new Color('#5a5255'),
        new Color('#559e83'),
        new Color('#ae5a41'),
        new Color('#c3cb71'),
        new Color('#666547'),
        new Color('#ffe28a')
      ])
    ),
    new Sprite(svg.hair, hairColor, 95),
    new Sprite(
      svg.hats,
      new ColorCollection([
        new Color('#18293b'),
        new Color('#2e1e05'),
        new Color('#989789'),
        new Color('#3d6ba7'),
        new Color('#517459'),
        new Color('#a62116')
      ]),
      5
    )
  ],
  20
);
