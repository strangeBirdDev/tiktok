import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./LoginModal.module.scss";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { CloseModalIcon } from "@/components/Icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function LoginModal({ onClose }) {
    const [loginMode, setLoginMode] = useState(true);

    const handleChangeMode = () => {
        setLoginMode((prev) => !prev);
    };

    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [year, setYear] = useState(0);

    const handleChangeMonth = (e) => {
        setMonth(Number(e.target.value));
    };

    const handleChangeDay = (e) => {
        setDay(Number(e.target.value));
    };

    const handleChangeYear = (e) => {
        setYear(Number(e.target.value));
    };

    const generateMonthOption = () => {
        const arr = [];
        for (let i = 0; i < 12; i++) {
            arr.push(
                <option key={i} value={i + 1}>
                    Tháng {i + 1}
                </option>
            );
        }

        return arr;
    };

    const generateDayOption = () => {
        const arr = [];

        if (month === 2 && year % 4 === 0) {
            for (let i = 0; i < 29; i++) {
                arr.push(
                    <option key={i} value={i + 1}>
                        {i + 1}
                    </option>
                );
            }
        } else if (month === 2 && year % 4 !== 0) {
            for (let i = 0; i < 28; i++) {
                arr.push(
                    <option key={i} value={i + 1}>
                        {i + 1}
                    </option>
                );
            }
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            for (let i = 0; i < 30; i++) {
                arr.push(
                    <option key={i} value={i + 1}>
                        {i + 1}
                    </option>
                );
            }
        } else {
            for (let i = 0; i < 31; i++) {
                arr.push(
                    <option key={i} value={i + 1}>
                        {i + 1}
                    </option>
                );
            }
        }

        return arr;
    };

    const generateYearOption = () => {
        const arr = [];
        const date = new Date();
        for (let i = date.getFullYear(); i > 1900; i--) {
            arr.push(
                <option key={i} id={i} value={i}>
                    {i}
                </option>
            );
        }

        return arr;
    };

    // Handle Login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        const user = {
            email,
            password,
        };
    };

    return (
        <div className={cx("container")}>
            <div className={cx("modal")}>
                <div className={cx("close-btn")} onClick={onClose}>
                    <CloseModalIcon />
                </div>
                <div className={cx("modal-content")}>
                    <div className={cx("header")}>
                        <h2>{loginMode ? "Đăng nhập" : "Đăng ký"}</h2>
                    </div>
                    <div className={cx("content")}>
                        <form onSubmit={handleLogin}>
                            {!loginMode ? (
                                <div>
                                    <p className={cx("birthday-input-label")}>Ngày sinh của bạn là ngày nào?</p>
                                    <div className={cx("birthday-input")}>
                                        <select
                                            className={cx("month")}
                                            name="month"
                                            onChange={handleChangeMonth}
                                            value={month}
                                        >
                                            {generateMonthOption()}
                                        </select>
                                        <select className={cx("day")} name="day" onChange={handleChangeDay} value={day}>
                                            {generateDayOption()}
                                        </select>
                                        <select
                                            className={cx("year")}
                                            name="year"
                                            onChange={handleChangeYear}
                                            value={year}
                                        >
                                            {generateYearOption()}
                                        </select>
                                    </div>
                                    <p className={cx("birthday-noti")}>
                                        Ngày sinh của bạn sẽ không được hiển thị công khai
                                    </p>
                                </div>
                            ) : (
                                ""
                            )}
                            <label htmlFor="inputEmail" className={cx("input-label")}>
                                {loginMode ? "Email hoặc TikTok ID" : "Email"}
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder={loginMode ? "Email hoặc TikTok ID" : "Địa chỉ Email"}
                                value={email}
                                onChange={handleChangeEmail}
                                required
                            />{" "}
                            <br />
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={handleChangePassword}
                                required
                            />{" "}
                            <br />
                            {loginMode ? <Link className={cx("forgot-password")}>Quên mật khẩu?</Link> : ""}
                            <Button className={cx("login-btn")} primary large>
                                {loginMode ? "Đăng nhập" : "Đăng ký"}
                            </Button>
                            {!loginMode ? (
                                <p className={cx("register-warning")}>
                                    Bằng việc tiếp tục với tài khoản có vị trí tại <b>Vietnam</b>, bạn đồng ý với{" "}
                                    <b>Điều khoản sử dụng</b>, đồng thời xác nhận rằng bạn đã đọc{" "}
                                    <b>Chính sách Quyền riêng tư</b> của chúng tôi.
                                </p>
                            ) : (
                                ""
                            )}
                        </form>
                    </div>
                </div>
                <div className={cx("footer")}>
                    {loginMode ? (
                        <span>
                            Bạn không có tài khoản? <Link onClick={handleChangeMode}>Đăng ký</Link>
                        </span>
                    ) : (
                        <span>
                            Bạn đã có tài khoản? <Link onClick={handleChangeMode}>Đăng nhập</Link>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

LoginModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default LoginModal;
