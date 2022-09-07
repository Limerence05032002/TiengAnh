import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faTrophy, faChartLine,faCaretRight, faMagnet, faArchway, faAtom} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'
import chart from '~/image/Chart.png'

const cx = classNames.bind(styles)

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('rank')}>
                <div className={cx('wrapp_rank')}>
                    <FontAwesomeIcon className={cx('rank_icon')} icon={faRankingStar}></FontAwesomeIcon>
                    <h2 className={cx('rank_text')}>Xếp hạng để thách đấu</h2>
                    <p className={cx('rank_decription')}>Hoàn thành bài học, leo rank tìm kiếm Thách đấu !</p>
                </div>
            </div>

            <div className={cx('activity')}>
                <div className={cx('wrapp_activity')}>
                    <h2 className={cx('activity_text')}>Chuỗi hoạt động</h2>
                    <div className={cx('activity_content')}>
                        <img className={cx('image_chart')} src={chart}></img>
                        
                        <p className={cx('activity_decription')}>Theo dõi hoạt động học</p>
                    </div>
                    <span className={cx('more_activity')}>
                        <p className={cx('more_text')}>Xem chi tiết </p>
                        <FontAwesomeIcon className={cx('more_icon')} icon={faCaretRight}></FontAwesomeIcon>
                    </span>
                </div>
            </div>

            <div className={cx('achievement')}>
                <div className={cx('wrapp_achievement')}>
                    <h2 className={cx('achievement_text')}>Thành tích đạt được</h2>
                    <div className={cx('wrap_icon')}>
                    <FontAwesomeIcon className={cx('achievement_icon')} icon={faTrophy}/>
                    <FontAwesomeIcon className={cx('achievement_icon')} icon={faMagnet}/>
                    <FontAwesomeIcon className={cx('achievement_icon')} icon={faArchway}/>
                    <FontAwesomeIcon className={cx('achievement_icon')} icon={faAtom}/>
                    </div>
                    <p className={cx('achievement_decription')}>Chinh phục từ vựng chưa bao giờ dễ như vậy !</p>
                    <span className={cx('more_activity_2')}>
                        <p className={cx('more_text_2')}>Xem chi tiết </p>
                        <FontAwesomeIcon className={cx('more_icon_2')} icon={faCaretRight}></FontAwesomeIcon>
                    </span>
                </div>
            </div>

            <div className={cx('charts')}>
                <div className={cx('wrapp_charts')}>
                    <h2 className={cx('charts_text')}>Xếp hạng</h2>
                </div>
            </div>
        </div>
    )
}
export default SideBar