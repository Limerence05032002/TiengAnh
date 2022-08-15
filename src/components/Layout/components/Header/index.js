
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboard,faChalkboardUser,faBook } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <h1 className={cx('logo-text')}>Voever</h1>
                </div>
                <div className={cx('service')}>
                    <span className={cx('service-learn')}>
                        <FontAwesomeIcon className={cx('icon-learn')} icon={faChalkboard}/>
                        <h4>Học</h4>
                    </span>
                    <span className={cx('service-story')}>
                        <FontAwesomeIcon className={cx('icon-story')} icon={faBook} />
                        <h4>Truyện</h4>
                    </span>
                    <span className={cx('service-introduce')}>
                        <FontAwesomeIcon className={cx('icon-introduce')} icon={faChalkboardUser} />
                        <h4>Giới thiệu</h4>
                    </span>
                </div>
                <div className={cx('action')}>
                    <h4 className={cx('action-signUp')}>Đăng nhập</h4>
                    <h4 className={cx('action-logIn')}>Đăng ký</h4>
                </div>
                {/* {logo} */}
                {/* {Search} */}
            </div>
        </header>    
    )
}
export default Header