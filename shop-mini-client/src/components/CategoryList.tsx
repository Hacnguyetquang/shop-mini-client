import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = Array.from(new Set(items.map((p) => p.category)));

  return (
    <section className="container category-section">
      <div className="category-list">
        {categories.map((cat) => (
          <span key={cat} className="category-chip">
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
}