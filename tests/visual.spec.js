import { expect, test } from "@playwright/test";

const screens = [
  { name: "desktop", viewport: { width: 1440, height: 900 } },
  { name: "mobile", viewport: { width: 390, height: 844 } }
];

async function sampleCanvas(page) {
  return page.evaluate(() => {
    const canvas = document.querySelector("#space-canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    const width = gl.drawingBufferWidth;
    const height = gl.drawingBufferHeight;
    const pixel = new Uint8Array(4);
    let brightSamples = 0;

    for (const xRatio of [0.12, 0.2, 0.28, 0.36, 0.44, 0.52, 0.6, 0.68, 0.76, 0.84, 0.92]) {
      for (const yRatio of [0.14, 0.22, 0.3, 0.38, 0.46, 0.54, 0.62, 0.7, 0.78, 0.86]) {
        gl.readPixels(
          Math.floor(width * xRatio),
          Math.floor(height * yRatio),
          1,
          1,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          pixel
        );
        if (pixel[0] + pixel[1] + pixel[2] > 12) {
          brightSamples += 1;
        }
      }
    }

    return { brightSamples, width, height };
  });
}

for (const screen of screens) {
  test(`hero renders and animates on ${screen.name}`, async ({ page }) => {
    await page.setViewportSize(screen.viewport);
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("陈嘉衍");
    await page.waitForFunction(() => window.__dryoungScene?.getState);
    await page.waitForTimeout(700);

    const firstState = await page.evaluate(() => window.__dryoungScene.getState());
    const firstSample = await sampleCanvas(page);
    await expect(firstSample.width).toBeGreaterThan(300);
    await expect(firstSample.height).toBeGreaterThan(300);
    await expect(firstSample.brightSamples).toBeGreaterThan(0);

    await page.mouse.move(screen.viewport.width * 0.76, screen.viewport.height * 0.32);
    await page.waitForTimeout(900);
    const nextState = await page.evaluate(() => window.__dryoungScene.getState());
    await expect(nextState.particleRotation).not.toBe(firstState.particleRotation);

    await page.screenshot({ path: `artifacts/${screen.name}.png`, fullPage: false });
  });
}
