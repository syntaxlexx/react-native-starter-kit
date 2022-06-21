import * as Device from "expo-device";

const useDeviceInfo = () => {
  const get = async () => {
    let deviceType = await Device.getDeviceTypeAsync();
    return {
      isDevice: Device.isDevice,
      deviceName: Device.deviceName,
      deviceType: deviceType ? Device.DeviceType[deviceType] : null,
      brand: Device.brand,
      model: Device.modelName,
      osName: Device.osName,
      osVersion: Device.osVersion,
      manufacturer: Device.manufacturer,
      supportedCpuArchitectures: Device.supportedCpuArchitectures,
    };
  };

  return {
    get,
  };
};

export default useDeviceInfo;
