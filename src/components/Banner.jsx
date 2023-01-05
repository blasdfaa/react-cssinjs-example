import styled, { css } from 'styled-components';
import { Color } from '../theme/colors';
import { Font } from '../theme/fonts';
import BaseCard from './base/BaseCard';
import Typography from './Typography';

const Size = {
  LARGE: 'large',
  MEDIUM: 'medium',
};

const StyledTitle = styled.h3`
  color: ${Color.WHITE};
  font-family: ${Font.DELA_GOTHIC};
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  position: relative;
  text-transform: uppercase;
`;

const SizeToCSS = {
  [Size.LARGE]: css`
    @media (min-width: 768px) {
      height: 216px;
    }
  `,
  [Size.MEDIUM]: css`
    @media (min-width: 768px) {
      height: 100px;

      ${StyledTitle} {
        font-size: 16px;
        line-height: 20px;
      }
    }
  `,
};

const StyledWrapper = styled(BaseCard).attrs(({ size }) => ({
  size: size || Size.MEDIUM,
}))`
  height: 140px;

  ${({ size }) => SizeToCSS[size]}
`;

const StyledBanner = styled.article`
  padding: 4px 8px;
  position: relative;
`;

const StyledImage = styled.img`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledDiscount = styled(Typography).attrs({
  as: 'span',
})`
  color: ${Color.WHITE};
  font-family: ${Font.DELA_GOTHIC};
  position: absolute;
  bottom: 4px;
  left: 8px;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  text-transform: uppercase;
`;

function Banner({ className, title, discount, image, imageAlt, size }) {
  return (
    <StyledWrapper className={className} to="#" size={size}>
      <StyledBanner>
        <StyledImage src={image} alt={imageAlt} />

        <StyledTitle>{title}</StyledTitle>
        {discount && <StyledDiscount>{discount}%</StyledDiscount>}
      </StyledBanner>
    </StyledWrapper>
  );
}

export default Banner;
