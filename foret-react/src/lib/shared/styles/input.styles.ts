import { css } from '@emotion/core';
import { Color } from '@altenull/foret-core';

export const inputWrapperStyles = css({
  display: 'inline-block',
  position: 'relative',
  '& + &': {
    marginTop: '16px',
  },
});

export const hiddenInputStyles = css({
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
});

export const labelStyles = (disabled: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'initial' : 'pointer',
  });

export const inputSubtitle1Style = (disabled: boolean) =>
  css({
    ...(disabled && {
      color: Color.Fog,
      transition: 'color 0.15s ease-in-out',
    }),
  });
