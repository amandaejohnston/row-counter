import Dexie, { type EntityTable } from 'dexie';
import type { Counter } from './types';

export const db = new Dexie('CountersDatabase') as Dexie & {
  counters: EntityTable<Counter, 'id'>
};

db.version(2).stores({
  counters: '++id, name, color, count'
});
