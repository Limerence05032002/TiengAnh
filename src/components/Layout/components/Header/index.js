
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboard,faChalkboardUser,faBook,faCloudUpload, faBell,faAddressCard, faGear } from '@fortawesome/free-solid-svg-icons';
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
    const currentUser = false

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

                {/* xử lí khi người dùng đăng nhập */}
                <>
                {currentUser ? (
                        <div className={cx('action-static')}>
                            <div className={cx('notion-icon')}>
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            <Tippy 
                                render={(attrs) => (
                                    <WrapperPopper>
                                    <div className={cx('setting-profile')} tabIndex='-1' {...attrs}>
                                        <div onMouseOver={visible ? hide : show}>
                                            <h4 className={cx('tittle-service')}>Tài khoản</h4>
                                            <hr className={cx('line')}></hr>
                                            <ServiceItems />
                                        </div>
                                    </div>    
                                    </WrapperPopper>
                                )}
                            >   
                                <div className={cx('current-user')}>
                                    trung anh   
                                </div>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <div className={cx('action')}>
                                <Button main>Đăng nhập</Button>
                                <Button primary >Đăng ký</Button>
                            </div>
                        </>
                    )}
                </>
            </div>
        </header>    
    )
}
export default Header