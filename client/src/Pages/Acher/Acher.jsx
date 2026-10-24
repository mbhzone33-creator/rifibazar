import GiveawayHero from '../../components/Acher/GiveawayHero';
import Influencer from '../../components/Acher/Influencer';
import Giveaway from '../../components/Acher/Giveaway';
import AllProducts from '../../components/Acher/AllProducts';
import Reviews from '../../components/common/Reviews';
import OrderPanel from '../../components/common/OrderPanel';
import Faq from '../../components/common/Faq';
import { combos } from '../../data/products';

const Acher = () => (
  <>
    <GiveawayHero />
    <Influencer />
    <Giveaway />
    <AllProducts />
    <Reviews />
    <OrderPanel itemId={combos[0].id} showPicker />
    <Faq />
  </>
);

export default Acher;
