# How to update your portfolio

Everything you see on the site comes from ONE file: `data.js`. The design never needs touching.

## Add a project
1. Save a screenshot (about 1400 px wide, .webp or .jpg) into the `img` folder.
2. Open `data.js`, copy one whole block inside `projects: [ ... ]`, paste it below, change `id` (unique, no spaces), title, category, summary, image name, highlights.
3. To make a skill clickable, add the project `id` to that skill's `projects: [...]` list.

## Add a certificate / achievement / role / visit
Copy one block in `certifications`, `achievements`, `leadership.groups` or `visits`, paste, edit. Add the picture to `img` and write its file name.

## Change photo, CV, text
- Photo: replace the file in `img` (or change `profile.photo`).
- CV: put the PDF in `assets/` named `Ashrafe-Bin-Alim-CV.pdf` (replace to update).
- Text: edit it in `data.js`. Keep the quotes and commas.

## Publish the change (GitHub web)
Repository → **Add file → Upload files** → drop changed files → **Commit changes**. For `data.js` you can instead open it → pencil icon → edit → Commit. The site updates in 1–2 minutes.

## Rules
Keep quotes `" "` and commas exactly as in the examples. Change the `updated` date at the top of `data.js`.

## Make the contact form deliver to your inbox (Web3Forms, free)
1. Go to web3forms.com, enter ashrafacc20@gmail.com under "Create your Access Key" and submit.
2. Open the email they send you and copy the access key.
3. In `data.js`, paste it between the quotes: `web3formsKey: "your-key-here",` and commit.
4. Send yourself a test message from the live site. Check Spam the first time.
