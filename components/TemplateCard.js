import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/template-card.module.css";

export default function TemplateCard({
  slug,
  title,
  price,
  platform,
  cover,
  frame,
}) {
  return (
    <Link href={`/templates/${slug}`} className={styles.card}>
      <div className={`${styles.frame} ${styles[frame]}`}>

        <div className={styles.imageWrap}>
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>

      <div className={styles.meta}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>
          {price} <span>| {platform}</span>
        </div>
      </div>
    </Link>
  );
}