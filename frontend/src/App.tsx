import styles from './App.module.css';
import { Form } from './components/Form';
import imageTelephone from './assets/images/telephone.png';


const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={imageTelephone} alt="" />
        <p><strong>Os melhores planos com as melhores tarifas você encontra AQUI !</strong></p>
      </div>
      <div className={styles.rightSide}>
        <Form />
      </div>
    </div>
  );
}

export default App;