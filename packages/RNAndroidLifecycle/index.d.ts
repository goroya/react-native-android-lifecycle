export type eventNS = string[];
export interface Listener {
    (...values: any[]): void;
}
export interface EventAndListener {
    (event: string | string[], ...values: any[]): void;
}

export interface RNAndroidLifecycleInstance {
    addListener(event: string, listener: Listener): this;
    on(event: string | string[], listener: Listener): this;
    prependListener(event: string | string[], listener: Listener): this;
    once(event: string | string[], listener: Listener): this;
    prependOnceListener(event: string | string[], listener: Listener): this;
    many(event: string | string[], timesToListen: number, listener: Listener): this;
    prependMany(event: string | string[], timesToListen: number, listener: Listener): this;
    onAny(listener: EventAndListener): this;
    prependAny(listener: EventAndListener): this;
    offAny(listener: Listener): this;
    removeListener(event: string | string[], listener: Listener): this;
    off(event: string, listener: Listener): this;
    removeAllListeners(event?: string | eventNS): this;
    setMaxListeners(n: number): void;
    eventNames(): string[];
    listeners(event: string | string[]): Listener[]
    listenersAny(): Listener[]
}

export interface RNAndroidLifecycleStatic extends RNAndroidLifecycleInstance{
    create(): RNAndroidLifecycleInstance;
}
declare const RNAndroidLifecycle: RNAndroidLifecycleStatic;
export default RNAndroidLifecycle;
