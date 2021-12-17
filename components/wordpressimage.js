import classNames from 'classnames/bind'

import Image from "next/image"

import styles from './wordpressimage.module.scss'

let cx = classNames.bind(styles)

const WordpressImage = ({ data, rounded }) => {
    const { sourceUrl, mediaDetails, altText} = data
    const { width, height} = mediaDetails
    
    let imageClasses = cx({
        rounded : rounded
    })

    return <Image
        src={sourceUrl}
        width={width}
        height={height}
        altText={altText}
        className={imageClasses}
        layout="responsive"
    />
}
export default WordpressImage