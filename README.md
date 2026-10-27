# Human Systems Lab website

Staging source for the HSL Netlify shell. The initial website files reproduce the October 20 circular-wolf shell package. They embed the established Learning Community Apps Script Hub; they do not replace or deploy it.

## Instructor bookmark

[Open the Google-authenticated HSL instructor dashboard](https://script.google.com/macros/s/AKfycbypxsHRUdp4m-MKRWeTyun-eatGSyLP_d1-mDjWRdz5FYg-CNJCtfRFIYmZ3fVDSoyB/exec)

This separate bookmark requires the authorized Google account and an active instructor binding. Google may show an account chooser, sign-in, or consent screen. The link itself does not grant access; other accounts are denied. Normal entry through the HSL Hub retains the HSL pseudonym/code login.

## Hosting boundary

Netlify publishes **only `website/`**. Run `node scripts/check-site.mjs` before deployment. No build dependencies are required. Apps Script still provides the live Hub, identity, activities, Results, instructor tools, calendar, Sheets and Canvas operations. Activities can open Google URLs or new tabs; this repository does not introduce unified activity routing.

The repository is public. Never commit records, roster exports, pseudonym/passcode lists, credentials, Apps Script properties, or unsanitized backend snapshots. Private source preservation remains a separate maintenance task.

## Initial staging setup

1. In Netlify, choose Add new project > Import an existing project > GitHub.
2. Select `cantrellionaire/human-systems-lab` and create a **new** project, with a distinct staging name. Do not import into, rename, disconnect or modify `mcckchsl`.
3. Use branch `main`. Configuration supplies build command `node scripts/check-site.mjs` and publish directory `website`.
4. Verify the deployed commit, shell assets and live Hub rendering. Pull requests may generate Deploy Previews after the repository connection is configured.
5. Website deployment is automatic only after that connection exists. Source commits do not deploy Apps Script.

Approve changes through reviewed pull requests before merging to the deployment branch. A direct push to that branch can deploy immediately, so this convention must be reinforced with branch rules where account permissions and plan support them. No branch rule or GitHub/Netlify integration is claimed configured by these files.

## Verification before student transition

Use isolated QA records and cloned backend workbooks for submission testing. A separate Netlify URL **does not isolate data**: its iframe still points at the live Hub. Do not submit or publish test work through that connection. Capture an isolated backend mapping before testing writes.

Test profile connection, released evidence and one-time Results handoff, return navigation, all activity links, save confirmation/retry/reload, instructor tools, Canvas/CSV operations, desktop and actual mobile browsers, installed-app behavior, dark/light themes, reduced motion, keyboard focus and readable failure states. Source validation is not a substitute for these checks.

## Recovery

Retain the previous successful Netlify deployment and commit. Roll back the website through Netlify's published deployment controls or a reviewed Git revert. The current `mcckchsl` site, direct Apps Script URLs and Canvas links remain fallbacks until a separately approved transition. A website rollback does not roll back Apps Script or spreadsheet data.

The worker caches the shell for offline branding. Live activities need a network connection. Bump the shell cache version for shell releases and test updates without clearing private student state.

## Canonical documentation

Update these existing documents in place after verified changes. Do not treat this deployment README as a competing technical registry.

- Technical Registry (existing private Drive document)
- Design Blueprint (existing private Drive document)
- Change Log (existing private Drive document)
- Restoration Guide (existing private Drive document)

Existing `hsl-assets` is retained. No production deployment, data migration, Apps Script push, or Canvas link update is part of this initial source setup.
