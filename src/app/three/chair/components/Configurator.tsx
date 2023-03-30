import type { FC } from 'react'
import {
  useCustomization,
  chairColors,
  cushionColors
} from '~/app/three/chair/context/Customization'
import styles from './Configurator.module.css'

const Configurator: FC = () => {
  const {
    material,
    setMaterial,
    leg,
    setLeg,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor
  } = useCustomization()
  return (
    <div className={styles.configurator}>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          椅子材质
        </div>
        <div className={styles.sectionValue}>
          <div className={`${styles.item} ${material === 'leather' ? styles.itemActive : ''}`}
               onClick={() => setMaterial('leather')}>
            皮革
          </div>
          <div className={`${styles.item} ${material === 'fabric' ? styles.itemActive : ''}`}
               onClick={() => setMaterial('fabric')}>
            布艺
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          椅子颜色
        </div>
        <div className={styles.sectionValue}>
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${chairColor === item.color ? styles.itemActive : ''}`}
              onClick={() => setChairColor(item.color)}>
              <div className={styles.dot} style={{ backgroundColor: item.color }}></div>
              {item.name}
            </div>
          ))}
        </div>
      </div><div className={styles.section}>
        <div className={styles.sectionTitle}>
          垫子颜色
        </div>
        <div className={styles.sectionValue}>
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${cushionColor === item.color ? styles.itemActive : ''}`}
              onClick={() => setCushionColor(item.color)}>
              <div className={styles.dot} style={{ backgroundColor: item.color }}></div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          椅子腿
        </div>
        <div className={styles.sectionValue}>
          <div className={`${styles.item} ${leg === 'classic' ? styles.itemActive : ''}`}
               onClick={() => setLeg('classic')}>
            经典
          </div>
          <div className={`${styles.item} ${leg === 'modern' ? styles.itemActive : ''}`}
               onClick={() => setLeg('modern')}>
            现代
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configurator
