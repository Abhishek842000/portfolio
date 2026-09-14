"use client";

import { motion } from "framer-motion";
import { BrandMark } from "@/components/ui/BrandMark";

export interface TimelineItem {
  id: string;
  yearLabel: string;
  title: string;
  dates: string;
  subtitle: string;
  logo?: string;
  brandColor?: string;
  logoWide?: boolean;
  logoDark?: boolean;
  isPresent?: boolean;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const groups = groupByYear(items);

  return (
    <ol className="space-y-8">
      {groups.map((group, groupIndex) => (
        <motion.li
          key={group.yearLabel}
          className="grid gap-3 md:grid-cols-[88px_1fr] md:items-start md:gap-6"
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: groupIndex * 0.05, duration: 0.4 }}
        >
          <p className="font-mono text-sm text-muted md:pt-6">{group.yearLabel}</p>
          <article className="rounded-2xl border border-line bg-card p-5 shadow-[0_8px_30px_rgba(17,17,20,0.06)] sm:p-8">
            {group.items.map((item, index) => (
              <div
                key={item.id}
                className={index > 0 ? "mt-6 border-t border-line pt-6" : ""}
              >
                <h2 className="font-display text-xl font-bold sm:text-2xl">{item.title}</h2>
                <p className="mt-1 font-mono text-sm text-muted">
                  <span
                    className={`mr-2 inline-block h-2 w-2 rounded-full ${
                      item.isPresent ? "bg-emerald-500" : "bg-zinc-300"
                    }`}
                    aria-hidden="true"
                  />
                  {item.dates}
                </p>
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              {group.items[0]?.logo ? (
                <BrandMark
                  src={group.items[0].logo}
                  alt=""
                  color={group.items[0].brandColor}
                  size={group.items[0].logoWide ? "orgWide" : "org"}
                  dark={group.items[0].logoDark}
                />
              ) : null}
              <p className="text-sm text-muted">{group.items[0]?.subtitle}</p>
            </div>
          </article>
        </motion.li>
      ))}
    </ol>
  );
}

function groupByYear(items: TimelineItem[]) {
  const groups: { yearLabel: string; items: TimelineItem[] }[] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (
      last &&
      last.yearLabel === item.yearLabel &&
      last.items[0]?.subtitle === item.subtitle
    ) {
      last.items.push(item);
    } else {
      groups.push({ yearLabel: item.yearLabel, items: [item] });
    }
  }
  return groups;
}
