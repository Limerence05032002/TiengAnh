import classNames from "classnames/bind"
import styles from  "./introduce.scss"

const cx = classNames.bind(styles)

function Introduce() {
    return (
        <div className={cx("wrapper_intro")}>
            <h2 className={cx("nameintro")}>Giới thiệu</h2>
            <div className={cx("menu")}>
                {/* <hr className={cx("line")}></hr> */}
                <ul className={cx("Items")}>
                    <li className={cx("Item_word active")}>Sứ mệnh</li>
                    <li className={cx("Item_word")}>Phương pháp</li>
                    <li className={cx("Item_word")}>Nhóm</li>
                </ul>
            </div>
            <div className={cx("bao")}>
            <div className={cx("intro_wrapper")}>
                <div className={cx("image")}></div>
                <div className={cx("content_wrapper")}>
                    <h3 className={cx("content_header")}>Cá nhân hóa giáo dục</h3>
                    <p>Mỗi người đều có phương pháp học riêng. Lần đầu tiên trong lịch sử, lần đầu tiên trong lịch sử chúng tôi có thể phân tích từ cách thức học tập của hàng triệu người để tạo ra một hệ thống giáo dục hiệu quả, thích hợp nhất dành riêng cho từng học viên.
                        <br></br>
                        Mục tiêu lớn nhất của chúng tôi là làm cho người học trải nghiệm Duolingo như đang học với gia sư riêng.</p>
                </div>
            </div>
            <div className={cx("intro_wrapper")}>
                
                <div className={cx("content_wrapper")}>
                    <h3 className={cx("content_header")}>Cá nhân hóa giáo dục</h3>
                    <p>Mỗi người đều có phương pháp học riêng. Lần đầu tiên trong lịch sử, lần đầu tiên trong lịch sử chúng tôi có thể phân tích từ cách thức học tập của hàng triệu người để tạo ra một hệ thống giáo dục hiệu quả, thích hợp nhất dành riêng cho từng học viên.
                        <br></br>
                        Mục tiêu lớn nhất của chúng tôi là làm cho người học trải nghiệm Duolingo như đang học với gia sư riêng.</p>
                </div>
                <div className={cx("image")}></div>
            </div>
            <div className={cx("intro_wrapper")}>
                <div className={cx("image")}></div>
                <div className={cx("content_wrapper")}>
                    <h3 className={cx("content_header")}>Cá nhân hóa giáo dục</h3>
                    <p>Mỗi người đều có phương pháp học riêng. Lần đầu tiên trong lịch sử, lần đầu tiên trong lịch sử chúng tôi có thể phân tích từ cách thức học tập của hàng triệu người để tạo ra một hệ thống giáo dục hiệu quả, thích hợp nhất dành riêng cho từng học viên.
                        <br></br>
                        Mục tiêu lớn nhất của chúng tôi là làm cho người học trải nghiệm Duolingo như đang học với gia sư riêng.</p>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Introduce