import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GALLERY.module.css';

interface Props {
  className?: string;
}
/* @figmaId 161:224 */
export const GALLERY: FC<Props> = memo(function GALLERY(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.navMenu}>
        <div className={classes.pACKAGES}>PACKAGES</div>
        <div className={classes.contactUs}>contact us</div>
        <div className={classes.ourGears}>our gears</div>
        <div className={classes.gallery}>gallery</div>
      </div>
      <div className={classes.rectangle22}></div>
      <div className={classes.bOOKNOW}>BOOK NOW</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle61}></div>
      <div className={classes.rectangle62}></div>
      <div className={classes.rectangle63}></div>
      <div className={classes.rectangle64}></div>
      <div className={classes.rectangle67}></div>
      <div className={classes.rectangle68}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.eventShots}>Event Shots</div>
      <div className={classes.rectangle132}></div>
      <div className={classes.eventShots2}>Event Shots</div>
      <div className={classes.rectangle133}></div>
      <div className={classes.eventShots3}>Event Shots</div>
      <div className={classes.rectangle134}></div>
      <div className={classes.eventShots4}>Event Shots</div>
      <div className={classes.rectangle155}></div>
      <div className={classes.rectangle160}></div>
      <div className={classes.rectangle163}></div>
      <div className={classes.rectangle161}></div>
      <div className={classes.rectangle156}></div>
      <div className={classes.rectangle157}></div>
      <div className={classes.rectangle158}></div>
      <div className={classes.rectangle159}></div>
      <div className={classes.rectangle162}></div>
      <div className={classes.rectangle1552}></div>
      <div className={classes.rectangle1622}></div>
      <div className={classes.rectangle169}></div>
      <div className={classes.rectangle1602}></div>
      <div className={classes.rectangle179}></div>
      <div className={classes.rectangle1632}></div>
      <div className={classes.rectangle180}></div>
      <div className={classes.rectangle170}></div>
      <div className={classes.rectangle181}></div>
      <div className={classes.rectangle1612}></div>
      <div className={classes.rectangle164}></div>
      <div className={classes.rectangle171}></div>
      <div className={classes.rectangle1562}></div>
      <div className={classes.rectangle165}></div>
      <div className={classes.rectangle172}></div>
      <div className={classes.rectangle1572}></div>
      <div className={classes.rectangle166}></div>
      <div className={classes.rectangle173}></div>
      <div className={classes.rectangle1582}></div>
      <div className={classes.rectangle167}></div>
      <div className={classes.rectangle174}></div>
      <div className={classes.rectangle1592}></div>
      <div className={classes.rectangle176}></div>
      <div className={classes.rectangle168}></div>
      <div className={classes.rectangle177}></div>
      <div className={classes.rectangle175}></div>
      <div className={classes.rectangle178}></div>
      <div className={classes.WaleShotItStudio}>© Wale shot it Studio</div>
    </div>
  );
});
