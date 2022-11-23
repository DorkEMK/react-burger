import styles from './ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredient = ({data}) => {
  return (
    <li className={styles.item}>
      <Counter className="counter-card" count={1} size="default" />
      <img className={`ml-4 mr-4 mb-1`} src={data.image} alt={data.name}></img>
      <div className={`${styles.price} mb-1 text text_type_main-default`}>
        <span className="mr-2">{data.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">
        {data.name}
      </p>
    </li>
  )
}

export default Ingredient;
