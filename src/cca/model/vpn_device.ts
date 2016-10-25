// Represents a VPN device that can redirect traffic to a Socks server.
export interface VpnDevice {
  // Starts the VPN, redirecting the traffic to a Socks proxy running on the given port.
  // You can pass a callback to be notified when it gets disconnected.
  start(port: number, onDisconnect: (msg: string) => void) : Promise<string>;

  // Stops the VPN. No more traffic will be rerouted.
  stop() : Promise<string>;
}