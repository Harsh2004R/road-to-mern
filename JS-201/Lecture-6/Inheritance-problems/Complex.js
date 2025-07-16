
// You're going to simulate a smartphone ecosystem using ES6 classes with inheritance.
// Challenge: Smartphone Ecosystem Simulation
// You’re building a Smartphone Ecosystem simulation that involves:


class Smartphone {
    constructor(brand, model, battery, apps, storage, usedStorage) {
        this.brand = brand
        this.model = model
        this.battery = battery // battery percentage
        this.apps = apps || {} // apps as object { appName: size }
        this.storage = storage // total storage in GB
        this.usedStorage = usedStorage || 0 // used storage in GB
    }

    installApp(appName, size) {
        if (this.usedStorage + size > this.storage) {
            return `Not enough storage to install ${appName}`;
        }
        this.apps[appName] = size;
        this.usedStorage += size;
        return `${appName} installed. Used Storage: ${this.usedStorage} GB`;
    }

    uninstallApp(appName) {
        if (!this.apps[appName]) {
            return `${appName} is not installed.`;
        }
        this.usedStorage = this.usedStorage - this.apps[appName];
        delete this.apps[appName];
        return `${appName} uninstalled. Used Storage: ${this.usedStorage} GB`;
    }

    charge(percent) {
        this.battery = Math.min(100, this.battery + percent);
        return `Charged to ${this.battery}%`;
    }

    useApp(appName, batteryUsage) {
        if (!this.apps[appName]) {
            return `${appName} is not installed.`;
        }
        if (this.battery < batteryUsage) {
            return `Not enough battery to use ${appName}`;
        }
        this.battery -= batteryUsage;
        return `Used ${appName}. Battery now at ${this.battery}%`;
    }

    freeStorage() {
        return `${this.storage - this.usedStorage} GB free`;
    }

    static compareBattery(phone1, phone2) {
        if (phone1.battery > phone2.battery) {
            return `${phone1.model} has more battery`;
        } else if (phone1.battery < phone2.battery) {
            return `${phone2.model} has more battery`;
        } else {
            return `Both phones have the same battery`;
        }
    }
}

class AndroidPhone extends Smartphone {
    constructor(brand, model, battery, apps, storage, usedStorage, playStoreVersion) {
        super(brand, model, battery, apps, storage, usedStorage);
        this.playStoreVersion = playStoreVersion;
    }

    updatePlayStore(newVersion) {
        this.playStoreVersion = newVersion;
        return `Play Store updated to version ${this.playStoreVersion}`;
    }
}

class IPhone extends AndroidPhone {
    constructor(brand, model, battery, apps, storage, usedStorage, playStoreVersion, iOSVersion) {
        super(brand, model, battery, apps, storage, usedStorage, playStoreVersion);
        this.iOSVersion = iOSVersion;
    }

    updateIOS(newVersion) {
        this.iOSVersion = newVersion;
        return `iOS updated to version ${this.iOSVersion}`;
    }
}





















const pixel = new IPhone("Google", "Pixel 6", 85, {}, 128, 4, "34.2.1", "16.3");

console.log(pixel.installApp("Facebook", 4)); // Should install
console.log(pixel.uninstallApp("Spotify"));   // Should say not installed
console.log(pixel.installApp("Spotify", 6));
console.log(pixel.useApp("Spotify", 5));
console.log(pixel.freeStorage()); // Should show correct free storage

const iphone = new IPhone("Apple", "iPhone 14", 90, {}, 256, 10, "34.0", "17.0");

console.log(Smartphone.compareBattery(pixel, iphone)); // iPhone 14 has more battery




