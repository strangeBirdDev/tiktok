import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ items = [], hideOnClick = false, onChange, children }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    const renderMenuList = (attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-wrapper")}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx("menu-body")}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset menu to first page
    const handleReset = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <>
            <Tippy
                render={renderMenuList}
                placement="bottom-end"
                interactive
                delay={[0, 700]}
                offset={[12, 8]}
                onHide={handleReset}
                hideOnClick={hideOnClick}
            >
                {children}
            </Tippy>
        </>
    );
}

Menu.propTypes = {
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Menu;
