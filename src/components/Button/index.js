import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from "./button.module.scss"

const cx = classNames.bind(styles)

function Button({
    to, 
    href,
    primary = false,
    children,main, 
    outLine = false, 
    onClick, 
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }
    if (to) {
        props.to = to
        Comp = Link
    }else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outLine,
        main,
    })
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp> 
    )
}
export default Button