import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import dowImage from '../../assets/down.png'

type Props = {
  item: Level,
}
export const GridItem = ({ item }: Props) => {

  return (
    <div className={styles.scale}>
      <div className={styles.main} style={{ backgroundColor: item.color }}>
        <div className={styles.gridIcon}>
          {item.icon === 'up' && <img src={upImage} alt='' width='30'></img>}
          {item.icon === 'down' && <img src={dowImage} alt='' width='30'></img>}
        </div>
        <div className={styles.gridTitle}>{item.title}</div>
        {item.yourImc && <div className={styles.yourImc}>Seu IMC é {item.yourImc?.toFixed(2)}kg/m2</div>}

        <div className={styles.gridInfo}>{
          <>
            IMC está entre <strong>{item.imc[0]}</strong> <strong>e</strong> <strong>{item.imc[1]}</strong>
          </>
        }</div>
      </div>
    </div>

  )
} 