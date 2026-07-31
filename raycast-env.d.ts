/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** History Lookback (days) - How far back to scan ~/.claude/projects to learn your day-of-week usage pattern. */
  "lookbackDays": string,
  /** Warn Threshold (%) - Menu bar turns orange at or above this weekly utilization. */
  "warnAt": string,
  /** Danger Threshold (%) - Menu bar turns red at or above this weekly utilization. */
  "dangerAt": string,
  /** Chart Rendering - How to draw the graph in the detail view. */
  "chartMode": "dataUri" | "file" | "blocks",
  /** Menu Bar Title - What to display in the menu bar. */
  "menuBarShow": "weekly" | "both" | "spark" | "icon"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
  /** Preferences accessible in the `weekly-usage` command */
  export type WeeklyUsage = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
  /** Arguments passed to the `weekly-usage` command */
  export type WeeklyUsage = {}
}

