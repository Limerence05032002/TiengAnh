import Barchart from "~/components/Layout/DefaultLayout/SideBar/chart"
import classNames from 'classnames/bind'
import Styles from './home.scss'

const cx = classNames.bind(Styles)


function Home() {
    return (
        <div>
            <nav className={cx("navmenu")}>
                <ul>
                    <li className={cx("active right1")}>Unit 1</li>
                    <li className={cx("left")}>Unit 2</li>
                    <li className={cx("right")}>Unit 3</li>
                    
                </ul>
            </nav>
        </div>
    ) 
}
export default Home