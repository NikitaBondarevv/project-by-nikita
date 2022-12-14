import { EditableText } from 'components/editableText'

import styles from './styles.css'

const descriptionText = `Enjoy new movie-themed thrills ad a favorite Radiator Springs
location - Willys Butte! Inspired by Disney Pixar Cars 3,
this hair-raising set uses multiple wild driving skills and transforms for 3 ways play.`

export const Products = () => (
  <div className={styles.productInformation}>
    <span className={styles.title}>
      TITLE: <EditableText text="TOW TRACK" />
    </span>
    <span className={styles.price}>
      $ <EditableText text="32" price />
    </span>
    <div className={styles.description}>
      <EditableText text={descriptionText} multiLine />
    </div>
    <button type="button" className={styles.button}>SAVE</button>
  </div>
)
