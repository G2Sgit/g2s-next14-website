import css from "./FeatureItem.module.scss";
export default function FeatureItem({ item }) {
  const { title, text } = item;
  return (
    <div className={css.featuresItem}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
