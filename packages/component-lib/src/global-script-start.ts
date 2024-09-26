declare global {
  interface Window {
    CustomAPI?: {
      color: string,
    },
    CustomConfig: {
      color?: string;
      onReady?(api? : any): any;
    }
  }
}

export default function() {
  const customConfig = window?.CustomConfig;
  window.CustomAPI = {
    color: customConfig?.color || "#003DA5",
  }
  const api = window.CustomAPI;
  window.document.documentElement.style.setProperty("--stencil-custom-color", api.color);
  if (customConfig && typeof customConfig.onReady === 'function') customConfig.onReady(api);
}
