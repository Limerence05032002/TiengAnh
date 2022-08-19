
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChalkboard, faChalkboardUser, faBook, faBell,faCircleUser
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Wrapper as WrapperPopper } from '~/components/Popper';
import Button from '~/components/Button';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import ServiceItems from '~/components/ServiceItems';

const cx = classNames.bind(styles)


function Header() {
    const [visible, setvisible] = useState(true)

    const show = () => setvisible(true)
    const hide = () => setvisible(false)
    const currentUser = true

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <h1 className={cx('logo-text')}>Voever</h1>
                </div>
                <div className={cx('service')}>
                    <span className={cx('service-learn')}>
                        <FontAwesomeIcon className={cx('icon-learn')} icon={faChalkboard} />
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

                {/* xử lí khi người dùng đăng nhập */}
                <>
                    {currentUser ? (
                        <div className={cx('action-static')}>
                            <div className={cx('notion')}>
                                <FontAwesomeIcon className={cx('notion-icon')} icon={faBell} />
                                <h4 className={cx('user')}>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                    <div className={cx('current-user')}>
                                        <WrapperPopper >
                                        <div className={cx('setting-profile')} >
                                            <h4 className={cx('tittle-service')}>Tài khoản</h4>
                                            <ServiceItems />
                                        </div>
                                        </WrapperPopper>
                                    </div>
                                </h4>
                            </div>
                            

                        </div>
                    ) : (
                        <>
                            <div className={cx('action')}>
                                <Button main>Đăng nhập</Button>
                                <Button primary >Đăng ký</Button>
                                {/* <div className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                        <div className={cx('more-content')}>
                                            <span className={cx('content-item')}>
                                                <FontAwesomeIcon icon={faLanguage} />
                                                <h4 className={cx('content-text')}>English</h4>
                                            </span>
                                            <span className={cx('content-item')}>
                                                <FontAwesomeIcon icon={faCircleQuestion}/>
                                                <h4 className={cx('content-text')}>Feedback and help</h4>
                                            </span>
                                            <span className={cx('content-item')}>
                                                <FontAwesomeIcon icon={faKeyboard} />
                                                <h4 className={cx('content-text')}>Keyboard shortcuts</h4>
                                            </span>
                                        </div>
                                    </div> */}
                            </div>
                        </>
                    )}
                </>
            </div>
        </header>
    )
}
export default Header