const MEDIUM_FEED_URL = "https://alper-bayram.medium.com/feed";
const REVALIDATE_SECONDS = 3600;

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

const TURKISH_MAP = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", İ: "i" };

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[çğıöşü]/g, (ch) => TURKISH_MAP[ch] || ch)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function slugFromLink(link) {
  const lastSegment = decodeURIComponent(link.split("/").pop() || "");
  return slugify(lastSegment);
}

function cleanContent(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    // Medium tracking pixel appended at the end of every post.
    .replace(/<img[^>]*medium\.com\/_\/stat[^>]*>/gi, "")
    .trim();
}

function toExcerpt(html, length = 160) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length).trimEnd()}…`;
}

function extractTag(itemXml, tag) {
  const match = itemXml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  if (!match) {
    return "";
  }

  const raw = match[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return (cdata ? cdata[1] : raw).trim();
}

function parseFeed(xml) {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

  return items.map((itemXml) => {
    const title = decodeEntities(extractTag(itemXml, "title"));
    const link = extractTag(itemXml, "link").split("?")[0];
    const pubDate = extractTag(itemXml, "pubDate");
    const parsedDate = pubDate ? new Date(pubDate) : null;
    const year = parsedDate && Number.isFinite(parsedDate.getFullYear()) ? String(parsedDate.getFullYear()) : "";
    const content = cleanContent(extractTag(itemXml, "content:encoded"));

    return {
      title,
      link,
      year,
      isoDate: parsedDate ? parsedDate.toISOString() : null,
      slug: slugFromLink(link),
      content,
      excerpt: toExcerpt(content),
    };
  });
}

export async function getMediumPosts() {
  try {
    const res = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return [];
    }

    const xml = await res.text();
    return parseFeed(xml).filter((post) => post.title && post.link && post.slug);
  } catch {
    return [];
  }
}

export async function getMediumPost(slug) {
  const posts = await getMediumPosts();
  return posts.find((post) => post.slug === slug) || null;
}
