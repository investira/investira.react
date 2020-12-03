import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import noImage from './thumb_no_image.gif';
import noImage2x from './thumb_no_image@2x.gif';
import noImage3x from './thumb_no_image@3x.gif';

import Style from './ResponsiveImage.module.scss';

const ResponsiveImage = props => {
    let imagesSource = [];
    let imagesSrcSet = [];

    const xErrorSet = [
        { srcSet: `${noImage} 1x, ${noImage2x} 2x, ${noImage3x} 3x` }
    ];
    const xPlaceholderSet = props.placeholder;

    const [hasError, setHasError] = useState(false);
    const [show, setShow] = useState(false);

    // Separara o que deve ser instanciado como source e srcset
    const filterImages = pSource => {
        imagesSource = [];
        imagesSrcSet = [];
        for (const xItem of pSource) {
            if (xItem.media || xItem.type) {
                imagesSource.push(xItem);
            } else {
                imagesSrcSet.push(xItem);
            }
        }
    };

    // Em caso de erro no carregamento da imagem
    const handleError = _pImage => {
        if (!hasError) {
            setHasError(true);
            props.error && props.error(true);
        }
    };

    if (hasError) {
        const xSet = xPlaceholderSet || xErrorSet;
        filterImages(xSet);
    } else {
        filterImages(props.source);
    }

    const xClassImage = classNames(props.className, Style.img, {
        [Style.show]: show
    });

    return (
        <div className={Style.root}>
            <picture className={Style.picture}>
                {imagesSource.map((image, index) => {
                    return (
                        <source
                            key={index}
                            srcSet={image.srcSet}
                            media={image.media}
                            type={image.type}
                        />
                    );
                })}

                {imagesSrcSet[0] ? (
                    <img
                        id={props.id}
                        className={xClassImage || Style.img}
                        srcSet={imagesSrcSet[0].srcSet}
                        alt={props.alt}
                        type={props.type}
                        onLoad={() => setShow(true)}
                        onError={handleError}
                    />
                ) : null}
            </picture>
        </div>
    );
};

ResponsiveImage.propTypes = {
    source: PropTypes.array.isRequired,
    alt: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default React.memo(ResponsiveImage);
