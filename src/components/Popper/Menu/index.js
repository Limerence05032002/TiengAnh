import Tippy from "@tippyjs/react"
import classNames from "classnames/bind"
import {Wrapper as WrapperPopper} from '~/components/Popper'
import ServiceItems from "~/components/ServiceItems"
import styles from  './Menu.module.scss'

const cx = classNames.bind(styles)
function Menu() {
    return(
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex='-1' {...attrs}>
                    <WrapperPopper>
                        <h4 className={cx('')}>Tài khoản của bạn</h4>
                        <ServiceItems />
                    </WrapperPopper>
                </div>
            )}
        >

        </Tippy>
    )
}
export default Menu