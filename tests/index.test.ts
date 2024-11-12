// tests/SnowflakeId.test.ts
import { SnowflakeId } from '../src/SnowflakeId';

describe('SnowflakeId', () => {
  let snowflake: SnowflakeId;

  beforeAll(() => {
    snowflake = new SnowflakeId(1, 1);
  });

  test('should generate unique IDs', () => {
    const id1 = snowflake.nextId();
    const id2 = snowflake.nextId();
    expect(id1).not.toBe(id2);
  });

  test('should throw an error if workerId is out of range', () => {
    expect(() => new SnowflakeId(32, 1)).toThrow("Worker ID must be between 0 and 31");
  });

  test('should throw an error if datacenterId is out of range', () => {
    expect(() => new SnowflakeId(1, 32)).toThrow("Datacenter ID must be between 0 and 31");
  });

  test('should throw an error if clock moves backwards', () => {
    const originalCurrentTimeMillis = Date.now;
    Date.now = jest.fn().mockReturnValue(snowflake['lastTimestamp'] - 1);

    expect(() => snowflake.nextId()).toThrow("Clock moved backwards. Refusing to generate id.");

    Date.now = originalCurrentTimeMillis;
  });

  test('should extract timestamp, workerId, datacenterId, and sequence from ID', () => {
    const id = snowflake.nextId();
    const timestamp = snowflake.extractTimestamp(id);
    const workerId = snowflake.extractWorkerId(id);
    const datacenterId = snowflake.extractDatacenterId(id);
    const sequence = snowflake.extractSequence(id);

    expect(timestamp).toBeGreaterThanOrEqual(snowflake['epoch']);
    expect(workerId).toBe(1);
    expect(datacenterId).toBe(1);
    expect(sequence).toBeGreaterThanOrEqual(0);
  });
});
