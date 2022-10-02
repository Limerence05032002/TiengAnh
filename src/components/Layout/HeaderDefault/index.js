import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import styles from './HeaderDefault.scss'

const cx = classNames.bind(styles)

function DefaultHeader({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('Container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default DefaultHeader