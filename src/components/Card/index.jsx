
import styles from "./styles.module.css"
import Button from "../button"


export default function Card({ img, title, content }) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={img} alt="Star Wars poster" />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{content}</p>
        <Button />
      </div>
    </div>
  )
}