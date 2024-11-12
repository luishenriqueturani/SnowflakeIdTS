import { SnowflakeId } from "./SnowflakeId";

const snowflakeId = new SnowflakeId(0, 0)

console.log(snowflakeId.nextId())
console.log(snowflakeId.extractAll(BigInt(snowflakeId.nextId())))

console.log(snowflakeId.nextId())
console.log(snowflakeId.extractAll(BigInt(snowflakeId.nextId())))

console.log(snowflakeId.nextId())
console.log(snowflakeId.extractAll(BigInt(snowflakeId.nextId())))