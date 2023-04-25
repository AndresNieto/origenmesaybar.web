import { FunctionComponent } from "react";
import classNames from 'classnames';
import styles from './FooterComponent.module.css';

interface FooterComponentProps {

}

const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
  return (
    <>
      <footer className={classNames(styles.footerBg, 'last-text')}>
        <div >
          <p>© 2023. All Rights Reserved by Origen, mesa y bar</p>
        </div>
      </footer>

    </>
  );
}

export default FooterComponent;