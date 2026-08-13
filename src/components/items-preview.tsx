import { Link } from "react-router";

export type Item = {
  id: number;
  title: string;
  price: number;
  rating: number;
  images: string[];
  category: string;
};

type ItemsPreviewProps = {
  readonly items: Item[];
};

export default function ItemsPreview({ items }: ItemsPreviewProps) {
  return items.map((item) => {
    return (
      <li className="item" key={item.id}>
        <Link id={String(item.id)} to={`/shop/item/${item.id}`}>
          <img src={item.images[0]} alt={item.title}></img>
          <div className="item-infos-container">
            <p className="item-title">{item.title}</p>
            <p>{item.rating + " ★"}</p>
            <p>{item.price + " €"}</p>
          </div>
        </Link>
      </li>
    );
  });
}

//create a preview and add an eventlistener so that on click the user is redirected to item page with the specified id as params
