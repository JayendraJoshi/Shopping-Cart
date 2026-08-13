import sportBannerImg from "../../assets/images/sport-banner.jpg";
import styles from "./home-page.module.css";
import { useNavigate, useOutletContext } from "react-router";
import type { NavigateFunction } from "react-router";
import ItemsPreview from "../items-preview.js";
import type { Item } from "../items-preview.js";

type BannerSectionProps = Readonly<{
  navigate: NavigateFunction;
}>;

type BestsellerSectionProps = Readonly<{
  navigate: NavigateFunction;
  bestsellerItems: Item[];
}>;

export default function HomePage() {
  let navigate = useNavigate();
  const contextArray: any = useOutletContext();
  const items = contextArray[0];
  const bestsellerItems = getBestsellerItems(items, 10);
  return (
    <section className="home-page">
      <BannerSection navigate={navigate} />
      <BestsellerSection
        navigate={navigate}
        bestsellerItems={bestsellerItems}
      ></BestsellerSection>
    </section>
  );
}

function BannerSection({ navigate }: BannerSectionProps) {
  return (
    <section className={styles.banner}>
      <div className={styles["banner-wrapper"]}>
        <div className={styles["banner-text"]}>
          <h2>Sportsgear for everyone.</h2>
          <p>
            We offer affordable and sustainable sports accessoires of the
            highest quality, sourced locally from certified partners. Get yours
            now!
          </p>
          <button type="button" onClick={() => navigate("/shop")}>
            Shop Now{" "}
          </button>
        </div>
        <img
          alt="A runner kneeling down and waiting for the signal to start."
          className={styles["banner-image"]}
          src={sportBannerImg}
        ></img>
      </div>
    </section>
  );
}

function BestsellerSection({
  navigate,
  bestsellerItems,
}: BestsellerSectionProps) {
  return (
    <section className={styles["bestsellers"]}>
      <h2>Bestsellers</h2>
      <ul>
        <ItemsPreview items={bestsellerItems}></ItemsPreview>
      </ul>
      <button type="button" onClick={() => navigate("/shop")}>
        View All
      </button>
    </section>
  );
}

function getBestsellerItems(items: Item[], quantity: number): Item[] {
  const bestsellerArray = [...items];
  bestsellerArray.sort((a, b) => b.rating - a.rating);
  return bestsellerArray.slice(0, quantity);
}

//To-Do
//get items state through outlet props
// get bestseller items and give them to item-preview to get previews
// display them under bestseller section
