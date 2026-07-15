# Netlify Build Diagnostics

## Current Status

We've fixed:
✅ PORT environment variable issue  
✅ pnpm-lock.yaml sync issue  
✅ Changed build command to `pnpm run build` (was `npm run build`)

## Latest Change

**Commit:** Updated netlify.toml to use `pnpm run build` instead of `npm run build`

**Why:** This is a pnpm workspace, so we need to use pnpm for builds.

## What I Need From You

To diagnose the current build failure, please provide:

### 1. Full Netlify Build Log

Go to your Netlify dashboard:
1. Click on your site
2. Go to "Deploys" tab  
3. Click on the failed deploy
4. Scroll down to see the full build log
5. **Copy the ENTIRE log** (or at least the last 150 lines)
6. Paste it in your reply

### 2. Netlify Build Settings

Go to: **Site settings → Build & deploy → Build settings**

Please confirm/share:
- **Build command:** Should show what command Netlify is running
- **Publish directory:** Should show what directory it's deploying from
- **Base directory:** Should be `artifacts/lloyd-it-support`

Take a screenshot or copy the values.

## Common Issues to Check

### Issue 1: Build Command Mismatch
**Symptom:** Netlify might still be using old command from UI  
**Check:** Build settings in Netlify UI  
**Fix:** Ensure it matches netlify.toml OR remove override from UI to use netlify.toml

### Issue 2: Publish Directory Wrong
**Symptom:** Build succeeds but "No files found" or 404 on deploy  
**Expected:** `dist/public` (relative to base directory)  
**Check:** Look for this in build log: "Publish directory: /opt/build/repo/artifacts/lloyd-it-support/dist/public"

### Issue 3: Missing Dependencies
**Symptom:** Build fails with "Cannot find module" errors  
**Check:** Build log will show which module is missing  
**Fix:** We'll add it to package.json

### Issue 4: Build Process Failing
**Symptom:** Vite/Rollup errors during build  
**Check:** Build log will show the actual error  
**Fix:** Depends on the specific error

## Possible Solutions (Based on Common Patterns)

### If build command is wrong in UI:
1. Netlify → Site settings → Build & deploy → Build settings
2. Click "Edit settings"
3. **Either:**
   - Set Build command to: `pnpm run build`  
   - OR clear it to use netlify.toml (recommended)

### If publish directory is wrong:
1. Same location as above
2. Ensure Publish directory is: `dist/public`
3. Ensure Base directory is: `artifacts/lloyd-it-support`

### If it's a dependency issue:
Once you share the log, I'll identify the missing package and add it.

## What to Share

Please reply with:

```
BUILD LOG:
[paste full build log here]

BUILD SETTINGS:
Build command: [value from Netlify UI]
Publish directory: [value from Netlify UI]
Base directory: [value from Netlify UI]
```

Then I can provide the exact fix!

## Quick Checks You Can Try Now

### Option 1: Clear Override in Netlify UI
1. Go to Build settings
2. If "Build command" shows a value (not using netlify.toml), clear it
3. Trigger new deploy

### Option 2: Explicitly Set pnpm
1. Build settings → Edit
2. Build command: `pnpm run build`
3. Save and deploy

---

**Latest commit:** Will be pushed after this file  
**Status:** Waiting for build log to diagnose
