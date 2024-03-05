const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  getVersions: () => ipcRenderer.invoke("versions:get"),
});
