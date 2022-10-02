import { DATE_FORMAT, FULL_DATETIME_FORMAT } from '@/constants/datetime';
import { describe, expect, test } from '@jest/globals';
import { formatLocalTime, formatUtcTime, localTimeToUtc, utcToLocalTime } from './datetime';

describe('datetime helpers', () => {
  test('utcToLocalTime(2021-10-17) should equal 2021-10-17 07:00:00', () => {
    expect(utcToLocalTime('2021-10-17', DATE_FORMAT, FULL_DATETIME_FORMAT)).toBe('2021-10-17 07:00:00');
  });

  test('localTimeToUtc(2021-10-17) should equal 2021-10-16 17:00:00', () => {
    expect(localTimeToUtc('2021-10-17', FULL_DATETIME_FORMAT, FULL_DATETIME_FORMAT)).toBe('2021-10-16 17:00:00');
  });

  test('formatUtcTime(2021-10-17) should equal 2021-10-17 00:00:00', () => {
    expect(formatUtcTime('2021-10-17', DATE_FORMAT, FULL_DATETIME_FORMAT)).toBe('2021-10-17 00:00:00');
  });

  test('formatLocalTime(2021-10-17) should equal 2021-10-17 00:00:00', () => {
    expect(formatLocalTime('2021-10-17', DATE_FORMAT, FULL_DATETIME_FORMAT)).toBe('2021-10-17 00:00:00');
  });
});
