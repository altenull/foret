# Change Log

Foret consists of 4 packages, [`foret-react`](./foret-react), [`foret-ng`](./foret-ng), [`foret-sass`](./foret-sass) and [`foret-core`](./foret-core).

This means that our CHANGELOG.md files are distributed alongside the package itself in the each package directory.

In this CHANGELOG.md file, we will log only major changes. Minor and patch version changes are logged in each CHANGELOG.md file that exists for each package.

## 1.0.0 [2020-10-22]

What's included in the v1.0.0 version release.

### foret-react

- theme provider
  - Foret
- button
  - PrimaryButton
  - SecondaryButton
  - DangerButton
- checkbox
  - Checkbox
  - CheckboxGroup
- radio button
  - RadioButton
  - RadioButtonGroup
- select
  - Select
- tab
  - Tab
  - TabGroup
- toggle
  - Toggle
- typography
  - Heading1
  - Heading2
  - Heading3
  - Paragraph
  - Subtitle1
  - Subtitle2
  - SmallText

### foret-ng

- button
  - primary-button **(directive)**
  - secondary-button **(directive)**
  - danger-button **(directive)**
- checkbox
  - checkbox
  - checkbox-group
- radio button
  - radio-button
  - radio-button-group
- select
  - select
- tab
  - tab
  - tab-group
- toggle
  - toggle

### foret-sass

foret-sass provide `.scss` file that includes font assets and mixins related to typography.
This should be imported when using [`foret-ng`](./foret-ng).

### foret-core

- enums
  - color
  - font-weight
- functions
  - hexToRgb
