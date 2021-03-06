import styles from './Button.module.css'

const Button = (props) => {
   return (
       <a href={props.href} className={`${styles.button} ${props.class}`} target="_blank" rel="noopener noreferrer" >{props.children}</a>
   ) 
}

export default Button;