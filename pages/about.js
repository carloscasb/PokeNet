import Image from "next/image"

import styles from "../styles/About.module.css"

export default function About() {

    return (

        <div className={styles.about}>
            <h1 >Sobre o projeto</h1>
            <p>
               A previsão do tempo é de parcialmente nublado. Na manhã 27.3°C, à tarde 30.3°C e 
                durante a noite 27.2°C. A temperatura mínima para São Luís é de 26°C, e a
                máxima de 31.8°C. A umidade do ar é de 76%, que é considerado aceitável.
                O índice UV é de 7, que é alto. A possibilidade de ocorrência de chuva é de 0%.
            </p>

            <Image src="/images/Zero.Two.jpg" width="300" height="400" alt="foto zero" />
        </div>
    )

}