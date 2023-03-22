import { cloudName } from '../utils/config';
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize"

const Image = ({ publicId, style }) => {
    const cloudinaryImage = new CloudinaryImage(publicId, { cloudName: cloudName });
    return (
        <AdvancedImage cldImg={cloudinaryImage} style={style} />
    );
};

export const TransformedImage = ({ publicId, width, height }) => {
    const cloudinaryImage = new CloudinaryImage(publicId, { cloudName: cloudName });
    return (
        <AdvancedImage cldImg={
            cloudinaryImage
                .resize(
                    fill()
                        .width(width)
                        .height(height)
                )
        } />
    );
};

export default Image;