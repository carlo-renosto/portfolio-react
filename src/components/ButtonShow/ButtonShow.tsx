
import styles from './ButtonShow.module.scss';

type ButtonProps = {
  isOpen: boolean;
  onOpen: () => void;
};

function ButtonShow({ isOpen, onOpen }: ButtonProps) {
    return (
        <button className={styles.buttonshow} onClick={onOpen}>
            {isOpen ? "-" : "+"}
        </button>
    )
}

export default ButtonShow;