import {
  DescriptionSection,
  HeroBanner,
  HeroContent,
  HeroImage,
  PlayLink,
  PlayLinkContainer,
} from './HomePage.styles';

export const HomePage = () => {
  return (
    <>
      <HeroBanner>
        <HeroContent>
          <h1>
            <span>Lottery.</span> Take part and do something <span>good.</span>
          </h1>
        </HeroContent>
        <HeroImage>
          <img alt="coins" src="../../resources/HeroCoins.webp" />
        </HeroImage>
      </HeroBanner>
      <PlayLinkContainer>
        <PlayLink to="/play">
          Play <span>{'>'}</span>
        </PlayLink>
      </PlayLinkContainer>
      <DescriptionSection>
        <h3>How to play?</h3>
        <ul>
          <div>This is simple, you just need to follow this steps:</div>
          <li>Try to relax and indulge yourself with a pint of decent quality beer.</li>
          <li>Think of 6 lucky numbers, from 1 to 99.</li>
          <li>Numbers must be distinct.</li>
          <li>Go straight to the lottery page, and input your lucky numbers.</li>
          <li>Note your coupon identifier and wait for the winning numbers draw date!</li>
        </ul>

        <h3>Rewards</h3>
        <p>
          Your reward is a unique opportunity to do something good. For each level of win,
          you can support animal shelters!
        </p>
      </DescriptionSection>
    </>
  );
};
