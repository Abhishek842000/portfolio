import { expect, test } from "@playwright/test";

test("hamburger menu opens and jumps to projects", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Abhishek");

  await page.getByRole("button", { name: "Menu" }).click();
  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Projects" }).click();
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
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
  await expect(page.getByRole("heading", { name: "Nflexon" })).toBeVisible();

  const card = page.getByRole("button", { name: /ClaimGuard/ });
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
  await expect(
    page.getByRole("heading", {
      name: "Automated Detection of Diabetic Retinopathy Using VGG-16 Architecture",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Automated Determination of Critical Temperature" }),
  ).toBeVisible();
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
  await expect(dialog.getByRole("link", { name: "Download PDF" })).toHaveAttribute(
    "href",
    "/resume.pdf",
  );
});

test("email copy button reports copied", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#connect");
  await page.getByRole("button", { name: "Copy to clipboard" }).click();
  await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
});
