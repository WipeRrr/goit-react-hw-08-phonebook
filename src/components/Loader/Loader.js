import { BarLoader } from 'react-spinners';
import css  from './Loader.module.css'

function Loader() {
  return <BarLoader className={css.loader} color="#007bff" size={5} />;
}

export default Loader;
