
import styles from './HeaderDropdown.module.scss';

type DropdownProps = {
  isOpen: boolean;
  onOpen: () => void;
};

function HeaderDropdown({ isOpen, onOpen }: DropdownProps) {
    return (
        <button className={styles.headerdropdown} onClick={onOpen}>
            {isOpen ? "-" : "+"}
        </button>
    )
}

export default HeaderDropdown;