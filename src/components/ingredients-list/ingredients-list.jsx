import styles from './ingredients-list.module.css';
import Ingredient from '../ingredient/ingredient';

const IngredientsList = ({title, data}) => {
  return (
    <div className={`pt-10`}>
      <h2 className={`text text_type_main-medium`}>{title}</h2>
      <ul className={`${styles.grid} pt-6 pb-10`}>
        { data.map(item => (<Ingredient data={item} key={item._id}/>))}
      </ul>
    </div>
  )
}

export default IngredientsList;