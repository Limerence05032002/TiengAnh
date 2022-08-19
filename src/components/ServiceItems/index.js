import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAddressCard, faGear,faCircleQuestion,faRightFromBracket, faUpload,faLanguage} from '@fortawesome/free-solid-svg-icons'
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
            <span className={cx('Item')}>
                <FontAwesomeIcon className={cx('icon-setting')} icon={faUpload} />
                <p className={cx('title')}>Nâng cấp</p>
            </span>
            <span className={cx('Item')}>
                <FontAwesomeIcon className={cx('icon-setting')} icon={faCircleQuestion} />
                <p className={cx('title')}>Trợ giúp</p>
            </span>
            <span className={cx('Item')}>
                <FontAwesomeIcon className={cx('icon-setting')} icon={faLanguage} />
                <p className={cx('title')}>Ngôn ngữ</p>
            </span>
            <span className={cx('Item')}>
                <FontAwesomeIcon className={cx('icon-setting')} icon={faRightFromBracket} />
                <p className={cx('title')}>Đăng xuất</p>
            </span>
        </div>
    )
}
export default ServiceItems