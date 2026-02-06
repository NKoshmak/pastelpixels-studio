import TemplateCard from "./TemplateCard";
import styles from "@/styles/templates-grid.module.css";
import { templates } from "@/data/templates";

export default function TemplatesGrid() {
  return (
    <section className={styles.grid}>
      {templates.map((template) => (
        <TemplateCard key={template.slug} {...template} />
      ))}
    </section>
  );
}