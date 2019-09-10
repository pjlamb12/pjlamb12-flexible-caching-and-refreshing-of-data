import { Observable, defer, isObservable, of } from 'rxjs';
import { shareReplay, first, mergeMap } from 'rxjs/operators';

let returnObs$: Observable<any>;

const createReturnObs = (obs: Observable<any>, time: number, bufferReplays: number) =>
	(returnObs$ = obs.pipe(shareReplay(bufferReplays, time)));

export function renewAfterTimer(obs: Observable<any>, timer: number, bufferReplays: number = 1): Observable<any> {
	return createReturnObs(obs, timer, bufferReplays).pipe(
		first(null, defer(() => createReturnObs(obs, timer, bufferReplays))),
		mergeMap(d => (isObservable(d) ? d : of(d))),
	);
}
