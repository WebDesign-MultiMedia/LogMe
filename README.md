# MyCarLogs

Live site: https://webdesign-multimedia.github.io/LogMe/

A simple, no-login web app for keeping a permanent record of every maintenance job, repair, and part that's ever gone into your vehicle — logged straight to a Google Sheet you own.

## What is it?

MyCarLogs is a browser-based logbook with two forms — **Maintenance/Repair** and **Auto Parts** — plus a dashboard of trusted third-party resources (repair videos, OBD2 code lookups, workshop manuals, and a license plate/VIN lookup) for when you need to diagnose or research a job. Every entry you submit is written to a connected Google Sheet via the SheetDB API, so your data lives in a spreadsheet you control, not a database you don't.

## Who is it for?

DIY car owners, home mechanics, and anyone who wants a lightweight paper trail of what's been done to their vehicle — mileage at each service, which part was replaced, which side of the car, who did the work, and what it cost — without setting up an account or a database.

## When would you use it?

- Right after a repair or maintenance job, to log what was done, at what mileage, and what it cost.
- Right after buying a part, to track its price, brand, and where it was purchased — handy for warranty claims and re-ordering.
- Before a repair, to pull up quick-reference tools (repair videos, fuse box diagrams, OBD2 code lookups) from the dashboard.

## Where does it run?

Entirely in the browser — it's a static site (HTML/CSS/vanilla JS) with no backend of its own. Data submitted through the forms is sent directly to a Google Sheet via [SheetDB](https://sheetdb.io/), and the site itself is hosted on GitHub Pages.

## How to use it

1. Open the [live site](https://webdesign-multimedia.github.io/LogMe/).
2. Pick a log type from the top nav: the car icon for **Maintenance/Repair**, or the gears icon for **Auto Parts**.
3. Fill in the required fields (marked with `*`) and any optional details, then hit **Submit**.
4. Use the spreadsheet icon in the nav to open the underlying Google Sheet and review your full history.
5. Use the magnifying glass icon to look up a license plate or VIN, and scroll down to the **Repair | DIY Help** dashboard for repair resources and OBD2 scanner recommendations.

## Local development

This is a static site — no build step required.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.
