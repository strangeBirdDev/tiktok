import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InteractButton.module.scss";

const cx = classNames.bind(styles);

function InteractButton({ icon }) {
    return <div className={cx("button")}>{icon}</div>;
}

InteractButton.propTypes = {
    icon: PropTypes.node.isRequired,
};

export default InteractButton;
