Settings while recording the video

```json
{
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.bracketPairColorization.enabled": true,
  "editor.codeActionsOnSave": [
    "source.addMissingImports",
    "source.organizeImports",
    "source.fixAll",
    "source.fixAll.eslint"
  ],
  "editor.cursorBlinking": "expand",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.fontFamily": " 'Fira Code', 'Cascadia Mono PL', Consolas, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.fontLigatures": false,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.inlineSuggest.enabled": true,
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "eslint.rules.customizations": [
    {
      "rule": "*",
      "severity": "warn"
    }
  ],
  "eslint.validate": ["javascript", "typescript"],
  "explorer.compactFolders": false,
  "files.eol": "\n",
  "files.exclude": {
    "**/.DS_Store": true,
    "**/.git": true,
    "**/node_modules": true
  },
  "files.trimTrailingWhitespace": true,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/env/**": true,
    "**/venv/**": true,
    "env-_": true
  },
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "github.copilot.enable": {
    "_": true,
    "yaml": true,
    "plaintext": false,
    "markdown": true
  },
  "githubIssues.ignoreMilestones": [],
  "githubIssues.issueBranchTitle": "${issueNumber}-${sanitizedIssueTitle}",
  "githubIssues.issueCompletionFormatScm": "chore: ${sanitizedIssueTitle} - #${issueNumber}",
  "githubIssues.queries": [
    {
      "label": "My Issues",
      "query": "default"
    },
    {
      "label": "Created Issues",
      "query": "author:${user} state:open repo:${owner}/${repository} sort:created-desc"
    }
  ],
  "githubIssues.useBranchForIssues": "prompt",
  "githubIssues.workingIssueFormatScm": "feat: ${sanitizedIssueTitle} - Closes #${issueNumber}",
  "html.format.wrapAttributes": "force-aligned",
  "material-icon-theme.files.associations": {
    "_.controller.ts": "json",
    "_.domain.ts": "mathematica",
    "_.interceptor.ts": "angular-guard",
    "_.repository.ts": "database",
    "**.routing.module.ts": "routing",
    "**.store.ts": "angular-directive",
    "store.ts": "angular-directive"
  },
  "material-icon-theme.folders.associations": {
    "domain": "class",
    "login": "secure",
    "transactions": "pipe",
    "ui": "components",
    "users": "secure"
  },
  "search.exclude": {
    "node_modules/": true,
    "**/node_modules": true,
    "**/bower_components": true,
    "**/env": true,
    "**/venv": true
  },
  "spellright.documentTypes": ["markdown", "latex", "plaintext", "html", "typescript"],
  "spellright.ignoreFiles": [
    "**/.gitignore",
    "**/.spellignore",
    "/node_modules/",
    "/dist/",
    "/tmp/"
  ],
  "spellright.language": ["en"],
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "window.title": "${dirty}${activeEditorMedium}",
  "workbench.colorCustomizations": {
    "editorError.foreground": "#FF0000",
    "editorInfo.foreground": "#1478DB",
    "editorWarning.foreground": "#FFC600",
    "editorBracketHighlight.foreground1": "#CC00FF",
    "editorBracketHighlight.foreground2": "#00FFFF",
    "editorBracketHighlight.foreground3": "#33FF00",
    "editorBracketHighlight.foreground4": "#FFFF00",
    "editorBracketHighlight.foreground5": "#FFC600",
    "editorBracketHighlight.foreground6": "#FF0000",
    "tab.activeBorder": "#FFFF00",
    "tab.activeBackground": "#193549"
  },
  "workbench.colorTheme": "Cobalt2",
  "workbench.iconTheme": "material-icon-theme",
  "window.zoomLevel": 1
}
```
