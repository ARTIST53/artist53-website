# ARTIST53 shop launch plan

Prepared September 30, 2026. This branch is a storefront preview, not a working ecommerce integration.

## What the reference demonstrates

Gabby Zapata's sticker listing identifies the exact 6 x 4 inch format and set of three, includes two product images, a price, quantity selector, stock count, shipping link and Add to Cart. Its material description connects a specification to a practical use, such as water bottles. Its navigation groups products by category. These are useful selling patterns; copy, artwork and brand presentation should remain ARTIST53's own.

Sources:
- https://shopgabbyzapata.com/products/6x4-sticker-sheet
- https://shopgabbyzapata.com/collections/sale
- https://shopgabbyzapata.com/

The observed reference price was $10, reduced from $15. That is an observation, not an ARTIST53 pricing recommendation. Do not copy the reference's sale positioning, personal fundraising story or stock count.

## Current site findings

The homepage directs visitors into portfolio and service inquiries. The root directory contains the deployed static site according to README.md. The legacy public directory is not the documented deployment target and is not changed.

The contact form's inline submit handler prevents submission and displays a placeholder message. It does not deliver inquiries. Connect a real submission endpoint and verify receipt before relying on it as a conversion path. The new shop instead uses a clearly labeled mailto link, requiring the visitor to send the email in their email application.

## Changes in this branch

- Add shop.html, shop.css and shop.js with four category previews, filters, artist context, launch questions and a direct email inquiry link.
- Add a Shop link to existing root pages using the shared navigation markup.
- Give the homepage a direct shop entry point alongside portfolio and service links.
- Reuse existing artwork as collection previews, not manufactured product mockups.
- Do not add unverified prices, inventory, release dates, reviews, material claims, payment buttons or subscriber collection.
- Keep ATL BRAVE out of launch listings until its print preparation and offer are ready.

## Recommended first release

Launch a small set of finished offers, expanding after actual demand:

1. One useful PDF solving a specific problem, such as a logo briefing worksheet. A one page PDF should be sold by its usefulness, not its page count. Show a legible preview and exact contents.
2. One approved art print with one or two sizes, a physical proof and known packaging cost.
3. One sticker pack based on a coherent original character collection. Bundles can make postage and packing more economical than mailing individual low value stickers.
4. One T shirt design after approving a sample, garment specification, size chart and supplier costs.

These are proposed products, not available inventory. The Space Brothers artwork is a collection concept, not approval of a sticker design. Game Over is a print candidate, not a confirmed production file.

## Product page specification

Every live product page should have:

- Descriptive title, final product photos, price, available options and one clear Add to Cart action.
- Exact contents: number of prints, stickers or files. Show size and scale in an additional image.
- A short story about the artwork followed by factual product details.
- Availability drawn from the commerce platform, never hardcoded scarcity.
- Dispatch estimate, shipping policy and return policy near the purchase controls.
- Related items from the same collection after the primary purchase information.

Prints: dimensions, paper, finish, border, framing inclusion or exclusion, packaging and signed status only if verified.
T shirts: actual garment, fit, size chart, fabric, print placement, care, production time and size specific inventory.
Stickers: count, dimensions, finish, adhesive and durability based on supplier specifications or testing.
PDFs: preview, page count, file format, paper size, editable or flat status, required software if any, permitted use, and explicit digital delivery with no physical shipment.

## Checkout architecture

Keep the static portfolio and consider a Shopify commerce backend with its supported Buy Button integration. Shopify documents support for external sites and a Digital Products app for file delivery. No subscription or account was created, and no commerce integration was configured in this branch.

Sources:
- https://help.shopify.com/en/manual/online-sales-channels/buy-button
- https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads

Before choosing a plan, confirm current subscription cost, transaction fees, payment availability and supplier integration for the actual catalog. Configure physical and digital products separately so a PDF does not incur physical shipping. Verify a mixed cart, payment failure, confirmation email, refund and digital delivery with test orders. Do not keep paid PDFs in this public repository.

## Pricing and marketing

Set prices after calculating product cost, packaging, fulfillment labor, payment fees, shipping subsidy and expected replacements. Track contribution per order before advertising spend and fixed overhead. Revenue alone is not proof of profit.

Use a related sticker pack as an optional addition to a print order. Offer a useful collection bundle only if the margin works. Do not lead with discounts or invent crossed out prices.

Send social posts to the matching product page. Use the drawing process to tell the story, then show the finished product and exactly what the buyer receives. A portfolio page can link directly to the corresponding purchasable item when it launches.

A later email signup should have a real provider, explicit subscription consent, a confirmation and unsubscribe process. Do not present the preview email link as a subscription.

Track product views, cart additions, checkout starts, completed purchases and contribution per order when commerce launches. Review these by traffic source and product to locate friction. Add purchase structured data only for real, verified offers.

## Launch inputs still needed

- First approved products, production files and samples.
- Supplier or fulfillment method and unit costs.
- Selling prices, variations, shipping scope and processing times.
- Checkout account, delivery setup and store policies.
- Review on actual desktop and mobile browsers before merging.
