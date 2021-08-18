import React from "react";
import {
  Card,
  CardTitle,
  ImageSection,
  ImageTitle,
  Image,
  Footer,
  Images,
} from "../../style/fourCard";

const FourCard = ({ cardTitle, images }) => {
  return (
    <Card>
      <CardTitle>{cardTitle}</CardTitle>
      <ImageSection>
        {images.map(({ src, name }, index) => {
          return (
            <Images key={index}>
              <Image>
                <img src={src} alt="Imge" />
              </Image>
              <ImageTitle>{name}</ImageTitle>
            </Images>
          );
        })}
      </ImageSection>
      <Footer>See more</Footer>
    </Card>
  );
};

export default FourCard;
