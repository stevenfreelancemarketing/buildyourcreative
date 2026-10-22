# BuildYourCreative — simple HTML edition
All files sit at the same level. No Node, terminal, npm, build command, or nested folders required.

## New GitHub repository
The old repository can stay untouched. A new empty repository named buildyourcreative-site can hold this edition. Upload every file from this extracted folder directly into the repository, then Commit changes. Do not upload the ZIP itself.

## Netlify hosting (original plan)
Import the new GitHub repository. Build command: blank. Publish directory: . (one dot). Base directory: blank. The included netlify.toml sets the publish directory.
Enable Netlify form detection and redeploy. Confirm project-inquiry is detected, configure email notifications to stevenmarketingfreelance@gmail.com, then test an actual submission and delivery. A successful upload alone does not verify the form.

## GitHub Pages hosting instead
For a public repository: Settings > Pages > Deploy from a branch > main > /(root) > Save.
On a github.io address, the inquiry form prepares an email draft. Visitors must send that email themselves. It does not silently collect leads or claim to have sent them. For a custom domain on GitHub Pages, change forceEmailDraft to true at the top of site.js. Netlify-hosted sites keep it false.

## Editing
Page text is directly in index.html, pricing.html, process.html, inquire.html, privacy.html. Shared styling is site.css. Interactions are readable site.js. The two example templates are at the bottom of index.html; changes to demo content should also update those templates. Header/footer markup is repeated across pages, so changes to navigation should be applied to each page.

Preserved: design, current public pricing, imagery, category switcher, enlarged previews, mobile navigation. No client testimonials were invented. Demo reviews stay labeled simulated. No domain or remote repository was created by this export.

Verification: export generated, local links/assets and JS syntax checked. Live browser layout, live Netlify submissions, email delivery and DNS are not verified. Search indexing is enabled for the public content pages; no ranking or indexing guarantee is made.
