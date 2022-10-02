/* eslint-disable react/react-in-jsx-scope */
import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

const imagens = [massa1, massa2];

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre </h3>
      <div className={styles.sobreNos}>
        <div className={styles.imagens__casa} >
        <img src={casa} alt="Ricardo's Restaurante"/>
        </div>
        <div className={styles.sobreNos__texto}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas erat elit, euismod facilisis sem egestas vitae. Fusce vitae libero ex. Maecenas gravida leo ac sapien hendrerit, vitae tempor quam feugiat. Praesent tempus quis nibh id viverra. Donec pulvinar malesuada rhoncus. Proin non elit elit. Suspendisse varius nisl et lorem tristique, non gravida enim bibendum. Curabitur dictum odio eu auctor placerat. Vestibulum at turpis vel ipsum feugiat pulvinar. Nullam lacinia sapien eu nunc tempor, facilisis vehicula sem dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.           
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}