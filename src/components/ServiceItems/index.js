import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAddressCard, faGear,faCircleInfo,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames/bind"
import styles from "./ServiceItems.module.scss"

const cx = classNames.bind(styles)

function ServiceItems() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('Item')}>
                <FontAwesomeIcon className={cx('icon-setting')} icon={faAddressCard} />
                <p className={cx('title')}>Hồ sơ của bạn</p>
            </span>
            <hr className={cx('line')}></hr>
            <span className={cx('Item')}>
                <FontAwesomeIcon className={cx('icon-setting')} icon={faGear} />
                <p className={cx('title')}>Cài đặt</p>
            </span>
            <hr className={cx('line')}></hr>
            <span className={cx('Item')}>
                <FontAwesomeIcon className={cx('icon-setting')} icon={faCircleInfo} />
                <p className={cx('title')}>Trợ giúp</p>
            </span>
            <hr className={cx('line')}></hr>
            <span className={cx('Item')}>
                <FontAwesomeIcon className={cx('icon-setting')} icon={faRightFromBracket} />
                <p className={cx('title')}>Đăng xuất</p>
            </span>
            
        </div>
    )
}
export default ServiceItems