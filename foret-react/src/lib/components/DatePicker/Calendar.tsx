/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { defaultTheme } from '../../theme/utils/theme.util';
import { SmallText, Subtitle1 } from '../../typography';

const calendarStyles = css({});

const dayOfWeekStyles = css({
  width: '40px',
});

const dayStyles = css({
  textAlign: 'center',
  height: '40px',
  borderRadius: '50%',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: defaultTheme.colors.foretGreenLighten,
  },
});

const Calendar: React.FC = () => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const days = [1, 2, 3, 4, 5, 6, 7];

  return (
    <table css={calendarStyles}>
      <thead>
        <tr>
          {daysOfWeek.map((dayOfWeek: string) => (
            <th key={dayOfWeek} css={dayOfWeekStyles}>
              <Subtitle1>{dayOfWeek}</Subtitle1>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {days.map((day: number) => (
            <td key={day} css={dayStyles}>
              <SmallText>{day}</SmallText>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Calendar;
