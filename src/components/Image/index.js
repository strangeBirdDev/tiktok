import PropTypes from "prop-types";
import React, { useState, forwardRef } from "react";
import classNames from "classnames";

import images from "@/assets/images";
import styles from "./Image.module.scss";

const Image = forwardRef(({ className, alt, src, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
