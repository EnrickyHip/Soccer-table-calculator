/// <reference types="@sveltejs/kit" />

import type { Subscriber, Unsubscriber } from 'svelte/store';
import type Match from './API/Match';
import type RoundRobinTeam from './API/RoundRobinTeam';
import type RoundRobinTournament from './API/RoundRobinTournament';
import type { Score } from './API/types/types';

export interface SortEventDetail {
  detail: {
    attribute : keyof RoundRobinTeam;
  }
}
export interface RoundRobinStore {
  subscribe: (this: void, run: Subscriber<RoundRobinTournament>) => Unsubscriber;
  playMatch: (match: Match, score: Score) => void;
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}
