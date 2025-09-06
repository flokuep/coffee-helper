	export async function setScreenLock() : Promise<WakeLockSentinel | null | undefined> {
        	if (isScreenLockSupported()) {
			try {
				return await navigator.wakeLock.request('screen');
			} catch (error) {
				console.log(`Cannot lock screen: ${error}`);
			}
            return undefined;
		}
    }
    
export function releaseScreenLock(screenLock: WakeLockSentinel | null | undefined) : undefined {
    if (screenLock) {
			screenLock.release().then(() => {
				return undefined;
			});
		}
    }

    function isScreenLockSupported(): boolean {
		return 'wakeLock' in navigator;
	}