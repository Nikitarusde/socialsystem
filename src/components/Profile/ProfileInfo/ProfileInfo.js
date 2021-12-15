import classes from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-374116967-7787557.jpg.transform/lh-dcep-transform-width-1440/img.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src='https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg'/>
            </div>
        </div>

    )
}



