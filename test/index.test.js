// test/index.test.js
import { describe, it, expect } from 'vitest';
import { parseMinutesIntoText, alertDescriptionLookup, PANEL_CODES, GATEWAY_CODES, GRUNDFOS_CODES } from '../index';

describe('parseMinutesIntoText', () => {
  it('should correctly parse minutes into text', () => {
    expect(parseMinutesIntoText(1500)).toBe('1 day and 1 hour');
    expect(parseMinutesIntoText(60)).toBe('1 hour');
    expect(parseMinutesIntoText(61)).toBe('1 hour and 1 minute');
    // expect(parseMinutesIntoText(0)).toBe(null);
  });

  it('should return null for invalid input', () => {
    expect(parseMinutesIntoText('invalid')).toBe(null);
    expect(parseMinutesIntoText(NaN)).toBe(null);
  });
});

describe('alertDescriptionLookup', () => {
  it('should return correct description for known PANEL_CODES', () => {
    const result = alertDescriptionLookup('VALVE_OPENLOAD');
    expect(result).toEqual(PANEL_CODES.VALVE_OPENLOAD);
  });

  it('should return correct description for known GATEWAY_CODES', () => {
    const result = alertDescriptionLookup('GATEWAY_DISCONNECT_FRESH', 120);
    expect(result.description).toContain('2 hours');
    expect(result).toEqual({
      ...GATEWAY_CODES.GATEWAY_DISCONNECT_FRESH,
      description: 'The Alfred Gateway is disconnected from the internet and has been for 2 hours. This can happen when the network is down or being worked on and will often recover on its own.'
    });
  });

  it('should return correct description for known GRUNDFOS_CODES', () => {
    const result = alertDescriptionLookup('GRUNDFOS_FAULT_3');
    expect(result).toEqual(GRUNDFOS_CODES['3']);
  });

  it('should return default description for unknown codes', () => {
    const result = alertDescriptionLookup('UNKNOWN_CODE');
    expect(result).toEqual({
      summary: "Unknown",
      description: "An unrecognized error has occurred",
      recommendations: []
    });
  });
});