import { expect, test } from "@playwright/test";

test("hamburger menu opens and jumps to projects", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Abhishek");

  await page.getByRole("button", { name: "Menu" }).click();
  const nav = page.getByRole("navigation", { name: "Primary" });
  await expect(nav.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Experience" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Education" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Publications" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Skills" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
  await nav.getByRole("link", { name: "Projects" }).click();
  await expect(nav).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
});

test("hamburger education link opens the education timeline", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Menu" }).click();
  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Education" }).click();
  await expect(
    page.getByRole("heading", { name: "Master of Science in Information Technology" }),
  ).toBeVisible();
});

test("experience and education tabs toggle", async ({ page }) => {
  await page.goto("/#experience");
  await expect(
    page.getByRole("heading", { name: "Software Engineer", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Education" }).click();
  await expect(
    page.getByRole("heading", { name: "Master of Science in Information Technology" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Experience" }).click();
  await expect(
    page.getByRole("heading", { name: "Software Engineer", exact: true }),
  ).toBeVisible();
});

test("project card hover reveals view project and modal is centered", async ({
  page,
}) => {
  await page.goto("/#projects");
  await expect(
    page.getByRole("heading", {
      name: "Field app for QR-scanning, certifying, and tracing LAN installs",
    }),
  ).toBeVisible();

  const card = page.getByRole("button", { name: /View ClaimGuard/ });
  const viewLabel = card.getByText("View project");
  await expect(viewLabel).toHaveCSS("opacity", "0");
  await card.hover();
  await expect
    .poll(async () => Number(await viewLabel.evaluate((el) => getComputedStyle(el).opacity)))
    .toBeGreaterThan(0.9);

  await card.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "ClaimGuard" })).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "Key Features" })).toBeVisible();
  await expect(dialog.getByRole("link", { name: "View on GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/Abhishek842000/claimguard",
  );
  await expect(dialog.getByRole("link", { name: "Try it out" })).toHaveCount(0);
  await page.getByRole("button", { name: "Close project" }).click({
    position: { x: 8, y: 8 },
  });
  await expect(dialog).toHaveCount(0);
});

test("publications list the two papers", async ({ page }) => {
  await page.goto("/#publication");
  const retinopathy = page.getByRole("link", {
    name: "Automated Detection of Diabetic Retinopathy Using VGG-16 Architecture",
  });
  const criticalTemp = page.getByRole("link", {
    name: "Automated Determination of Critical Temperature",
  });
  await expect(retinopathy).toBeVisible();
  await expect(retinopathy).toHaveAttribute(
    "href",
    "https://www.irjet.net/archives/V8/i3/IRJET-V8I3564.pdf",
  );
  await expect(criticalTemp).toBeVisible();
  await expect(criticalTemp).toHaveAttribute(
    "href",
    "https://link.springer.com/chapter/10.1007/978-981-16-5157-1_19",
  );
  await expect(page.getByRole("link", { name: "Read on IRJET" })).toHaveAttribute(
    "href",
    "https://www.irjet.net/archives/V8/i3/IRJET-V8I3564.pdf",
  );
  await expect(page.getByRole("link", { name: "Read on Springer" })).toHaveAttribute(
    "href",
    "https://link.springer.com/chapter/10.1007/978-981-16-5157-1_19",
  );
  await expect(page.getByText("Journal paper", { exact: true })).toBeVisible();
  await expect(page.getByText("Conference paper", { exact: true })).toBeVisible();
  await expect(
    page.getByText("A pretrained VGG-16 model grades diabetic retinopathy severity", {
      exact: false,
    }),
  ).toBeVisible();
  await expect(
    page.locator("#publication article").filter({ hasText: "Abhishek Deshpande" }),
  ).toHaveCount(2);
  const accent = page.locator(".publication-accent").first();
  await expect(accent).toHaveCSS("background-image", /linear-gradient/i);
  await expect(page.getByRole("link", { name: "Google Scholar profile →" })).toHaveAttribute(
    "href",
    /scholar\.google\.com\/citations/,
  );
});

test("resume modal opens from the hero", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "My resume →" }).click();
  const dialog = page.getByRole("dialog", { name: "Resume" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link", { name: "Download" })).toHaveAttribute(
    "href",
    "/resume.pdf",
  );
  await expect(dialog.locator("iframe[title='Resume PDF']")).toHaveAttribute(
    "src",
    /\/resume\.pdf/,
  );
  const sheet = dialog.locator(".resume-sheet");
  const dialogBox = await dialog.boundingBox();
  const sheetBox = await sheet.boundingBox();
  expect(dialogBox).toBeTruthy();
  expect(sheetBox).toBeTruthy();
  expect(sheetBox!.width).toBeLessThan(dialogBox!.width * 0.72);
  expect(sheetBox!.height).toBeLessThanOrEqual(dialogBox!.height);
  await dialog.getByRole("button", { name: "Close" }).click();
  await expect(dialog).toHaveCount(0);
});

test("email copy button reports copied", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#connect");
  await page.getByRole("button", { name: "Copy to clipboard" }).click();
  await expect(page.getByRole("button", { name: "Copied", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Email copied" })).toBeVisible();
  await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/sfc-abhi/",
  );
  await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/Abhishek842000",
  );
  await expect(page.getByRole("link", { name: "Email" })).toHaveAttribute(
    "href",
    "mailto:abhishekdeshpande222@gmail.com",
  );
});

test("skills columns render and hover uses brand borders", async ({ page }) => {
  await page.goto("/#skills");
  await expect(
    page.getByRole("heading", { name: "Programming & Data" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Machine Learning & AI" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Backend & DevOps" }),
  ).toBeVisible();
  await expect(page.getByText("Python", { exact: true })).toBeVisible();
  await expect(page.getByText("LangGraph", { exact: true })).toBeVisible();
  await expect(page.getByText("Kubernetes", { exact: true })).toBeVisible();

  const python = page.locator('[data-skill="Python"]');
  const postgres = page.locator('[data-skill="Postgres"]');
  const docker = page.locator('[data-skill="Docker"]');
  await expect(python).toHaveCSS("border-top-color", "rgb(230, 230, 234)");

  await postgres.scrollIntoViewIfNeeded();
  await postgres.hover();
  await expect
    .poll(async () => postgres.evaluate((el) => getComputedStyle(el).borderTopColor))
    .toBe("rgb(65, 105, 225)");

  await docker.scrollIntoViewIfNeeded();
  await docker.hover();
  await expect
    .poll(async () => docker.evaluate((el) => getComputedStyle(el).borderTopColor))
    .toBe("rgb(36, 150, 237)");
});

test("sitemap and robots are served", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toMatch(/<urlset/i);
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  const body = await robots.text();
  expect(body).toMatch(/Allow:\s*\//i);
  expect(body).toMatch(/sitemap/i);
});
