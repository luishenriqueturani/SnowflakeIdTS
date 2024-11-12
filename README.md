# SnowflakeIdTS
Versão do meu SnowflakeId em Jave feito em TypeSCript

## Como usar

```typescript
import { SnowflakeId } from "./SnowflakeId";

const snowflakeId = new SnowflakeId(0, 0);

// Gera um ID
const id = snowflakeId.nextId();

```

## Funções disponíveis

### extractWorkerId

Para obter o workerId do ID

```typescript
const workerId = snowflakeId.extractWorkerId(id);
```

### extractDatacenterId

Para obter o datacenterId do ID

```typescript
const datacenterId = snowflakeId.extractDatacenterId(id);
```

### extractSequence

Para obter a seqüência do ID

```typescript
const sequence = snowflakeId.extractSequence(id);
```

### extractTimestamp

Para obter o timestamp do ID

```typescript
const timestamp = snowflakeId.extractTimestamp(id);
```

### extractAll

Para obter todos os valores do ID

```typescript
const { timestamp, workerId, datacenterId, sequence } = snowflakeId.extractAll(id); 
```

