import { useTranslation } from 'react-i18next';

import { GoToLink } from '../../components/GoToLink';
import {
  DescriptionSection,
  HeroBanner,
  HeroContent,
  HeroImage,
  PlayLinkContainer,
} from './HomePage.styles';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroBanner>
        <HeroContent>
          <h1>
            <span>{t('lotteryMessage')}</span> {t('takePartMessage')}{' '}
            <span>{t('goodMessage')}</span>
          </h1>
        </HeroContent>
        <HeroImage>
          <img alt="coins" src="HeroCoins.webp" />
        </HeroImage>
      </HeroBanner>
      <PlayLinkContainer>
        <GoToLink to="/play">
          {t('playMessage')} <span>{'>'}</span>
        </GoToLink>
      </PlayLinkContainer>
      <DescriptionSection>
        <h3>{t('howToPlayMessage')}</h3>
        <ul>
          <div>{t('thisIsSimpleMessage')}</div>
          <li>{t('step1Message')}</li>
          <li>{t('step2Message')}</li>
          <li>{t('step3Message')}</li>
          <li>{t('step4Message')}</li>
          <li>{t('step5Message')}</li>
        </ul>

        <h3>{t('rewardsMessage')}</h3>
        <p>{t('rewardsDescriptionMessage')}</p>
      </DescriptionSection>
    </>
  );
};
