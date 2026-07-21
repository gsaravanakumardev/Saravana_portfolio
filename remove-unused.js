const fs = require('fs');
const path = require('path');

const unusedFiles = [
  "accordion.tsx",
  "alert-dialog.tsx",
  "alert.tsx",
  "aspect-ratio.tsx",
  "avatar.tsx",
  "badge.tsx",
  "breadcrumb.tsx",
  "button-group.tsx",
  "button.tsx",
  "calendar.tsx",
  "carousel.tsx",
  "checkbox.tsx",
  "collapsible.tsx",
  "command.tsx",
  "context-menu.tsx",
  "dialog.tsx",
  "drawer.tsx",
  "dropdown-menu.tsx",
  "empty.tsx",
  "field.tsx",
  "form.tsx",
  "hover-card.tsx",
  "input-group.tsx",
  "input-otp.tsx",
  "input.tsx",
  "item.tsx",
  "kbd.tsx",
  "label.tsx",
  "menubar.tsx",
  "navigation-menu.tsx",
  "pagination.tsx",
  "popover.tsx",
  "progress.tsx",
  "radio-group.tsx",
  "resizable.tsx",
  "scroll-area.tsx",
  "select.tsx",
  "separator.tsx",
  "sheet.tsx",
  "sidebar.tsx",
  "skeleton.tsx",
  "slider.tsx",
  "sonner.tsx",
  "spinner.tsx",
  "switch.tsx",
  "table.tsx",
  "tabs.tsx",
  "textarea.tsx",
  "toggle-group.tsx",
  "toggle.tsx"
];

const uiDir = path.join(__dirname, 'src', 'components', 'ui');

for (const file of unusedFiles) {
  const fullPath = path.join(uiDir, file);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log(`Deleted ${file}`);
  }
}
