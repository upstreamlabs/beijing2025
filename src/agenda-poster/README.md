# Agenda Poster Generator

Generates the GOBI 2025 conference agenda poster as a high-resolution PNG.

## Files

- `agenda-poster.html` - HTML template for the agenda poster
- `generate.cjs` - Node.js script to generate PNG from HTML
- `agenda-poster.png` - Generated output (3x resolution)

## Usage

```bash
# From the project root directory
node src/agenda-poster/generate.cjs
```

## Dependencies

- [Playwright](https://playwright.dev/) - For HTML to PNG rendering

## Output

The script generates `agenda-poster.png` at 3x device scale factor for high-resolution output.

## Editing

1. Edit `agenda-poster.html` to update the agenda content
2. Run the generate script to regenerate the PNG
3. Images are referenced from `../../public/images/`
