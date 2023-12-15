import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src={require("@/assets/images/avatar_tiktoker.jpg")} alt="avatar account" />
            <div className={cx("infor")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>anguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
